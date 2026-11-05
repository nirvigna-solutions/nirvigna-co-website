import type { Metadata } from "next";
import { pageMetadata } from "@/config/seo";
import { ArrowRight, BarChart, Bell, Calendar, FileCheck, Folder } from "@/components/icons";
import { ButtonLink, CheckList, Container, CtaBand, Faq, FeatureCard, PageHero, SectionHeading, Steps } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Nirvigna Cloud Compliance — licence and business compliance",
  description:
    "A licence and registration register with a compliance health view, plus expert support from our team for renewals, returns and inspection-ready records — for Indian businesses.",
  path: "/cloud-compliance",
});

const features = [
  {
    icon: FileCheck,
    title: "Licence & registration register",
    text: "See Shops & Establishments, Factories, Contract Labour, Trade licence, Fire NOC and more in one register — with status and expiry dates at a glance.",
  },
  {
    icon: BarChart,
    title: "Compliance health view",
    text: "One screen that shows which licences are active, which are expiring soon and which have expired.",
  },
  {
    icon: Calendar,
    title: "Due-date tracking by our team",
    text: "Our team keeps track of the returns, renewals and filings that apply to you, and reminds you before each due date.",
  },
  {
    icon: Folder,
    title: "Help with registers and records",
    text: "Our team guides you on the registers and records you must keep, so they are complete and ready to show during an inspection.",
  },
  {
    icon: Bell,
    title: "Monthly compliance review",
    text: "Each month, our team reviews your compliance with you and shares a simple summary of what is done, what is due and what needs your attention.",
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
    text: "We list the licences, registrations, returns and registers that apply, and add your existing licences and their expiry dates to your register.",
  },
  {
    title: "Stay compliant every month",
    text: "Check your register any time. Our team reminds you before due dates, reviews your compliance with you each month and helps when you need it.",
  },
];

const faq = [
  {
    q: "Which laws does Nirvigna Cloud Compliance cover?",
    a: "The register covers common business licences and registrations — such as Shops & Establishments, Factories, Contract Labour, trade licences and Fire NOC. What applies to you depends on your business type, size and state; we map this during onboarding.",
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
    a: "Yes. You can add each of your locations, and our team helps you keep track of the licences and deadlines for each one.",
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
        title="Licence and business compliance, handled in one place"
        intro="A cloud register of your licences and registrations, backed by an expert team that tracks your renewals, returns and records with you — so you can focus on running your business."
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
            intro="If you run a business with workers, you have registrations to keep, returns to file and registers to maintain. Nirvigna Cloud Compliance and our team help you keep it all in order."
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
