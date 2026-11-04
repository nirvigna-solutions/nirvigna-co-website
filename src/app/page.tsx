import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Building,
  ClipboardCheck,
  Factory,
  HardHat,
  Layers,
  Map,
  ShieldCheck,
  Store,
  Users,
  Utensils,
  Package,
} from "@/components/icons";
import { LogoMark } from "@/components/Logo";
import { ButtonLink, CheckList, Container, CtaBand, FeatureCard, SectionHeading, Steps } from "@/components/ui";

const productCards = [
  {
    name: "Nirvigna Cloud Compliance",
    href: "/cloud-compliance",
    icon: Building,
    summary: "Cloud platform and expert support for labour-law and business compliance.",
    benefits: [
      "See every licence and registration, with its expiry date, in one register",
      "Our team tracks your renewal and filing dates and reminds you in time",
      "Expert help to keep your records ready for inspection",
    ],
  },
  {
    name: "Nirvigna FoodSafe",
    href: "/foodsafe",
    icon: Utensils,
    summary: "Food-safety compliance for restaurants, kitchens and food businesses.",
    benefits: [
      "FSSAI registration and licence support, with our team tracking your renewal date",
      "Daily hygiene and temperature checklists on mobile",
      "Checklist answers and fixes saved with date and time",
    ],
  },
];

const whyPoints = [
  {
    icon: Layers,
    title: "All compliance in one place",
    text: "Your licences and registrations sit together in one register instead of many files, portals and folders.",
  },
  {
    icon: Bell,
    title: "Reminders before due dates",
    text: "Our team keeps track of your renewal and filing dates and reminds you well before they are due, so nothing slips.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection-ready records",
    text: "With our team's help, keep certificates, checklists and records organised and easy to show when an inspector visits.",
  },
  {
    icon: Map,
    title: "Built for Indian laws and small businesses",
    text: "Designed around Indian central and state requirements, and simple enough for a busy business owner.",
  },
];

const steps = [
  {
    title: "Tell us about your business",
    text: "Share basic details — your business type, location, number of workers and the activities you carry out.",
  },
  {
    title: "We map what applies",
    text: "We identify every licence, registration and deadline that applies to your business, and set them up for you.",
  },
  {
    title: "Track, renew and file on time",
    text: "See your licences and their status in one place. Our team reminds you before each renewal or filing and helps you keep documents up to date.",
  },
];

const industries = [
  { icon: Factory, label: "Factories" },
  { icon: Store, label: "Shops & establishments" },
  { icon: Utensils, label: "Restaurants & cloud kitchens" },
  { icon: Package, label: "Food manufacturers" },
  { icon: HardHat, label: "Construction contractors" },
  { icon: Users, label: "Staffing agencies" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-accent-100">
              <ShieldCheck className="h-4 w-4" /> Licences · Registrations · Returns · Inspections
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Compliance, <span className="text-accent-500">without obstacles.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Nirvigna helps Indian businesses stay on top of licences, registrations, returns and
              inspections — through simple cloud tools and expert support.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#products">
                Explore our products <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="light">
                Talk to us
              </ButtonLink>
            </div>
          </div>

          {/* Illustration: a simple compliance dashboard card */}
          <div aria-hidden="true" className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-2">
                <LogoMark className="h-6 w-6" />
                <span className="text-sm font-semibold text-navy-900">Compliance overview</span>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  ["Shops & Establishments registration", "Active", "bg-accent-100 text-accent-700"],
                  ["Trade licence renewal", "Due in 30 days", "bg-amber-100 text-amber-800"],
                  ["FSSAI licence", "Active", "bg-accent-100 text-accent-700"],
                  ["Contract Labour licence", "Active", "bg-accent-100 text-accent-700"],
                  ["Fire NOC", "Expired", "bg-red-100 text-red-800"],
                ].map(([label, state, tone]) => (
                  <li key={label} className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2.5">
                    <span className="text-slate-700">{label}</span>
                    <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-medium ${tone}`}>
                      {state}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-20 py-20">
        <Container>
          <SectionHeading
            center
            eyebrow="Our products"
            title="Two products, one goal: no missed compliance"
            intro="Choose the product that fits your business. Both combine easy cloud tools with support from people who understand Indian compliance."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {productCards.map((p) => (
              <article
                key={p.href}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-accent-500">
                  <p.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-navy-900">{p.name}</h3>
                <p className="mt-2 text-slate-600">{p.summary}</p>
                <CheckList items={p.benefits} className="mt-6 flex-1" />
                <Link
                  href={p.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-accent-700 hover:text-accent-600"
                >
                  Learn more <span className="sr-only">about {p.name}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Nirvigna */}
      <section className="bg-navy-50 py-20">
        <Container>
          <SectionHeading
            center
            eyebrow="Why Nirvigna"
            title="Compliance made simple for busy business owners"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} text={w.text} />
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20">
        <Container>
          <SectionHeading center eyebrow="How it works" title="Get started in three simple steps" />
          <div className="mt-12">
            <Steps steps={steps} />
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-navy-50 py-20">
        <Container>
          <SectionHeading
            center
            eyebrow="Industries we serve"
            title="Built for the businesses that keep India running"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {industries.map((ind) => (
              <li
                key={ind.label}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-50 text-accent-700">
                  <ind.icon className="h-5 w-5" />
                </span>
                <span className="font-medium text-navy-900">{ind.label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
