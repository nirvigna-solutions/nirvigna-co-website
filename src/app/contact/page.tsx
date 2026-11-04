import type { Metadata } from "next";
import { pageMetadata } from "@/config/seo";
import { ContactForm } from "@/components/ContactForm";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "@/components/icons";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact us",
  description: `Talk to Nirvigna about compliance for your business. Email ${site.email}, call or WhatsApp ${site.phoneDisplay}.`,
  path: "/contact",
});

export default function ContactPage() {
  const details = [
    {
      icon: Mail,
      label: "Email",
      content: (
        <a href={`mailto:${site.email}`} className="text-accent-700 hover:underline">
          {site.email}
        </a>
      ),
    },
    {
      icon: Phone,
      label: "Phone",
      content: (
        <a href={`tel:${site.phoneE164}`} className="text-accent-700 hover:underline">
          {site.phoneDisplay}
        </a>
      ),
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      content: (
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-700 hover:underline"
        >
          Chat with us on WhatsApp
        </a>
      ),
    },
    {
      icon: MapPin,
      label: "Registered office",
      content: (
        <address className="not-italic">
          {site.legalName}
          {site.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      ),
    },
    {
      icon: Clock,
      label: "Business hours",
      content: <span>{site.businessHours}</span>,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us"
        intro="Have a question, or want a demo? Send us a message, call us or chat on WhatsApp during business hours."
      />
      <section className="pb-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <ul className="space-y-6">
            {details.map((d) => (
              <li key={d.label} className="flex gap-4">
                <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                  <d.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-navy-900">{d.label}</p>
                  <div className="mt-1 text-slate-600">{d.content}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-navy-900">Send an enquiry</h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill in the form and press the button. Your email app will open with the message ready
              to send to {site.email}.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
