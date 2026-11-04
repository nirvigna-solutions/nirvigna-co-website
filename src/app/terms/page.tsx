import type { Metadata } from "next";
import { pageMetadata } from "@/config/seo";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: `The terms that apply when you use the ${site.brand} website, ${site.domain}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" lastUpdated="04-11-2026">
      <p>
        These Terms of Use apply when you use the website {site.domain} (the “website”), run by{" "}
        {site.legalName} (“Nirvigna”, “we”, “us”). By using the website, you agree to these terms. If
        you do not agree, please do not use the website.
      </p>

      <h2>1. About this website</h2>
      <p>
        This website gives information about Nirvigna and our products, Nirvigna Cloud Compliance and
        Nirvigna FoodSafe, and lets you contact us.
      </p>

      <h2>2. Information only, not legal advice</h2>
      <p>
        The content on this website is general information. It is not legal, tax or professional
        advice for your specific situation. Compliance requirements depend on your business, location
        and the latest laws and notifications. Please contact us, or a qualified professional, before
        acting on any information here.
      </p>
      <p>
        Nirvigna is a private company. We are not a government body and are not affiliated with any
        government department or regulator. Licences and registrations are issued only by the
        relevant authorities.
      </p>

      <h2>3. Our products and services</h2>
      <p>
        Use of our products and services is governed by a separate agreement between Nirvigna and the
        customer. If that agreement differs from these terms, the agreement applies.
      </p>

      <h2>4. Using the website properly</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the website for anything unlawful or misleading.</li>
        <li>Try to break into, damage or overload the website or its systems.</li>
        <li>Copy or reuse the website content for commercial purposes without our written permission.</li>
      </ul>

      <h2>5. Intellectual property</h2>
      <p>
        The Nirvigna name, logo, website design and content belong to {site.legalName}, unless stated
        otherwise. You may view and print pages for your own personal or internal business use.
      </p>

      <h2>6. Links to other websites</h2>
      <p>
        The website may link to other websites, such as government portals or WhatsApp. We do not
        control those websites and are not responsible for their content or privacy practices.
      </p>

      <h2>7. Accuracy and availability</h2>
      <p>
        We try to keep the website accurate and available, but we do not promise that it will always
        be complete, current or free of errors, or that it will always be available.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the extent allowed by law, Nirvigna is not liable for any loss or damage that results from
        using, or relying on, this website or its content.
      </p>

      <h2>9. Privacy</h2>
      <p>
        How we handle personal data is explained in our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>10. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The latest version will always be on this page,
        with the date it was last updated.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Courts in Hyderabad, Telangana will have
        jurisdiction over any dispute about these terms or the website.
      </p>

      <h2>12. Contact us</h2>
      <p>
        {site.legalName}, {site.address.join(", ")}
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a> · Phone: {site.phoneDisplay}
      </p>
    </LegalPage>
  );
}
