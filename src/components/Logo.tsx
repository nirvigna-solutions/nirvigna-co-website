type LogoProps = {
  className?: string;
  /** "dark" = navy text for light backgrounds, "light" = white text for dark backgrounds */
  tone?: "dark" | "light";
};

export function LogoMark({
  className = "h-8 w-8",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 2.5l11 4.6v8.1c0 6.9-4.6 12.6-11 14.3C9.6 27.8 5 22.1 5 15.2V7.1l11-4.6z"
        fill={light ? "#ffffff" : "#0b1f3a"}
      />
      <path
        d="M16 2.5l11 4.6v8.1c0 6.9-4.6 12.6-11 14.3V2.5z"
        fill={light ? "#e3eaf5" : "#12305a"}
      />
      <path
        d="M10.5 16.2l3.8 3.8 7.4-7.6"
        fill="none"
        stroke={light ? "#0d9488" : "#14b8a6"}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className = "", tone = "dark" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark tone={tone} />
      <span
        className={`text-xl font-bold tracking-tight ${
          tone === "dark" ? "text-navy-900" : "text-white"
        }`}
      >
        Nirvigna
      </span>
    </span>
  );
}
