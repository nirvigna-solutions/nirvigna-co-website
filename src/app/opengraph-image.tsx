import { ImageResponse } from "next/og";
import { site } from "@/config/site";

// Static export (Netlify): generate this file once at build time.
export const dynamic = "force-static";

export const alt = `${site.brand} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #061428 0%, #0b1f3a 55%, #12305a 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="96" height="96" viewBox="0 0 32 32">
            <path
              d="M16 2.5l11 4.6v8.1c0 6.9-4.6 12.6-11 14.3C9.6 27.8 5 22.1 5 15.2V7.1l11-4.6z"
              fill="#ffffff"
            />
            <path
              d="M10.5 16.2l3.8 3.8 7.4-7.6"
              fill="none"
              stroke="#0d9488"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ fontSize: 88, fontWeight: 700 }}>{site.brand}</div>
        </div>
        <div style={{ marginTop: 40, fontSize: 60, fontWeight: 700, color: "#14b8a6" }}>
          {site.tagline}
        </div>
        <div style={{ marginTop: 24, fontSize: 30, color: "#cbd5e1", maxWidth: 980 }}>
          Licences, registrations, returns and inspections — simple cloud tools and expert support
          for Indian businesses.
        </div>
        <div style={{ marginTop: 48, fontSize: 26, color: "#94a3b8" }}>{site.domain}</div>
      </div>
    ),
    size,
  );
}
