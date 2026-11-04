import Link from "next/link";
import { products, site } from "@/config/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo tone="light" />
          <p className="mt-3 text-sm text-slate-400">{site.tagline}</p>
          <p className="mt-6 text-sm font-semibold text-white">{site.legalName}</p>
          <p className="mt-1 text-sm">CIN: {site.cin}</p>
          {site.gstin && <p className="mt-1 text-sm">GSTIN: {site.gstin}</p>}
          <address className="mt-3 text-sm not-italic leading-relaxed">
            Registered office:
            <br />
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {products.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">Company</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneE164}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
          <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">Legal</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-400 sm:px-6">
          © {site.incorporatedYear} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
