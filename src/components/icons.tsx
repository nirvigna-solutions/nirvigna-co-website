import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ShieldCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </Base>
);

export const Calendar = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </Base>
);

export const Bell = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 8a6 6 0 1112 0c0 7 3 8 3 8H3s3-1 3-8" />
    <path d="M10 20a2 2 0 004 0" />
  </Base>
);

export const FileCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
    <path d="M14 3v5h5M9 14l2 2 4-4" />
  </Base>
);

export const ClipboardCheck = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1M9 13l2 2 4-4" />
  </Base>
);

export const Layers = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
  </Base>
);

export const Folder = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
  </Base>
);

export const BarChart = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </Base>
);

export const Scale = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v18M7 21h10M5 7h14" />
    <path d="M5 7l-3 6a3 3 0 006 0L5 7zM19 7l-3 6a3 3 0 006 0l-3-6z" />
  </Base>
);

export const Thermometer = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 14.5V5a2 2 0 10-4 0v9.5a4 4 0 104 0z" />
    <path d="M12 9v7" />
  </Base>
);

export const Droplet = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" />
  </Base>
);

export const GraduationCap = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 9l10-5 10 5-10 5L2 9z" />
    <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
  </Base>
);

export const Utensils = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 3v8M4 3v5a3 3 0 006 0V3M7 11v10M17 21V3c-2 0-3 3-3 7h3" />
  </Base>
);

export const Factory = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 21V10l6 4V10l6 4V6l6 3v12H3z" />
    <path d="M7 18h2M12 18h2M17 18h1" />
  </Base>
);

export const Store = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 10v10h16V10" />
    <path d="M3 4h18l-1 6H4L3 4z" />
    <path d="M10 20v-5h4v5" />
  </Base>
);

export const HardHat = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 18h18v-2a9 9 0 00-18 0v2z" />
    <path d="M10 7V5h4v2M12 7v5" />
  </Base>
);

export const Users = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0113 0" />
    <path d="M16 4.5a3.5 3.5 0 010 7M18 14a6.5 6.5 0 013.5 6" />
  </Base>
);

export const Package = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" />
    <path d="M3 7.5l9 4.5 9-4.5M12 12v9" />
  </Base>
);

export const Map = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
    <path d="M9 4v14M15 6v14" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Base>
);

export const Phone = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z" />
  </Base>
);

export const MessageCircle = (p: IconProps) => (
  <Base {...p}>
    <path d="M21 12a8.5 8.5 0 01-12.5 7.5L3 21l1.5-5.5A8.5 8.5 0 1121 12z" />
  </Base>
);

export const MapPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </Base>
);

export const Clock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
);

export const Building = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 21V4a1 1 0 011-1h10a1 1 0 011 1v17M16 9h3a1 1 0 011 1v11M2 21h20" />
    <path d="M8 7h4M8 11h4M8 15h4" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Base>
);

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const ChevronDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 9l6 6 6-6" />
  </Base>
);

export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);

export const Target = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </Base>
);

export const Eye = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </Base>
);

export const Sparkles = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
  </Base>
);

export const Handshake = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 11l4-4 4 2 2-1 4 4-6 6-2-2" />
    <path d="M21 11l-4-4M3 11l5 5M11 13l2 2" />
  </Base>
);
