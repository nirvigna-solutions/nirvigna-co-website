# Nirvigna website (nirvigna.co)

Company website for Nirvigna Cloud Compliance Private Limited. Built with Next.js, TypeScript and
Tailwind CSS. Fully static: no database, no login, no paid services. Hosted on Vercel.

## Change company details

All company details (email, phone, WhatsApp, address, CIN, GSTIN, domain, business hours) are in
**one file**: `src/config/site.ts`. Edit the value, save, commit and push. Vercel redeploys
automatically.

- **GSTIN:** it is empty for now and hidden everywhere. Put the number between the quotes
  (`gstin: "36XXXXXXXXXXXXX"`) and it will appear in the footer and on the About page.

## Pages

| Page | File |
| --- | --- |
| Home | `src/app/page.tsx` |
| Nirvigna Cloud Compliance | `src/app/cloud-compliance/page.tsx` |
| Nirvigna FoodSafe | `src/app/foodsafe/page.tsx` |
| About | `src/app/about/page.tsx` |
| Contact (enquiry form opens the visitor's email app) | `src/app/contact/page.tsx` |
| Privacy Policy | `src/app/privacy/page.tsx` |
| Terms of Use | `src/app/terms/page.tsx` |

SEO files are generated automatically: `/sitemap.xml`, `/robots.txt`, the favicon (`src/app/icon.svg`)
and the social-share image (`src/app/opengraph-image.tsx`).

When you change the Privacy Policy or Terms, also change the "Last updated" date (DD-MM-YYYY) at the top
of that file, and the date in `src/app/sitemap.ts`.

## Run it on your computer

```bash
npm install      # first time only
npm run dev      # then open http://localhost:3000
```

Before pushing a change, check the production build works:

```bash
npm run lint
npm run build
```
