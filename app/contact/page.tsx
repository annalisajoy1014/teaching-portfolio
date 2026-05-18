import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Teaching Portfolio",
};

const details = [
  { label: "Email", value: "annalisa.joy1014@gmail.com", href: "mailto:annalisa.joy1014@gmail.com" },
  { label: "Subject Area", value: "English Language Arts", href: null },
  { label: "Grades", value: "8–12", href: null },
  { label: "Specializations", value: "AP Literature · AP Language · Honors Lit · SSAT Prep", href: null },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-14">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-4 max-w-xl text-zinc-500 leading-relaxed">
          I welcome questions about my teaching practice, requests for materials,
          and opportunities to collaborate. Reach out any time.
        </p>
      </header>

      <div className="grid gap-12 sm:grid-cols-2">
        {/* Contact details */}
        <section>
          <h2 className="text-lg font-semibold mb-6">Contact Information</h2>
          <ul className="space-y-4">
            {details.map(({ label, value, href }) => (
              <li key={label} className="flex flex-col gap-0.5">
                <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    className="text-sm text-zinc-800 hover:underline underline-offset-2"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-sm text-zinc-800">{value}</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Quick message note */}
        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-3">Send a Message</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-4">
            The easiest way to reach me is by email. I typically respond within
            1–2 business days.
          </p>
          <a
            href="mailto:annalisa.joy1014@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 w-fit"
          >
            Email Me
          </a>
        </section>
      </div>
    </div>
  );
}
