import type { Metadata } from "next";
import { pageMetadata } from "@/config/seo";
import {
  ArrowRight,
  ClipboardCheck,
  Droplet,
  FileCheck,
  Folder,
  GraduationCap,
  Thermometer,
} from "@/components/icons";
import { ButtonLink, CheckList, Container, CtaBand, Faq, FeatureCard, PageHero, SectionHeading, Steps } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Nirvigna FoodSafe — food-safety compliance for food businesses",
  description:
    "Daily hygiene and temperature checklists on mobile, plus expert support from our team for FSSAI registration and renewals, staff training and medical fitness, pest control, water testing and self-audits — for Indian food businesses.",
  path: "/foodsafe",
});

const features = [
  {
    icon: Thermometer,
    title: "Daily hygiene & temperature checklists",
    text: "Simple digital checklists your staff fill in on a mobile phone — tick items, take photos in the app and record temperatures.",
  },
  {
    icon: Folder,
    title: "Checklist records with date and time",
    text: "Every checklist answer, failed item and fix is saved with date and time, so your daily records are complete.",
  },
  {
    icon: FileCheck,
    title: "FSSAI registration & licence support",
    text: "Our team helps with your FSSAI registration or licence application, keeps track of your renewal date and reminds you well before it is due.",
  },
  {
    icon: GraduationCap,
    title: "Staff training & medical fitness support",
    text: "Our team helps you keep food-handler training and medical-fitness records up to date, and tells you when they are due again.",
  },
  {
    icon: Droplet,
    title: "Pest control, water testing & cleaning support",
    text: "Our team helps you plan pest control, water testing and deep cleaning, and keep the reports in order.",
  },
  {
    icon: ClipboardCheck,
    title: "Self-audits with action points",
    text: "Our team runs regular self-audits with you and gives you a clear list of what to fix, who should fix it and by when.",
  },
];

const audience = [
  "Restaurants and cafés",
  "Cloud kitchens",
  "Bakeries and sweet shops",
  "Caterers and canteens",
  "Food manufacturers and processors",
  "Food retailers and stores",
];

const steps = [
  {
    title: "Tell us about your kitchen",
    text: "Share your business type, outlets, FSSAI registration or licence details and the number of food handlers.",
  },
  {
    title: "We set up your checklists",
    text: "We set up daily checklists for your outlets. Our team notes your certificate and renewal dates so we can remind you in time.",
  },
  {
    title: "Your team logs every day",
    text: "Staff complete checklists on their phones. You see what is done, what is missed and what needs action.",
  },
];

const faq = [
  {
    q: "Who is Nirvigna FoodSafe for?",
    a: "Any food business that must follow FSSAI requirements — restaurants, cloud kitchens, bakeries, caterers, food manufacturers and food retailers, from a single outlet to many.",
  },
  {
    q: "Can you help us get an FSSAI registration or licence?",
    a: "Yes. We help you understand which FSSAI registration or licence applies to your business, prepare the documents and track the application. The registration or licence itself is issued by FSSAI.",
  },
  {
    q: "Do my kitchen staff need training to use the app?",
    a: "Very little. Checklists are short and simple, with clear questions and photos where useful. We help you get your team started.",
  },
  {
    q: "Does FoodSafe replace an official FSSAI inspection or audit?",
    a: "No. FoodSafe helps you keep good daily practices and complete records, so you are better prepared when an inspection or audit happens. Nirvigna is a private company and is not part of FSSAI or any government department.",
  },
  {
    q: "Can I manage multiple outlets?",
    a: "Yes. Each outlet has its own daily checklists and records, and our team supports each of your outlets.",
  },
];

export default function FoodSafePage() {
  return (
    <>
      <PageHero
        eyebrow="Nirvigna FoodSafe"
        title="Food-safety compliance, made simple for food businesses"
        intro="Daily checklists on mobile, plus an expert team that keeps track of your FSSAI paperwork and reminds you of what is due — so your kitchen stays inspection-ready."
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
          <SectionHeading eyebrow="Features" title="Everything your kitchen needs, every day" />
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
            title="Made for every kind of food business"
            intro="Whether you run one kitchen or many outlets, FoodSafe and our team help your staff follow good hygiene practices and keep the records to show it."
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
        title="See Nirvigna FoodSafe in action"
        text="Book a short demo. We will show you the daily checklists and records using a kitchen like yours."
        buttonLabel="Request a demo"
      />
    </>
  );
}
