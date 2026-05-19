"use client";

import { useState } from "react";

const apLitSections = [
  {
    heading: "Course Overview",
    body: "AP Literature is a college-level survey of literary analysis across three genres — short fiction, poetry, and longer fiction or drama — organized into nine units taught in three progressively complex rotations. Students develop the skills to read carefully, argue convincingly, and write analytically under timed conditions. By year's end, they can move from a cold passage to a scored essay in 40 minutes.",
  },
  {
    heading: "Approach to Close Reading",
    body: "I teach two core close-reading tools: the Double Entry Reading Journal and TP(P)-CASTT. The Double Entry Journal places a quotation from the text on the left and the student's analytical reaction — not summary, but interpretation — on the right. For poetry, TP(P)-CASTT (Title → Paraphrase → Predict → Connotation → Attitude/Tone → Shifts → Title revisited → Theme/Claim) gives students a repeatable method for moving from confusion to argument. Students annotate every text they read, and we consistently ask: not what does this say, but what does this do?",
  },
  {
    heading: "Key Anchor Texts & Methods",
    body: "The course moves through all three genres twice in the first two rotations before a third synthesis rotation. Anchor works have included Hamlet (longer drama), and a rotating selection of AP-level short fiction and poetry representative of multiple time periods and cultural perspectives. For Q3 (literary argument), students build a personal repertoire of novels and plays they know deeply enough to deploy in response to any open-ended prompt.",
  },
  {
    heading: "FRQ & Essay Preparation",
    body: "All three FRQs are scored on a 6-point rubric with three rows: Row A (Thesis, 0–1 pt) requires a defensible interpretation — a statement of opinion plus the reason behind it (the 'OW!' framework: Opinion + Why). Row B (Evidence & Commentary, 0–4 pts) rewards specific textual evidence woven into well-organized analytical reasoning. Row C (Sophistication, 0–1 pt) recognizes arguments that situate the text in broader literary or cultural context, use comparison, or explore tensions within the work. Students practice Q1, Q2, and Q3 throughout the year with timed writes, peer scoring, and individual feedback.",
  },
  {
    heading: "Student Outcomes",
    body: "Students leave the course with the ability to write a scored analytical essay on an unseen passage in under 40 minutes, a personal reading repertoire for the open-ended Q3 prompt, and the analytical habits — close reading, defensible thesis, evidence + commentary — that serve them in college writing across disciplines.",
  },
];

const apLangSections = [
  {
    heading: "Course Overview",
    body: "AP Language and Composition focuses on the art of argument: how writers make choices to achieve specific effects on specific audiences. Students read nonfiction texts across genres — speeches, essays, journalism, memoirs — and learn to analyze, evaluate, and produce rhetoric. The course prepares students for three FRQ types: rhetorical analysis, argument, and synthesis.",
  },
  {
    heading: "Rhetorical Analysis Framework",
    body: "I anchor rhetorical analysis in the SOAPS framework (Subject, Occasion, Audience, Purpose, Speaker), which gives students a systematic way to situate any text before analyzing its choices. From there, students learn to identify and analyze the classical appeals — ethos, pathos, logos, and kairos — alongside specific stylistic devices: parallel structure, antithesis, anaphora, asyndeton, polysyndeton, and others. The key shift is from naming a device to explaining its effect on the audience and how it advances the writer's purpose.",
  },
  {
    heading: "Key Texts & Sources",
    body: "Anchor texts include 'This Is Water' by David Foster Wallace (used across both AP Lang and 8th Grade English as a model of contemporary persuasion), canonical speeches, and a rotating selection of nonfiction essays that model strong rhetorical choices. Students read texts that represent diverse voices, occasions, and argument types, building the broad reading background needed for synthesis prompts.",
  },
  {
    heading: "Argument & Synthesis Writing",
    body: "Students write all three FRQ types across the year. For the argument essay, they learn to take a defensible position, anticipate and address counterargument, and develop complexity. For synthesis, they learn to read multiple sources quickly and critically, identify each source's perspective and potential bias, and integrate at least three sources into a coherent original argument. MLA citation and attribution are built in from the start.",
  },
  {
    heading: "Student Outcomes",
    body: "Students leave the course as stronger analytical readers and more deliberate writers. They can identify how rhetorical choices work in any text, construct a multi-source synthesis argument under timed conditions, and apply the kind of sophisticated, audience-aware thinking that serves them in college composition and beyond.",
  },
];

export default function APPage() {
  const [active, setActive] = useState<"lit" | "lang">("lit");
  const sections = active === "lit" ? apLitSections : apLangSections;

  return (
    <div className="mx-auto max-w-[960px] px-6" style={{ paddingTop: 80, paddingBottom: 120 }}>
      <header style={{ marginBottom: 56 }}>
        <p className="eyebrow mb-8">Test Prep</p>
        <h1
          className="font-display"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, marginBottom: 20 }}
        >
          AP English at the highest <em className="accent">level.</em>
        </h1>
        <p style={{ maxWidth: 560, color: "var(--muted)", fontSize: 17, lineHeight: 1.65, letterSpacing: "-0.005em" }}>
          How I structure AP Literature and AP Language — from close reading tools
          to FRQ preparation — and the outcomes students achieve.
        </p>
      </header>

      {/* AP Lit / AP Lang toggle */}
      <div style={{ display: "flex", gap: 8, marginBottom: 48 }}>
        {(["lit", "lang"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: active === tab ? 500 : 400,
              cursor: "pointer",
              letterSpacing: "-0.005em",
              transition: "all 180ms ease",
              border: "none",
              ...(active === tab
                ? { background: "var(--ink)", color: "var(--bg)" }
                : {
                    background: "transparent",
                    color: "var(--muted)",
                    outline: "1px solid var(--hair)",
                  }),
            }}
          >
            {tab === "lit" ? "AP Literature" : "AP Language"}
          </button>
        ))}
      </div>

      {/* Section list */}
      <div>
        {sections.map(({ heading, body }, i) => (
          <div
            key={heading}
            style={{
              borderTop: "1px solid var(--hair)",
              padding: "32px 0",
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              gap: 48,
              alignItems: "start",
            }}
            className="block sm:grid"
          >
            <h2
              className="font-display"
              style={{ fontSize: 20, color: "var(--ink)", marginBottom: 12 }}
            >
              {heading}
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, letterSpacing: "-0.005em" }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
