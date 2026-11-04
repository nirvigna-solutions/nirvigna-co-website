"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { products, site } from "@/config/site";

const inputClass =
  "mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-100";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const subject = `Website enquiry: ${get("product")} — ${get("business")}`;
    const body = [
      `Name: ${get("name")}`,
      `Business name: ${get("business")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Product interested in: ${get("product")}`,
      "",
      "Message:",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy-900">
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="business" className="text-sm font-medium text-navy-900">
          Business name
        </label>
        <input id="business" name="business" required autoComplete="organization" className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-navy-900">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9+\s\-]{10,15}"
          title="Enter a 10-digit mobile number, optionally with +91"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-navy-900">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="product" className="text-sm font-medium text-navy-900">
          Product interested in
        </label>
        <select id="product" name="product" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Choose one
          </option>
          {products.map((p) => (
            <option key={p.href} value={p.name}>
              {p.name}
            </option>
          ))}
          <option value="Both products">Both products</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-navy-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="Tell us about your business and what you need help with."
        />
      </div>
      <p className="text-xs text-slate-500 sm:col-span-2">
        Your details are sent only to us by email and used only to reply to your enquiry. See our{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-lg bg-accent-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-accent-700 sm:w-auto"
        >
          Send enquiry
        </button>
        {opened && (
          <p role="status" className="mt-3 text-sm text-slate-600">
            Your email app should now be open with your message. Please press <strong>Send</strong>{" "}
            there. If nothing opened, email us at{" "}
            <a href={`mailto:${site.email}`} className="text-accent-700 underline">
              {site.email}
            </a>{" "}
            or{" "}
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-accent-700 underline">
              message us on WhatsApp
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
