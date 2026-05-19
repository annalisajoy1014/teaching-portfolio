export default function Footer() {
  return (
    <footer>
      <div
        className="text-center px-6 py-16"
        style={{ borderTop: "1px solid var(--hair)" }}
      >
        <p
          className="font-display mx-auto"
          style={{
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontStyle: "italic",
            color: "#2B60DE",
            lineHeight: 1.5,
            maxWidth: 640,
            marginBottom: 12,
          }}
        >
          &ldquo;Curiosity is the wick in the candle of learning&rdquo;
        </p>
        <p
          style={{
            fontSize: "clamp(14px, 1.5vw, 18px)",
            color: "#2B60DE",
            letterSpacing: "0.04em",
          }}
        >
          &mdash; William Arthur Ward
        </p>
      </div>
    </footer>
  );
}
