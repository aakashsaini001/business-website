import type { Metadata } from "next";
import { business } from "@/config/business";
import { createPageMetadata } from "@/lib/metadata";
import { LegalDocument } from "@/components/shared/LegalDocument";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & conditions",
  description:
    "The general terms that apply to use of the Freelen Studio website and to project enquiries, proposals and engagements.",
  path: "/terms-and-conditions",
});

const sections = [
  {
    title: "About these terms",
    paragraphs: [
      `These terms apply to your use of this website and to enquiries made through it. They are general website terms. Any signed proposal, statement of work or project agreement takes precedence over these terms for the relevant engagement.`,
      `By using this website, you agree to use it lawfully and not to interfere with its operation, security or availability.`,
    ],
  },
  {
    title: "Information on the website",
    paragraphs: [
      "Content is provided for general information. It is kept as accurate as reasonably possible, but it may become out of date and is not professional, legal, financial or guaranteed commercial advice.",
      "Case studies describe real websites and the decisions visible in their design. They do not claim specific performance results, conversions, rankings or third-party integrations unless expressly stated. Third-party tools and services shown on live client sites remain subject to their own terms.",
      "Pricing shown on this website is indicative. It is a starting point, not a binding quote. A project becomes subject to specific commercial terms only through a written proposal accepted by both parties.",
    ],
  },
  {
    title: "Enquiries and proposals",
    paragraphs: [
      "Sending an enquiry does not create a contract or obligate either party to proceed. A proposal may be declined, and the studio may decline work that is not a suitable fit.",
      "A proposal sets out scope, deliverables, assumptions, exclusions, timing and payment terms. Work begins only after the proposal is accepted and any required deposit is received, unless otherwise agreed in writing.",
    ],
  },
  {
    title: "Fees and payment",
    paragraphs: [
      "Fees, taxes, payment milestones and third-party costs are set out in the proposal. Unless stated otherwise, third-party costs such as domains, hosting, platform subscriptions, plugins, stock assets, payment processing and software licences are paid by the client.",
      "Invoices are payable by the dates stated. Work may be paused where payment is overdue. Deposits secure project time and are generally non-refundable once work has begun, except where the proposal says otherwise or applicable law requires a refund.",
    ],
  },
  {
    title: "Scope and changes",
    paragraphs: [
      "The approved scope is the basis for the project. Requests outside that scope are handled as change requests. A change request may affect fees, timeline or both, and the impact will be communicated before additional work is undertaken.",
      "Feedback should be consolidated and provided through the agreed review process. Revision rounds are defined in the proposal; they refine the approved direction rather than replace it.",
    ],
  },
  {
    title: "Client responsibilities",
    paragraphs: [
      "The client is responsible for providing timely access to content, approvals, accounts, decisions and any third-party resources needed for the project. Delays or missing inputs may affect the schedule.",
      "The client confirms that materials supplied for the project are accurate, lawful and do not infringe third-party rights. The client is responsible for obtaining permission for images, logos, testimonials, product claims and other content it supplies.",
    ],
  },
  {
    title: "Timelines",
    paragraphs: [
      "Timelines in proposals are estimates based on the information available and on timely client feedback. They are not guarantees unless a specific delivery commitment is agreed in writing.",
      "The studio will communicate material delays and propose a revised schedule where the original assumptions change.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "Unless a proposal states otherwise, the client receives ownership of the final agreed website deliverables once all agreed fees are paid. Third-party fonts, plugins, images, platforms and tools remain subject to their own licences.",
      "The studio retains ownership of pre-existing tools, methods, unused concepts and internal working materials. The client is responsible for maintaining the licences needed after handover.",
      "The studio may request permission to feature completed work in its portfolio. Client material will not be presented in a misleading way or published where confidentiality has been agreed.",
    ],
  },
  {
    title: "Third-party services",
    paragraphs: [
      "Websites often depend on third-party services such as hosting, domains, payment providers, booking systems, analytics and email delivery. The studio can configure and connect these services where included in scope, but does not control their availability, pricing, policies or performance.",
      "Third-party outages, policy changes or pricing changes are outside the studio's control and may require additional work to address.",
    ],
  },
  {
    title: "Support and maintenance",
    paragraphs: [
      "Post-launch support is limited to the period and items stated in the proposal. Ongoing maintenance, content updates, new features and security patching are separate unless a maintenance agreement is in place.",
      "The client is responsible for keeping third-party accounts secure, maintaining backups where appropriate and applying updates not covered by a support agreement.",
    ],
  },
  {
    title: "Liability",
    paragraphs: [
      "The studio will provide services with reasonable skill and care. To the extent permitted by law, it is not liable for indirect or consequential loss, loss of profit, loss of data, loss of goodwill or business interruption.",
      "Where liability cannot lawfully be excluded, the studio's total liability arising from an engagement is limited to the fees paid for the specific services giving rise to the claim, to the extent permitted by law. Nothing in these terms excludes liability that cannot be excluded by law.",
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "Either party may terminate an engagement where the other commits a material breach and fails to remedy it within a reasonable period. The studio may suspend work where payment is overdue or where necessary to protect legal or security interests.",
      "On termination, the client remains responsible for fees for work completed and third-party costs incurred up to that point. Deliverables may be released according to the payment terms in the proposal.",
    ],
  },
  {
    title: "Governing law",
    paragraphs: [
      "These website terms and any project engagement are governed by the laws of India, unless a signed agreement states otherwise. The parties will first attempt to resolve a dispute in good faith before pursuing formal remedies.",
    ],
  },
  {
    title: "Changes and contact",
    paragraphs: [
      `These terms may be updated as the website or services change. The date at the top of the page shows the latest revision. Questions can be sent to ${business.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Terms & conditions"
      title={
        <>
          Clear terms,
          <br />
          <span className="serif-accent">before the work.</span>
        </>
      }
      intro="These are the general terms for using this website and making an enquiry. Project-specific terms are always set out in a written proposal, which takes precedence for that engagement."
      updated="25 October 2026"
      sections={sections}
    />
  );
}
