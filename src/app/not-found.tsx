import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">Error 404</p>
        <h1 className="mt-2 text-4xl font-bold text-navy-900">Page not found</h1>
        <p className="mt-4 text-lg text-slate-600">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Go to the home page</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
