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
          Explore the <em className="accent">portfolio.</em>
        </h2>
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
