import type { Metadata } from "next";
import { pageMetadata } from "@/config/seo";
import { Clock, Eye, Handshake, Sparkles, Target, ShieldCheck } from "@/components/icons";
import { Container, CtaBand, FeatureCard, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "About us",
  description: `${site.legalName} is a Hyderabad-based company building simple cloud tools and expert support for compliance in Indian businesses.`,
  path: "/about",
});

const values = [
  {
    icon: Sparkles,
    title: "Simplicity",
    text: "We turn complex rules into clear, simple steps that any business owner can follow.",
  },
  {
    icon: Target,
    title: "Accuracy",
    text: "We work carefully from official sources, so the information you rely on is correct.",
  },
  {
    icon: Handshake,
    title: "Trust",
    text: "We protect your data and are honest about what we do — and what we do not do.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    text: "We help you act before deadlines, not after penalties.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nirvigna"
        title="Making compliance simple for Indian businesses"
        intro="Nirvigna is a Sanskrit word meaning “without obstacle”. That is what we want compliance to be for every business we work with."
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our story" title="Why we started Nirvigna" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Running a business in India means dealing with many separate laws, government portals
                and deadlines — licences, registrations, returns, food-safety records and
                inspections. For a small or medium business, keeping track of all of this is hard,
                and a single missed date can mean penalties or disruption.
              </p>
              <p>
                Nirvigna was founded to make compliance simple. We bring a business&apos;s licences and
                registrations into one place, and our team — people who understand Indian
                compliance — reminds owners before things are due and helps keep records ready for
                inspection.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl border border-slate-200 bg-navy-50 p-8">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-accent-700" />
                <h2 className="text-xl font-bold text-navy-900">Our mission</h2>
              </div>
              <p className="mt-3 leading-relaxed text-slate-600">
                To help every Indian business meet its compliance duties on time, with simple tools
                and reliable support — without stress, confusion or last-minute rush.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-navy-50 p-8">
              <div className="flex items-center gap-3">
                <Eye className="h-6 w-6 text-accent-700" />
                <h2 className="text-xl font-bold text-navy-900">Our vision</h2>
              </div>
              <p className="mt-3 leading-relaxed text-slate-600">
                An India where staying compliant is easy for every business, big or small — so owners
                can spend their time growing their business, not chasing paperwork.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-20">
        <Container>
          <SectionHeading center eyebrow="Core values" title="What we stand for" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <FeatureCard key={v.title} icon={v.icon} title={v.title} text={v.text} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <SectionHeading center eyebrow="Company details" title="Who we are" />
          <dl className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {[
              ["Legal name", site.legalName],
              ["Corporate Identity Number (CIN)", site.cin],
              ...(site.gstin ? [["GSTIN", site.gstin]] : []),
              ["Registered office", site.address.join(", ")],
              ["Incorporated", String(site.incorporatedYear)],
              ["Based in", site.city],
              ["Email", site.email],
              ["Phone", site.phoneDisplay],
            ].map(([label, value]) => (
              <div key={label} className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-navy-900">{label}</dt>
                <dd className="text-slate-600 sm:col-span-2">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 flex items-start gap-2 text-sm text-slate-500">
            <ShieldCheck className="mt-0.5 h-4 w-4 flex-none" />
            Nirvigna is a private company. We are not a government body and are not affiliated with
            any government department or regulator.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
