import { ImageResponse } from "next/og";
import { business } from "@/config/business";

export const alt = `${business.name} — independent web design and development studio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#13150f",
          color: "#faf7f0",
          padding: "64px 68px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "#d8f45b",
            right: -130,
            top: -190,
            opacity: 0.94,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 290,
            height: 290,
            border: "1px solid rgba(250,247,240,0.18)",
            borderRadius: 9999,
            right: 60,
            top: 45,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "#faf7f0",
              color: "#13150f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {business.brand.mark}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 32,
                fontWeight: 600,
                letterSpacing: "-0.05em",
                lineHeight: 1,
              }}
            >
              {business.brand.wordmark}
            </span>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                opacity: 0.5,
                marginTop: 5,
              }}
            >
              {business.brand.descriptor}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}>
          <span
            style={{
              fontSize: 18,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#d8f45b",
              marginBottom: 22,
            }}
          >
            Web design · Development · Support
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 92,
              lineHeight: 0.97,
              letterSpacing: "-0.06em",
              fontWeight: 600,
            }}
          >
            <span>Websites built to</span>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
              <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
                do a job.
              </span>
              <span
                style={{
                  display: "block",
                  width: 82,
                  height: 10,
                  background: "#d8f45b",
                  marginBottom: 8,
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(250,247,240,0.18)",
            paddingTop: 22,
            fontSize: 17,
            color: "rgba(250,247,240,0.6)",
          }}
        >
          <span>{business.siteUrl.replace(/^https?:\/\//, "")}</span>
          <span>Custom business websites · E-commerce · Support</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
