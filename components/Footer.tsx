import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Closing CTA block */}
      <section
        className="text-center px-6 py-24"
        style={{ borderTop: "1px solid var(--hair)" }}
      >
        <h2
          className="font-display mx-auto"
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            maxWidth: 600,
            color: "var(--ink)",
          }}
        >
          Explore the portfolio
          <br />
          or <em className="accent">get in touch.</em>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          <Link href="/units" className="pill-outline">Unit Overview</Link>
          <Link href="/test-prep" className="pill-outline">Test Prep</Link>
          <Link href="/contact" className="pill-primary">Contact</Link>
        </div>
      </section>

      {/* Copyright row */}
      <div
        className="mx-auto max-w-[960px] px-6 flex items-center justify-between py-6"
        style={{ borderTop: "1px solid var(--hair)" }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--faint)",
          }}
        >
          &copy; {new Date().getFullYear()} Annalisa Ard
        </span>
        <span
          className="eyebrow"
          style={{ fontSize: 11 }}
        >
          Open to new opportunities
        </span>
      </div>
    </footer>
  );
}
