import { NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/config/business";
import { contactSchema } from "@/lib/contact-schema";
import type { ContactApiResponse, ContactPayload } from "@/lib/contact-schema";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestBuckets = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const recent = (requestBuckets.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );

  if (recent.length >= MAX_REQUESTS) {
    requestBuckets.set(ip, recent);
    return false;
  }

  recent.push(now);
  requestBuckets.set(ip, recent);

  if (requestBuckets.size > 500) {
    for (const [key, timestamps] of requestBuckets.entries()) {
      if (timestamps.every((timestamp) => now - timestamp >= WINDOW_MS)) {
        requestBuckets.delete(key);
      }
    }
  }

  return true;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validationResponse(
  fieldErrors: Partial<Record<keyof ContactPayload, string>>,
) {
  return NextResponse.json<ContactApiResponse>(
    {
      ok: false,
      code: "VALIDATION",
      message: "Please review the highlighted fields and try again.",
      fieldErrors,
    },
    { status: 422 },
  );
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 32_000) {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        code: "VALIDATION",
        message: "The request is too large.",
      },
      { status: 413 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        code: "VALIDATION",
        message: "The request could not be read. Please try again.",
      },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactPayload, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactPayload | undefined;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return validationResponse(fieldErrors);
  }

  const data = parsed.data;

  if (data.website) {
    return NextResponse.json<ContactApiResponse>({
      ok: true,
      message: "Thank you. Your enquiry has been received.",
    });
  }

  const startedAt = new Date(data.startedAt).getTime();
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < 2_500 || elapsed > 86_400_000) {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        code: "VALIDATION",
        message: "Please reload the page and submit the form again.",
      },
      { status: 400 },
    );
  }

  if (!checkRateLimit(getClientIp(request))) {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        code: "RATE_LIMITED",
        message:
          "Too many enquiries have been sent from this connection. Please try again later or email directly.",
      },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || business.email;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    `${business.name} <onboarding@resend.dev>`;

  if (!apiKey) {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        code: "NOT_CONFIGURED",
        message: `The enquiry form is not connected to email yet. Please email ${business.email} directly.`,
      },
      { status: 503 },
    );
  }

  const safeName = data.name.replace(/[\r\n]+/g, " ");
  const rows: { label: string; value: string }[] = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
    ...(data.phone ? [{ label: "Phone", value: data.phone }] : []),
    ...(data.company ? [{ label: "Company", value: data.company }] : []),
    { label: "Service", value: data.service },
    { label: "Budget", value: data.budget },
    { label: "Timeline", value: data.timeline },
    { label: "Preferred contact", value: data.contactMethod },
  ];

  const htmlRows = rows
    .map(
      (row) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#626557;vertical-align:top;white-space:nowrap;">${escapeHtml(
          row.label,
        )}</td><td style="padding:6px 0;color:#13150f;">${escapeHtml(
          row.value,
        )}</td></tr>`,
    )
    .join("");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `Project enquiry from ${safeName}`,
      text: [
        "New project enquiry",
        "",
        ...rows.map((row) => `${row.label}: ${row.value}`),
        "",
        "Project details:",
        data.message,
      ].join("\n"),
      html: `
        <div style="background:#f4f1e9;padding:32px;font-family:Arial,sans-serif;">
          <div style="max-width:640px;margin:0 auto;background:#faf7f0;border:1px solid #d9d4c6;padding:28px;">
            <p style="margin:0 0 6px;color:#626557;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;">New project enquiry</p>
            <h1 style="margin:0 0 22px;color:#13150f;font-size:24px;font-weight:600;">${escapeHtml(
              data.name,
            )}</h1>
            <table style="border-collapse:collapse;font-size:14px;line-height:1.5;">${htmlRows}</table>
            <div style="margin-top:24px;padding-top:20px;border-top:1px solid #d9d4c6;">
              <p style="margin:0 0 8px;color:#626557;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;">Project details</p>
              <p style="margin:0;color:#13150f;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(
                data.message,
              )}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json<ContactApiResponse>(
        {
          ok: false,
          code: "SEND_FAILED",
          message:
            `The enquiry could not be delivered. Please email ${business.email} directly.`,
        },
        { status: 502 },
      );
    }

    const customerText = [
      `Hi ${safeName},`,
      "",
      `Thank you for your enquiry to ${business.name}. It has been received and will be reviewed personally.`,
      "",
      "Here is a copy of what you shared:",
      `Service: ${data.service}`,
      `Budget: ${data.budget}`,
      `Timeline: ${data.timeline}`,
      `Preferred contact: ${data.contactMethod}`,
      "",
      `You will receive a reply with a clear next step at ${business.email}${
        business.phone ? ` or ${business.phone}` : ""
      }.`,
      "",
      business.responseNote,
      "",
      business.name,
      business.email,
      ...(business.phone ? [business.phone] : []),
    ].join("\n");

    const customerHtml = `
      <div style="background:#f4f1e9;padding:32px;font-family:Arial,sans-serif;">
        <div style="max-width:640px;margin:0 auto;background:#faf7f0;border:1px solid #d9d4c6;padding:28px;">
          <p style="margin:0 0 6px;color:#626557;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;">Enquiry received</p>
          <h1 style="margin:0 0 18px;color:#13150f;font-size:24px;font-weight:600;">Thank you, ${escapeHtml(
            safeName,
          )}.</h1>
          <p style="margin:0 0 18px;color:#13150f;font-size:14px;line-height:1.7;">Thank you for your enquiry to ${escapeHtml(
            business.name,
          )}. It has been received and will be reviewed personally.</p>
          <table style="border-collapse:collapse;font-size:14px;line-height:1.5;">
            <tr><td style="padding:4px 16px 4px 0;color:#626557;">Service</td><td style="padding:4px 0;color:#13150f;">${escapeHtml(
              data.service,
            )}</td></tr>
            <tr><td style="padding:4px 16px 4px 0;color:#626557;">Budget</td><td style="padding:4px 0;color:#13150f;">${escapeHtml(
              data.budget,
            )}</td></tr>
            <tr><td style="padding:4px 16px 4px 0;color:#626557;">Timeline</td><td style="padding:4px 0;color:#13150f;">${escapeHtml(
              data.timeline,
            )}</td></tr>
          </table>
          <div style="margin-top:22px;padding-top:18px;border-top:1px solid #d9d4c6;">
            <p style="margin:0;color:#13150f;font-size:14px;line-height:1.7;">You will receive a reply with a clear next step at ${escapeHtml(
              business.email,
            )}${
              business.phone
                ? ` or ${escapeHtml(business.phone)}`
                : ""
            }.</p>
          </div>
        </div>
      </div>
    `;

    await resend.emails
      .send({
        from,
        to: [data.email],
        replyTo: to,
        subject: `Thank you for your enquiry — ${business.name}`,
        text: customerText,
        html: customerHtml,
      })
      .catch(() => undefined);
  } catch {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        code: "SEND_FAILED",
        message:
          `The enquiry could not be delivered. Please email ${business.email} directly.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json<ContactApiResponse>({
    ok: true,
    message:
      "Thank you. Your enquiry has been received and will be reviewed personally.",
  });
}
