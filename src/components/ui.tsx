import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { ArrowRight, Check, ChevronDown } from "./icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-slate-600">{intro}</p>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const styles = {
    primary: "bg-accent-600 text-white hover:bg-accent-700 shadow-sm",
    secondary: "border border-navy-900/20 bg-white text-navy-900 hover:bg-navy-50",
    light: "bg-white text-navy-900 hover:bg-accent-50",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-navy-50 to-white">
      <Container className="py-16 sm:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{intro}</p>
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </Container>
    </section>
  );
}

export function FeatureCard({ icon: Icon, title, text }: { icon: Icon; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}

export function CheckList({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check className="mt-0.5 h-5 w-5 flex-none text-accent-600" />
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ steps }: { steps: readonly { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-white">
            {i + 1}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-navy-900">{step.title}</h3>
          <p className="mt-2 leading-relaxed text-slate-600">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5">
          <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-semibold text-navy-900">
            {item.q}
            <ChevronDown className="faq-chevron mt-0.5 h-5 w-5 flex-none text-slate-500 transition" />
          </summary>
          <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Ready to make compliance simple?",
  text = "Tell us about your business. We will show you how Nirvigna can keep your licences, records and deadlines in order.",
  buttonLabel = "Talk to us",
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="bg-navy-900">
      <Container className="flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-lg text-slate-300">{text}</p>
        </div>
        <ButtonLink href="/contact" variant="light">
          {buttonLabel} <ArrowRight className="h-5 w-5" />
        </ButtonLink>
      </Container>
    </section>
  );
}
