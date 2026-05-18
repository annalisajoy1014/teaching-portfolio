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
    body: "All three FRQs are scored on a 6-point rubric with three rows: Row A (Thesis, 0–1 pt) requires a defensible interpretation — a statement of opinion plus the reason behind it (the 'OW!' framework: Opinion + Why). Row B (Evidence & Commentary, 0–4 pts) rewards specific textual evidence woven into well-organized analytical reasoning. Row C (Sophistication, 0–1 pt) recognizes arguments that situate the text in broader literary or cultural context, use comparison, or explore tensions within the work. Students practice Q1 (poetry analysis), Q2 (prose fiction analysis), and Q3 (literary argument) throughout the year with timed writes, peer scoring, and individual feedback.",
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
    body: "I anchor rhetorical analysis in the SOAPS framework (Subject, Occasion, Audience, Purpose, Speaker), which gives students a systematic way to situate any text before analyzing its choices. From there, students learn to identify and analyze the classical appeals — ethos, pathos, logos, and kairos — alongside specific stylistic devices: parallel structure, antithesis, anaphora, asyndeton, polysyndeton, and others drawn from the AP Lang sophistication notes. The key shift is from naming a device to explaining its effect on the audience and how it advances the writer's purpose.",
  },
  {
    heading: "Key Texts & Sources",
    body: "Anchor texts include 'This Is Water' by David Foster Wallace (used across both AP Lang and 8th Grade English as a model of contemporary persuasion), canonical speeches, and a rotating selection of nonfiction essays that model strong rhetorical choices. Students read texts that represent diverse voices, occasions, and argument types, building the broad reading background needed for synthesis prompts.",
  },
  {
    heading: "Argument & Synthesis Writing",
    body: "Students write all three FRQ types across the year. For the argument essay, they learn to take a defensible position, anticipate and address counterargument, and develop complexity — acknowledging nuance or exploring tensions rather than oversimplifying. For synthesis, they learn to read multiple sources quickly and critically, identify each source's perspective and potential bias, and integrate at least three sources into a coherent original argument. MLA citation and attribution are built in from the start.",
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
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">AP Classes</h1>
        <p className="mt-3 max-w-2xl text-zinc-500 leading-relaxed">
          An overview of my AP English courses — how they are structured, how I
          prepare students for the exam, and the outcomes students achieve.
        </p>
      </header>

      {/* AP Lit / AP Lang toggle */}
      <div className="flex gap-2 mb-10">
        {(["lit", "lang"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === tab
                ? "bg-zinc-900 text-white"
                : "border border-zinc-200 text-zinc-600 hover:bg-zinc-50"
            }`}
          >
            {tab === "lit" ? "AP Literature" : "AP Language"}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {sections.map(({ heading, body }) => (
          <div key={heading} className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="font-semibold mb-3">{heading}</h2>
            <p className="text-sm text-zinc-600 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
