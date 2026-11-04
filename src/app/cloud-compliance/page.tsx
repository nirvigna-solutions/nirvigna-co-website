import type { Metadata } from "next";
import { pageMetadata } from "@/config/seo";
import { ArrowRight, BarChart, Bell, Calendar, FileCheck, Folder, Scale } from "@/components/icons";
import { ButtonLink, CheckList, Container, CtaBand, Faq, FeatureCard, PageHero, SectionHeading, Steps } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Nirvigna Cloud Compliance — labour-law and business compliance",
  description: "Compliance calendar, licence tracker, Labour Codes compliance, digital registers and a document vault with expiry alerts — cloud tools with expert support for Indian businesses.",
  path: "/cloud-compliance",
});

const features = [
  {
    icon: Calendar,
    title: "Compliance calendar with reminders",
    text: "Every return, renewal and filing that applies to you, in one calendar — with automatic reminders before each due date.",
  },
  {
    icon: FileCheck,
    title: "Licence & registration tracker",
    text: "Track Shops & Establishments, Factories, Contract Labour, Trade licence, Fire NOC and more — with status and renewal dates at a glance.",
  },
  {
    icon: Scale,
    title: "Labour law under the new Labour Codes",
    text: "Stay on top of wages, social security (PF/ESI), industrial relations and occupational safety requirements under India's four Labour Codes.",
  },
  {
    icon: Folder,
    title: "Digital registers and records",
    text: "Maintain registers and records digitally, organised and ready to show during an inspection.",
  },
  {
    icon: Bell,
    title: "Document vault with expiry alerts",
    text: "Store certificates and licences securely in one place. Get alerted before any of them expire.",
  },
  {
    icon: BarChart,
    title: "Monthly compliance health report",
    text: "A simple monthly summary of what is done, what is due and what needs your attention.",
  },
];

const audience = [
  "Factories and manufacturing units",
  "Shops, offices and commercial establishments",
  "Construction and labour contractors",
  "Staffing and manpower agencies",
  "Growing businesses with workers in one or more locations",
  "Accountants and consultants who manage compliance for clients",
];

const steps = [
  {
    title: "Share your business details",
    text: "Tell us your business type, locations, number of workers and activities. A short call is enough.",
  },
  {
    title: "We set up your compliance map",
    text: "We list the licences, registrations, returns and registers that apply, and load your existing documents and due dates.",
  },
  {
    title: "Stay compliant every month",
    text: "Get reminders, keep records up to date and review your monthly health report — with our team available when you need help.",
  },
];

const faq = [
  {
    q: "Which laws does Nirvigna Cloud Compliance cover?",
    a: "It covers common labour-law and business compliance for Indian businesses — including the Labour Codes (wages, social security such as PF and ESI, industrial relations, and occupational safety), Shops & Establishments, Factories, Contract Labour, trade licences and Fire NOC. What applies to you depends on your business type, size and state; we map this during onboarding.",
  },
  {
    q: "Do I need any technical knowledge to use it?",
    a: "No. The platform is designed for business owners and office staff. It works in a web browser on your computer or mobile phone, and our team helps you get set up.",
  },
  {
    q: "Will I still get help from a person?",
    a: "Yes. Along with the cloud tools, our support team helps you understand what applies to your business and what to do next. You can reach us by email, phone or WhatsApp during business hours.",
  },
  {
    q: "Can I manage more than one location?",
    a: "Yes. You can track licences, registrations and deadlines for each of your locations from a single account.",
  },
  {
    q: "How is my data protected?",
    a: "Your data is used only to provide our services, and access is limited to you and the people you authorise. We handle personal data in line with India's Digital Personal Data Protection Act, 2023. See our Privacy Policy for details.",
  },
];

export default function CloudCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Nirvigna Cloud Compliance"
        title="Labour-law and business compliance, handled in one place"
        intro="A cloud platform with expert support that keeps your licences, registrations, returns and registers on track — so you can focus on running your business."
      >
        <ButtonLink href="/contact">
          Request a demo <ArrowRight className="h-5 w-5" />
        </ButtonLink>
        <ButtonLink href="#features" variant="secondary">
          See features
        </ButtonLink>
      </PageHero>

      <section id="features" className="scroll-mt-20 py-20">
        <Container>
          <SectionHeading eyebrow="Features" title="Everything you need to stay compliant" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} text={f.text} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Who it's for"
            title="Made for businesses that employ people"
            intro="If you run a business with workers, you have registrations to keep, returns to file and registers to maintain. Nirvigna Cloud Compliance brings it all together."
          />
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <CheckList items={audience} />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Onboarding" title="Up and running in three steps" />
          <div className="mt-12">
            <Steps steps={steps} />
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-20">
        <Container className="max-w-3xl">
          <SectionHeading center eyebrow="FAQ" title="Common questions" />
          <div className="mt-10">
            <Faq items={faq} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="See Nirvigna Cloud Compliance in action"
        text="Book a short demo. We will walk you through the platform using a business like yours."
        buttonLabel="Request a demo"
      />
    </>
  );
}
