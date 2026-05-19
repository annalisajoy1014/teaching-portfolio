"use client";

import { useState } from "react";

type AccordionRowProps = {
  label: string;
  items: string[];
  index: string;
};

function AccordionRow({ label, items, index }: AccordionRowProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "grid",
          gridTemplateColumns: "28px 160px 1fr",
          gap: 24,
          padding: "18px 0",
          borderTop: "1px solid var(--hair)",
          width: "100%",
          background: "none",
          cursor: "pointer",
          textAlign: "left",
          transition: "padding-left 240ms ease, background 240ms ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.paddingLeft = "12px";
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(167,139,250,0.04)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.paddingLeft = "0";
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "var(--faint)",
            fontFamily: "var(--font-sans)",
            alignSelf: "center",
            transition: "transform 240ms ease",
            display: "inline-block",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          ›
        </span>
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
            fontFamily: "var(--font-sans)",
            alignSelf: "center",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: 13,
            color: "var(--faint)",
            letterSpacing: "-0.005em",
            alignSelf: "center",
            textAlign: "right",
          }}
        >
          {open ? "Hide" : `${items.length} item${items.length !== 1 ? "s" : ""}`}
        </span>
      </button>

      {open && (
        <div style={{ borderTop: "1px solid var(--hair)" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "28px 160px 1fr",
                gap: 24,
                padding: "14px 0 14px 12px",
                borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--purple)",
                  fontFamily: "var(--font-sans)",
                  alignSelf: "center",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ gridColumn: "2 / -1", fontSize: 15, color: "var(--muted)", letterSpacing: "-0.005em" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

type StaticRowProps = {
  index: string;
  label: string;
  value: string;
};

function StaticRow({ index, label, value }: StaticRowProps) {
  return (
    <div className="cred-row">
      <span className="idx">{index}</span>
      <span className="lbl">{label}</span>
      <span className="val">{value}</span>
    </div>
  );
}

export default function CredentialsAccordion() {
  return (
    <div>
      <AccordionRow
        index="01"
        label="Degrees and Certifications"
        items={[
          "MA in TESOL — Vancouver Island University",
          "BA in English — California State University, San Bernardino",
          "TESOL Certificate — International TEFL Academy",
        ]}
      />
      <AccordionRow
        index="04"
        label="Experience"
        items={[
          "English Language Arts, Grades 8–12 (US)",
          "EFL Instructor — Thailand · 4 years, all ages & levels",
          "EFL Instructor — Cambodia · TESOL practicum & young learners",
          "ESL Tutor — California · Spanish-speaking learners",
        ]}
      />
    </div>
  );
}
