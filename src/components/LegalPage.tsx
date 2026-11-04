import type { ReactNode } from "react";
import { Container } from "./ui";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  /** DD-MM-YYYY */
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-navy-900">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: {lastUpdated}</p>
        <div className="prose-legal mt-8">{children}</div>
      </Container>
    </section>
  );
}
