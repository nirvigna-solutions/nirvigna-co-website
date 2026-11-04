import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1f3a",
        }}
      >
        <svg width="130" height="130" viewBox="0 0 32 32">
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
      </div>
    ),
    size,
  );
}
