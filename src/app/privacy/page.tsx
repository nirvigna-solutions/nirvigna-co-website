import type { Metadata } from "next";
import { pageMetadata } from "@/config/seo";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.legalName} collects, uses and protects personal data, in line with India's Digital Personal Data Protection Act, 2023.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="04-11-2026">
      <p>
        This Privacy Policy explains, in simple words, how {site.legalName} (“Nirvigna”, “we”, “us”)
        collects, uses, stores and protects your personal data when you visit {site.domain} or
        contact us. We follow India’s Digital Personal Data Protection Act, 2023 (“DPDP Act”) and the
        rules made under it.
      </p>

      <h2>1. Who we are</h2>
      <p>
        {site.legalName} is a company registered in India (CIN {site.cin}), with its registered
        office at {site.address.join(", ")}. For personal data you share with us through this
        website, we decide why and how it is used, so we are the “Data Fiduciary” under the DPDP Act.
      </p>

      <h2>2. What personal data we collect</h2>
      <h3>Data you give us</h3>
      <p>
        When you send us an enquiry by email, phone or WhatsApp, we receive the details you choose to
        share — for example your name, business name, phone number, email address and your message.
      </p>
      <h3>Data collected automatically</h3>
      <p>
        Like most websites, our hosting provider records basic technical information when you visit,
        such as your IP address, browser type, the pages you open and the time of your visit. This is
        used only to run the website securely and fix problems.
      </p>
      <p>
        This website does not use advertising or tracking cookies, and we do not sell your data.
      </p>

      <h2>3. Why we use your data</h2>
      <ul>
        <li>To reply to your enquiry and arrange a demo or call you asked for.</li>
        <li>To tell you about our products and services, when you have asked us to.</li>
        <li>To keep the website secure and working properly.</li>
        <li>To meet our duties under Indian law.</li>
      </ul>
      <p>
        We use your personal data only for the purpose for which you shared it, or for other purposes
        allowed by law.
      </p>

      <h2>4. Your consent</h2>
      <p>
        When you contact us and share your details, you agree to us using them to respond to you. You
        can withdraw your consent at any time by writing to {site.email}. Withdrawing consent does
        not affect anything we did lawfully before you withdrew it. If you withdraw consent, we may
        not be able to continue helping with your request.
      </p>

      <h2>5. Who we share your data with</h2>
      <p>We share personal data only when needed, and only with:</p>
      <ul>
        <li>
          Service providers who help us run our business — such as website hosting and email
          providers — who may process data only on our instructions and must keep it secure.
        </li>
        <li>Government authorities or courts, when the law requires us to.</li>
      </ul>
      <p>
        Some of our service providers may store or process data on servers outside India. Where this
        happens, we do so only as allowed under Indian law.
      </p>

      <h2>6. How long we keep your data</h2>
      <p>
        We keep enquiry details only as long as needed to respond to you and for any follow-up you
        asked for, or as long as the law requires. After that, we delete them.
      </p>

      <h2>7. How we protect your data</h2>
      <p>
        We use reasonable security safeguards to protect personal data against unauthorised access,
        misuse, loss or change, including limiting access to people who need it. If a personal data
        breach happens, we will inform affected people and the Data Protection Board of India as the
        law requires.
      </p>

      <h2>8. Your rights</h2>
      <p>Under the DPDP Act, you have the right to:</p>
      <ul>
        <li>Ask for a summary of the personal data we hold about you and how we use it.</li>
        <li>Ask us to correct, complete or update your personal data.</li>
        <li>Ask us to erase your personal data, unless we must keep it by law.</li>
        <li>Withdraw your consent at any time.</li>
        <li>Have your complaints about how we handle your data addressed (grievance redressal).</li>
        <li>
          Nominate another person to use these rights on your behalf if you die or become unable to
          do so.
        </li>
      </ul>
      <p>
        To use any of these rights, email us at <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
        with the subject “Data request”. We may ask you to confirm your identity before acting on the
        request.
      </p>

      <h2>9. Grievances</h2>
      <p>
        If you have a concern about how we handle your personal data, please write to us first at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> with the subject “Privacy grievance”, or by
        post to our registered office address above. We will look into it and reply to you. If you
        are not satisfied with our reply, you may complain to the Data Protection Board of India.
      </p>

      <h2>10. Children</h2>
      <p>
        This website is meant for businesses. We do not knowingly collect personal data from children
        (people under 18). If you believe a child has shared data with us, please contact us and we
        will delete it.
      </p>

      <h2>11. Data in our products</h2>
      <p>
        When a business uses our products, it may store data about its own staff and operations in
        them. That data is handled under the agreement between Nirvigna and that business, along with
        this policy.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The latest version will always be on this page,
        with the date it was last updated.
      </p>

      <h2>13. Contact us</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.join(", ")}
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Phone: {site.phoneDisplay}
      </p>
      <p>
        See also our <Link href="/terms">Terms of Use</Link>.
      </p>
    </LegalPage>
  );
}
