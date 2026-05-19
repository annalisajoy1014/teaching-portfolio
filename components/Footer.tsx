export default function Footer() {
  return (
    <footer>
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
