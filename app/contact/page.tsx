import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Teaching Portfolio",
};

const details = [
  { label: "Email", value: "annalisa.joy1014@gmail.com", href: "mailto:annalisa.joy1014@gmail.com", purple: true },
  { label: "Subject Area", value: "English Language Arts", href: null },
  { label: "Grade Levels", value: "8–12", href: null },
  { label: "Specializations", value: "AP Literature · AP Language · Honors Lit · SSAT Prep", href: null },
  { label: "Response Time", value: "1–2 business days", href: null },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[960px] px-6" style={{ paddingTop: 96, paddingBottom: 120 }}>
      <header style={{ marginBottom: 80 }}>
        <p className="eyebrow mb-8">Contact</p>
        <h1
          className="font-display"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, marginBottom: 20 }}
        >
          Questions, opportunities, <em className="accent">collaboration.</em>
        </h1>
        <p style={{ maxWidth: 480, color: "var(--muted)", fontSize: 17, lineHeight: 1.65, letterSpacing: "-0.005em" }}>
          I welcome questions about my teaching practice, requests for materials,
          and opportunities to collaborate. Reach out any time.
        </p>
      </header>

      <div
        className="sm:grid sm:grid-cols-[1fr_1.2fr]"
        style={{ gap: 80, alignItems: "start" }}
      >
        {/* Contact details */}
        <section>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--faint)",
              marginBottom: 0,
              fontFamily: "var(--font-sans)",
            }}
          >
            Contact Information
          </p>

          <dl>
            {details.map(({ label, value, href, purple }, i) => (
              <div
                key={label}
                style={{
                  borderTop: "1px solid var(--hair)",
                  padding: "18px 0",
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <dt
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {label}
                </dt>
                <dd style={{ textAlign: "right" }}>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontSize: 15,
                        color: purple ? "var(--purple)" : "var(--ink)",
                        textDecoration: "none",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: 15,
                        color: "var(--ink)",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {value}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Message note */}
        <section
          style={{
            padding: "40px",
            border: "1px solid var(--hair)",
            borderRadius: 2,
          }}
        >
          <h2
            className="font-display"
            style={{ fontSize: 26, color: "var(--ink)", marginBottom: 16 }}
          >
            Send a <em className="accent">message.</em>
          </h2>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, marginBottom: 28, letterSpacing: "-0.005em" }}>
            The easiest way to reach me is by email. I typically respond within
            1–2 business days and welcome questions about curriculum, teaching
            methods, materials, or potential collaboration.
          </p>
          <a
            href="mailto:annalisa.joy1014@gmail.com"
            className="pill-primary"
            style={{ display: "inline-flex" }}
          >
            Email Annalisa
          </a>
        </section>
      </div>
    </div>
  );
}
