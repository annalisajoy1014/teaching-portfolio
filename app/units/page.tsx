import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unit Overview · Teaching Portfolio",
};

type Unit = {
  course: string;
  courseColor: string;
  title: string;
  duration: string;
  essentialQuestions: string[];
  objectives: string[];
  skills: string;
  scaffoldsFrom?: string;
  scaffoldsTo?: string;
};

const units: Unit[] = [
  // ── AP Literature ──────────────────────────────────────────────────────────
  {
    course: "AP Literature",
    courseColor: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    title: "Unit 1 · Short Fiction I: Character & Perspective",
    duration: "~3.5 weeks",
    essentialQuestions: [
      "How do authors use character and perspective to shape a reader's experience of a story?",
      "What does it mean to make a defensible interpretive claim about a text?",
    ],
    objectives: [
      "Analyze how narrative point of view and characterization create meaning in short fiction",
      "Practice the Double Entry Reading Journal to build evidence-based commentary",
      "Write a thesis using the 'statement of opinion + why' (OW!) framework",
      "Attempt FRQ Q2 (prose fiction analysis) under timed conditions",
    ],
    skills: "Close reading, annotation, thesis construction, prose fiction FRQ (Q2)",
    scaffoldsTo: "Unit 2 · Poetry I",
  },
  {
    course: "AP Literature",
    courseColor: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    title: "Unit 2 · Poetry I: Imagery & Speaker",
    duration: "~3.5 weeks",
    essentialQuestions: [
      "How do poets use imagery, diction, and form to construct meaning?",
      "What is the difference between a poem's speaker and its author, and why does it matter?",
    ],
    objectives: [
      "Apply the TP(P)-CASTT method to analyze unfamiliar poems",
      "Identify and analyze shifts in tone and perspective within a poem",
      "Write a poetry analysis essay with textual evidence and line citations",
      "Attempt FRQ Q1 (poetry analysis) under timed conditions",
    ],
    skills: "TP(P)-CASTT analysis, poetic devices, tone & shift identification, poetry FRQ (Q1)",
    scaffoldsFrom: "Unit 1 · Short Fiction I",
    scaffoldsTo: "Unit 3 · Longer Fiction or Drama I",
  },
  {
    course: "AP Literature",
    courseColor: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    title: "Unit 3 · Longer Fiction or Drama I: Structure & Meaning",
    duration: "~3.5 weeks",
    essentialQuestions: [
      "How does the structure of a longer work accumulate meaning across its arc?",
      "What is the relationship between a character's choices and the text's central argument?",
    ],
    objectives: [
      "Trace how literary elements develop across a full novel or play",
      "Construct a literary argument with a defensible, complex thesis",
      "Practice FRQ Q3 (literary argument) using works studied",
      "Give and receive structured peer feedback on analytical essays",
    ],
    skills: "Extended literary analysis, FRQ Q3, literary argument, peer review",
    scaffoldsFrom: "Unit 2 · Poetry I",
    scaffoldsTo: "Unit 4 · Short Fiction II",
  },
  {
    course: "AP Literature",
    courseColor: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    title: "Units 4–6 · Second Rotation: Complexity & Ambiguity",
    duration: "~10 weeks",
    essentialQuestions: [
      "How do authors use ambiguity and complexity to resist easy interpretation?",
      "What makes an analytical claim 'sophisticated' rather than merely accurate?",
    ],
    objectives: [
      "Apply Row C (sophistication) criteria: situating a text in broader context, using literary comparison, or exploring tensions within the argument",
      "Read AP-exam level passages in all three genres with increasing independence",
      "Complete full-length timed practice on all three FRQ types",
    ],
    skills: "Sophisticated argumentation, all three FRQ types, comparative analysis, exam stamina",
    scaffoldsFrom: "Unit 3 · Longer Fiction or Drama I",
    scaffoldsTo: "Units 7–9 · Third Rotation",
  },
  {
    course: "AP Literature",
    courseColor: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    title: "Units 7–9 · Third Rotation: Exam Preparation & Synthesis",
    duration: "~10 weeks",
    essentialQuestions: [
      "How do we bring everything we have learned to bear on an unseen text in 40 minutes?",
      "What does our strongest analytical work look like under pressure?",
    ],
    objectives: [
      "Complete full AP Lit timed practice exams with scoring using official rubrics",
      "Revise and reflect on FRQ responses using the 6-point rubric (Thesis / Evidence & Commentary / Sophistication)",
      "Build a repertoire of works for FRQ Q3 (literary argument from open-ended prompt)",
    ],
    skills: "AP exam strategy, self-scoring, revision for sophistication, FRQ Q1/Q2/Q3 fluency",
    scaffoldsFrom: "Units 4–6 · Second Rotation",
  },

  // ── AP Language ────────────────────────────────────────────────────────────
  {
    course: "AP Language",
    courseColor: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    title: "Unit 1 · Reading Rhetoric: How Writers Persuade",
    duration: "~4 weeks",
    essentialQuestions: [
      "How do writers use rhetorical strategies to achieve their purpose with a specific audience?",
      "What does it mean to analyze an argument rather than simply agree or disagree with it?",
    ],
    objectives: [
      "Apply SOAPS (Subject, Occasion, Audience, Purpose, Speaker) to nonfiction texts",
      "Identify and analyze ethos, pathos, logos, and kairos in speeches and essays",
      "Write a rhetorical analysis essay with textual evidence and stylistic commentary",
    ],
    skills: "SOAPS analysis, rhetorical appeals, tone analysis, rhetorical analysis FRQ",
    scaffoldsTo: "Unit 2 · Building Arguments",
  },
  {
    course: "AP Language",
    courseColor: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    title: "Unit 2 · Building Arguments: Evidence & Sophistication",
    duration: "~4 weeks",
    essentialQuestions: [
      "How do writers select, integrate, and explain evidence to build credible arguments?",
      "What separates a nuanced, complex argument from a one-sided claim?",
    ],
    objectives: [
      "Construct an argument essay that takes a defensible position and anticipates counterargument",
      "Practice AP Lang sophistication: acknowledging complexity, using comparison, exploring implications",
      "Study parallel structure, antithesis, and other rhetorical devices that strengthen argument",
    ],
    skills: "Argument essay, counterargument, rhetorical devices, sophistication criteria",
    scaffoldsFrom: "Unit 1 · Reading Rhetoric",
    scaffoldsTo: "Unit 3 · Synthesis Writing",
  },
  {
    course: "AP Language",
    courseColor: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    title: "Unit 3 · Synthesis Writing: Source Literacy & Integration",
    duration: "~4 weeks",
    essentialQuestions: [
      "How do we read multiple sources critically and use them in conversation with each other?",
      "What is the difference between citing a source and using it to build an argument?",
    ],
    objectives: [
      "Evaluate source credibility, perspective, and relevance in a multi-source prompt",
      "Write a synthesis essay that uses at least three sources to support a central claim",
      "Practice MLA citation and attribution within analytical prose",
    ],
    skills: "Source evaluation, synthesis FRQ, MLA citation, multi-source argument integration",
    scaffoldsFrom: "Unit 2 · Building Arguments",
  },

  // ── Honors Literature ──────────────────────────────────────────────────────
  {
    course: "Honors Literature",
    courseColor: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
    title: "Unit 1 · Corruption & Consequence: The Picture of Dorian Gray",
    duration: "~5 weeks",
    essentialQuestions: [
      "How does Wilde use symbolism and wit to critique Victorian society?",
      "What does the novel argue about the relationship between beauty, morality, and identity?",
    ],
    objectives: [
      "Analyze Wilde's use of the Gothic and the Aesthetic movement as literary lenses",
      "Track character transformation across the novel using evidence from the text",
      "Write a multi-paragraph literary analysis essay with a developed thesis and close reading",
      "Complete timed vocabulary quizzes and reading checks throughout the unit",
    ],
    skills: "Literary analysis, symbolism, characterization, essay writing, vocabulary",
    scaffoldsTo: "Unit 2 · Voice & Alienation: The Catcher in the Rye",
  },
  {
    course: "Honors Literature",
    courseColor: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
    title: "Unit 2 · Voice & Alienation: The Catcher in the Rye",
    duration: "~5 weeks",
    essentialQuestions: [
      "How does Salinger use an unreliable narrator to create irony and sympathy simultaneously?",
      "What does Holden's voice reveal about adolescence, authenticity, and loss?",
    ],
    objectives: [
      "Analyze the effect of first-person unreliable narration on tone, theme, and reader trust",
      "Write a literary argument essay using evidence and analysis to support a complex claim",
      "Practice quick-write responses (QuickWrites) to develop fluency and textual connection",
      "Participate in Socratic seminar discussion using textual evidence",
    ],
    skills: "Unreliable narrator, literary argument, Socratic seminar, timed writing",
    scaffoldsFrom: "Unit 1 · The Picture of Dorian Gray",
    scaffoldsTo: "Unit 3 · The Poetry Project",
  },
  {
    course: "Honors Literature",
    courseColor: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
    title: "Unit 3 · The Poetry Project: Form, Voice & Meaning",
    duration: "~4 weeks",
    essentialQuestions: [
      "How do poets use form and structure as expressive tools?",
      "What is the relationship between a poem's sonic qualities and its meaning?",
    ],
    objectives: [
      "Analyze sonnets (English and Italian), free verse, and narrative poetry",
      "Scan lines for meter and identify prosodic features (iambic pentameter, rhyme scheme)",
      "Write an original poem using a studied form with an artist's statement",
      "Write a comparative poetry analysis essay",
    ],
    skills: "Prosody, scansion, sonnet forms, comparative analysis, creative writing with annotation",
    scaffoldsFrom: "Unit 2 · The Catcher in the Rye",
  },

  // ── 8th Grade English ──────────────────────────────────────────────────────
  {
    course: "8th Grade English",
    courseColor: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    title: "Trimester 1 · Elements of Story: Fahrenheit 451",
    duration: "12 weeks",
    essentialQuestions: [
      "How do authors use character, plot, and point of view to build a story's meaning?",
      "What makes a narrative essay vivid and purposeful?",
    ],
    objectives: [
      "Identify and analyze elements of fiction: characterization (STEAL), POV, plot structure (Freytag's Pyramid), mood, tone, and theme",
      "Read and discuss Fahrenheit 451 at a rate of 6 pages per day",
      "Write a three-draft narrative essay with emphasis on sentence variety and paragraph structure",
      "Correct common grammar errors: subject/verb agreement, pronoun/antecedent agreement, run-ons, fragments",
    ],
    skills: "Elements of fiction, characterization, narrative essay, grammar fundamentals",
    scaffoldsTo: "Trimester 2 · Dramatic Irony: The Glass Menagerie",
  },
  {
    course: "8th Grade English",
    courseColor: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    title: "Trimester 2 · Dramatic Irony & Persuasion: The Glass Menagerie",
    duration: "12 weeks",
    essentialQuestions: [
      "How do playwrights use irony to reveal character and social critique?",
      "How do writers use rhetorical appeals to persuade an audience?",
    ],
    objectives: [
      "Analyze verbal, situational, and dramatic irony in Tennessee Williams' The Glass Menagerie",
      "Study 'This Is Water' by David Foster Wallace as a model of persuasive nonfiction",
      "Write a three-draft irony analysis essay and a three-draft persuasive essay",
      "Learn rhetorical appeals (ethos, pathos, logos, kairos) and advanced figurative language (paradox, oxymoron, euphemism)",
    ],
    skills: "Irony analysis, rhetorical appeals, persuasive essay, figurative language, MLA citation",
    scaffoldsFrom: "Trimester 1 · Elements of Story",
    scaffoldsTo: "Trimester 3 · Language & Power: The Tempest",
  },
  {
    course: "8th Grade English",
    courseColor: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    title: "Trimester 3 · Language & Power: The Tempest",
    duration: "13 weeks",
    essentialQuestions: [
      "How does Shakespeare use language, power, and magic to explore justice and forgiveness?",
      "How do form and structure in poetry create layers of meaning?",
    ],
    objectives: [
      "Read The Tempest at 6 pages per day; analyze archaic diction and dramatic structure",
      "Study elements of poetry: meter, iambic pentameter, rhyme schemes, sonnet forms (English and Italian)",
      "Write a three-draft narrative poetry analysis essay and a three-draft comparative essay",
      "Master advanced sentence variety: absolute phrases, relative clauses, adverb and noun clauses",
    ],
    skills: "Shakespearean drama, elements of poetry, iambic pentameter, comparative essay, advanced syntax",
    scaffoldsFrom: "Trimester 2 · The Glass Menagerie",
  },

  // ── SSAT Prep ──────────────────────────────────────────────────────────────
  {
    course: "SSAT Prep",
    courseColor: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    title: "Unit 1 · Verbal Mastery: Synonyms & Analogies",
    duration: "Flexible (4–6 weeks)",
    essentialQuestions: [
      "How does precise vocabulary knowledge unlock every other section of the SSAT?",
      "What strategies help students decode unfamiliar words and identify analogy relationships?",
    ],
    objectives: [
      "Apply the Three C's — Comprehension, Context, Connotation — to synonym questions",
      "Identify and name the five core analogy relationship types: synonyms/antonyms, intensity/degree, parts/wholes, examples/types, use/function",
      "Build vocabulary through Greek and Latin root study, prefix/suffix charts, and context clue practice",
      "Complete timed verbal sections from authentic Middle Level practice materials",
    ],
    skills: "Vocabulary acquisition, analogy reasoning, root word analysis, process of elimination",
    scaffoldsTo: "Unit 2 · Critical Reading Strategies",
  },
  {
    course: "SSAT Prep",
    courseColor: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    title: "Unit 2 · Critical Reading: Passage Strategies",
    duration: "Flexible (4–6 weeks)",
    essentialQuestions: [
      "How do active readers extract meaning efficiently under timed test conditions?",
      "What is the author's purpose, and how does recognizing it sharpen comprehension?",
    ],
    objectives: [
      "Apply the 5 W's framework (Who, What, Where, When, Why) to every passage",
      "Annotate actively: underline key words, circle transitional phrases, note author's purpose",
      "Recognize common passage types: narrative, argumentative, poetry, informational",
      "Practice evidence-based answer selection from authentic Middle Level reading materials",
    ],
    skills: "Active annotation, 5 W's framework, passage mapping, time management, inference",
    scaffoldsFrom: "Unit 1 · Verbal Mastery",
  },
];

const courseOrder = [
  "AP Literature",
  "AP Language",
  "Honors Literature",
  "8th Grade English",
  "SSAT Prep",
];

export default function UnitsPage() {
  const grouped = courseOrder.map((course) => ({
    course,
    units: units.filter((u) => u.course === course),
    color: units.find((u) => u.course === course)?.courseColor ?? "",
  }));

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-14">
        <h1 className="text-4xl font-bold tracking-tight">Unit Overview</h1>
        <p className="mt-4 max-w-2xl text-zinc-500 leading-relaxed">
          A macroscopic view of every unit I have planned — organized by course,
          sequenced from start to finish. Each card shows how learning objectives
          build on one another through deliberate scaffolding.
        </p>
      </header>

      <div className="space-y-16">
        {grouped.map(({ course, units: courseUnits, color }) => (
          <section key={course}>
            <div className="flex items-center gap-3 mb-6">
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${color}`}>
                {course}
              </span>
              <span className="text-sm text-zinc-400">
                {courseUnits.length} unit{courseUnits.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-100 hidden sm:block" />

              <div className="space-y-6">
                {courseUnits.map((unit, idx) => (
                  <div key={idx} className="sm:pl-12 relative">
                    {/* Timeline dot */}
                    <div className="absolute left-3 top-6 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white hidden sm:block" />

                    <div className="rounded-2xl border border-zinc-200 p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <h3 className="font-semibold text-zinc-900 leading-snug max-w-xl">
                          {unit.title}
                        </h3>
                        <span className="text-xs text-zinc-400 whitespace-nowrap">
                          {unit.duration}
                        </span>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2 text-sm">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-2">
                            Essential Questions
                          </p>
                          <ul className="space-y-1.5">
                            {unit.essentialQuestions.map((q, i) => (
                              <li key={i} className="text-zinc-600 leading-relaxed">
                                {q}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-2">
                            Learning Objectives
                          </p>
                          <ul className="space-y-1.5">
                            {unit.objectives.map((o, i) => (
                              <li key={i} className="flex gap-2 text-zinc-600 leading-relaxed">
                                <span className="text-zinc-300 mt-0.5">›</span>
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-400">
                        <span>
                          <span className="font-medium text-zinc-500">Skills: </span>
                          {unit.skills}
                        </span>
                        {unit.scaffoldsFrom && (
                          <span>← Builds on: {unit.scaffoldsFrom}</span>
                        )}
                        {unit.scaffoldsTo && (
                          <span>→ Leads to: {unit.scaffoldsTo}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
