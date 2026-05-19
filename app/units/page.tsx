import type { Metadata } from "next";
import UnitsGallery, { type Unit } from "@/components/UnitsGallery";

export const metadata: Metadata = {
  title: "Unit Overview · Teaching Portfolio",
};

const units: Unit[] = [
  // ── AP Literature ──────────────────────────────────────────────────────────
  {
    course: "AP Literature",
    courseColor: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    title: "Short Fiction: Poe & Gothic Horror",
    duration: "~3.5 weeks",
    heroImage: "/units/f451-salamander.jpg",
    heroAlt: "A fire salamander — embodying the Gothic darkness and symbolic intensity central to Poe's tales",
    essentialQuestions: [
      "How does Poe use atmosphere, diction, and unreliable narrators to build psychological suspense?",
      "What does Gothic fiction reveal about human fear, obsession, and the unconscious?",
    ],
    objectives: [
      "Close-read short fiction by Edgar Allan Poe, including 'The Fall of the House of Usher' and selected tales",
      "Analyze how setting, imagery, and narrative voice create mood and reinforce theme",
      "Identify and analyze the features of Gothic fiction as a literary tradition",
      "Write a prose fiction analysis essay using the OW! thesis framework and textual evidence",
    ],
    skills: "Close reading, atmospheric analysis, Gothic conventions, unreliable narration, FRQ Q2",
    scaffoldsTo: "Poetry I: Imagery & Speaker",
  },
  {
    course: "AP Literature",
    courseColor: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    title: "Poetry I: Imagery & Speaker",
    duration: "~3.5 weeks",
    heroImage: "/units/poetry-sonnet.jpg",
    heroAlt: "An annotated Petrarchan sonnet — octave and sestet labeled, rhyme scheme marked — the close reading work at the center of poetry analysis",
    essentialQuestions: [
      "How do poets use imagery, diction, and form to construct meaning?",
      "What is the difference between a poem's speaker and its author, and why does it matter?",
    ],
    objectives: [
      "Apply the TP(P)-CASTT method to analyze unfamiliar poems: Title, Paraphrase, Predict, Connotation, Attitude/Tone, Shifts, Title revisited, Theme/Claim",
      "Identify and analyze shifts in tone and perspective within a poem",
      "Write a poetry analysis essay with textual evidence and line citations",
      "Attempt FRQ Q1 (poetry analysis) under timed conditions",
    ],
    skills: "TP(P)-CASTT analysis, poetic devices, tone & shift identification, poetry FRQ (Q1)",
    scaffoldsFrom: "Short Fiction: Poe & Gothic Horror",
    scaffoldsTo: "Long Fiction: Fahrenheit 451",
  },
  {
    course: "AP Literature",
    courseColor: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    title: "Long Fiction: Fahrenheit 451",
    duration: "~10 weeks",
    heroImage: "/units/f451-burning-book.jpg",
    heroAlt: "A book engulfed in flames — the central symbol of Bradbury's dystopia",
    essentialQuestions: [
      "What does Bradbury's dystopia argue about the relationship between knowledge, conformity, and power?",
      "How do authors use character transformation to deliver a text's central argument?",
    ],
    objectives: [
      "Analyze how Bradbury develops Montag's character arc through setting, imagery, and symbol",
      "Practice the Double Entry Reading Journal to move from plot summary to analytical observation",
      "Write a thesis using the 'Opinion + Why' (OW!) framework applied to a defensible interpretation",
      "Attempt FRQ Q2 (prose fiction analysis) using passages from the novel under timed conditions",
    ],
    skills: "Close reading, character analysis, symbolism, thesis construction, prose fiction FRQ (Q2)",
    gallery: [
      { src: "/units/f451-firemen.jpg",     alt: "Illustration of firemen in uniform with '451' on their helmets", caption: "The firemen of Fahrenheit 451" },
      { src: "/units/f451-dentifrice.jpg",  alt: "Denham's Dentifrice advertisement still — the jingle that drowns out Montag's attempt at memorization", caption: "Denham's Dentifrice scene" },
      { src: "/units/f451-lit-devices.png", alt: "Literary devices reference chart used in class: theme, motif, symbol, metaphor, simile, allusion, and more", caption: "Literary devices chart" },
    ],
    scaffoldsFrom: "Poetry I: Imagery & Speaker",
    scaffoldsTo: "Longer Fiction or Drama: Hamlet",
  },
  {
    course: "AP Literature",
    courseColor: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    title: "Longer Fiction or Drama: Hamlet",
    duration: "~3.5 weeks",
    heroImage: "/units/hamlet-castle.jpg",
    heroAlt: "Edinburgh Castle rising above a fountain and gardens — evoking the court of Elsinore and the world of Shakespeare's Hamlet",
    essentialQuestions: [
      "How does Shakespeare use dramatic structure and language to accumulate meaning across a full play?",
      "What is the relationship between a character's choices and the text's central argument about mortality and action?",
    ],
    objectives: [
      "Trace how literary elements develop across the full arc of a longer work",
      "Construct a literary argument with a defensible, complex thesis",
      "Practice FRQ Q3 (literary argument) using works studied in class",
      "Give and receive structured peer feedback on analytical essays using the AP rubric",
    ],
    skills: "Extended literary analysis, FRQ Q3, literary argument, peer review",
    scaffoldsFrom: "Long Fiction: Fahrenheit 451",
    scaffoldsTo: "Second Rotation: Complexity & Ambiguity",
  },
  {
    course: "AP Literature",
    courseColor: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    title: "Second Rotation: Complexity & Ambiguity",
    duration: "~10 weeks",
    heroImage: "/units/f451-sieve-sand.jpg",
    heroAlt: "Ink illustration of sand pouring through a sieve — Montag's metaphor for retaining meaning under pressure, mirroring the analytical demands of the second rotation",
    essentialQuestions: [
      "How do authors use ambiguity and complexity to resist easy interpretation?",
      "What makes an analytical claim 'sophisticated' rather than merely accurate?",
    ],
    objectives: [
      "Apply Row C sophistication criteria: situating a text in broader context, using literary comparison, or exploring tensions within the argument",
      "Read AP-exam level passages in all three genres with increasing independence",
      "Complete full-length timed practice on all three FRQ types",
    ],
    skills: "Sophisticated argumentation, all three FRQ types, comparative analysis, exam stamina",
    scaffoldsFrom: "Longer Fiction or Drama: Hamlet",
    scaffoldsTo: "Third Rotation: Exam Preparation",
  },
  {
    course: "AP Literature",
    courseColor: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    title: "Third Rotation: Exam Preparation",
    duration: "~10 weeks",
    heroImage: "/units/quill-pen.jpg",
    heroAlt: "Quill pen resting in an ink well on aged parchment — the art of writing under pressure",
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
    scaffoldsFrom: "Second Rotation: Complexity & Ambiguity",
  },

  // ── AP Language ────────────────────────────────────────────────────────────
  {
    course: "AP Language",
    courseColor: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    title: "Reading Rhetoric: How Writers Persuade",
    duration: "~4 weeks",
    heroImage: "/units/map-pins.jpg",
    heroAlt: "Red pins marking locations on a map — a visual metaphor for charting an author's rhetorical choices",
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
    scaffoldsTo: "Building Arguments: Evidence & Sophistication",
  },
  {
    course: "AP Language",
    courseColor: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    title: "Building Arguments: Evidence & Sophistication",
    duration: "~4 weeks",
    heroImage: "/units/puzzle-piece.jpg",
    heroAlt: "A single red puzzle piece fitting into a white puzzle — the pieces of a strong argument fitting together",
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
    scaffoldsFrom: "Reading Rhetoric: How Writers Persuade",
    scaffoldsTo: "Synthesis Writing: Source Literacy & Integration",
  },
  {
    course: "AP Language",
    courseColor: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    title: "Synthesis Writing: Source Literacy & Integration",
    duration: "~4 weeks",
    heroImage: "/units/f451-annotation.jpg",
    heroAlt: "Annotation guide showing how to mark up a text — circling key words, drawing arrows between ideas — the active reading work at the heart of evaluating sources for synthesis",
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
    scaffoldsFrom: "Building Arguments: Evidence & Sophistication",
  },

  // ── Honors Literature ──────────────────────────────────────────────────────
  {
    course: "Honors Literature",
    courseColor: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
    title: "Corruption & Consequence: The Picture of Dorian Gray",
    duration: "~10 weeks",
    heroImage: "/units/dorian-bridge.jpg",
    heroAlt: "The Ha'penny Bridge over the Liffey in Dublin at dusk — the city of Oscar Wilde's birth and the world of Victorian aestheticism at the heart of Dorian Gray",
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
    scaffoldsTo: "Voice & Alienation: The Catcher in the Rye",
  },
  {
    course: "Honors Literature",
    courseColor: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
    title: "Voice & Alienation: The Catcher in the Rye",
    duration: "~5 weeks",
    heroImage: "/units/citr-cover.jpg",
    heroAlt: "The iconic first-edition cover of The Catcher in the Rye — Salinger's red carousel horse against a white sky",
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
    scaffoldsFrom: "Corruption & Consequence: The Picture of Dorian Gray",
    scaffoldsTo: "Building a Great Story: Narrative Essay",
  },
  {
    course: "Honors Literature",
    courseColor: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
    title: "Building a Great Story: Narrative Essay",
    duration: "~4 weeks",
    heroImage: "/units/narrative-outline.jpg",
    heroAlt: "Narrative essay outline graphic organizer — the structured planning tool students use to build their stories from inciting incident to resolution",
    essentialQuestions: [
      "What are the structural and stylistic elements that make a story come alive on the page?",
      "How does a writer choose what to include, what to leave out, and how to sequence events for maximum impact?",
    ],
    objectives: [
      "Apply Freytag's Pyramid (exposition, conflict, rising action, climax, falling action, resolution) to plan a personal narrative",
      "Draft and revise a narrative essay using sensory detail, scene-building, and varied sentence structure",
      "Replace weak word choices with precise, vivid language",
      "Use transition words and phrases to control pace and guide the reader through the story",
    ],
    skills: "Story arc planning, narrative writing, sentence variety, word choice, revision strategies",
    scaffoldsFrom: "Voice & Alienation: The Catcher in the Rye",
    scaffoldsTo: "The Poetry Project: Form, Voice & Meaning",
    gallery: [
      { src: "/units/story-arc.png",      alt: "Story Arc diagram: Freytag's Pyramid with a complete student model narrative", caption: "Story arc — student model" },
      { src: "/units/story-building.jpg", alt: "Aerial view of a building under construction — the metaphor for constructing a great story", caption: "Building your story" },
      { src: "/units/vocab-resource.jpg", alt: "45 alternatives to the word 'very' — vocabulary enrichment for precise writing", caption: "Word choice resource" },
    ],
  },
  {
    course: "Honors Literature",
    courseColor: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
    title: "The Poetry Project: Form, Voice & Meaning",
    duration: "~4 weeks",
    heroImage: "/units/poetry-pen.jpg",
    heroAlt: "A fountain pen resting on handwritten verse — the craft of reading and writing poetry",
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
    scaffoldsFrom: "Building a Great Story: Narrative Essay",
    gallery: [
      { src: "/units/poetry-meter.jpg", alt: "Slide on poetic meter: monometer through octameter with foot definitions", caption: "Poetic meter reference" },
    ],
  },

  // ── 8th Grade English ──────────────────────────────────────────────────────
  {
    course: "8th Grade English",
    courseColor: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    title: "Elements of Story & Narrative Writing",
    duration: "12 weeks",
    heroImage: "/units/plot-diagram.jpg",
    heroAlt: "Plot diagram handout showing story elements with definitions — a core teaching tool for this unit",
    essentialQuestions: [
      "How do authors use character, plot, and point of view to build a story's meaning?",
      "What makes a narrative essay vivid and purposeful?",
    ],
    objectives: [
      "Identify and analyze elements of fiction: characterization (STEAL), POV, plot structure (Freytag's Pyramid), mood, tone, and theme",
      "Write a three-draft narrative essay with emphasis on sentence variety and paragraph structure",
      "Correct common grammar errors: subject/verb agreement, pronoun/antecedent agreement, run-ons, fragments",
    ],
    skills: "Elements of fiction, characterization, narrative essay, grammar fundamentals",
    gallery: [
      { src: "/units/elements-steal.jpg",          alt: "STEAL characterization chart: Speech, Thoughts, Effect on others, Actions, Looks", caption: "STEAL characterization method" },
      { src: "/units/elements-student-project.jpg",alt: "Student characterization project showing direct and indirect characterization of a character", caption: "Student characterization project" },
      { src: "/units/transition-words.jpg",        alt: "Transition words and phrases reference chart", caption: "Transitions chart" },
    ],
    scaffoldsTo: "Dramatic Irony & Persuasion: The Glass Menagerie",
  },
  {
    course: "8th Grade English",
    courseColor: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    title: "Dramatic Irony & Persuasion: The Glass Menagerie",
    duration: "12 weeks",
    heroImage: "/units/hand-flowers.jpg",
    heroAlt: "A hand reaching toward wildflowers — evoking Tennessee Williams' lyrical, fragile world of The Glass Menagerie",
    essentialQuestions: [
      "How do playwrights use irony to reveal character and social critique?",
      "How do writers use rhetorical appeals to persuade an audience?",
    ],
    objectives: [
      "Analyze verbal, situational, and dramatic irony in Tennessee Williams' The Glass Menagerie",
      "Study 'This Is Water' by David Foster Wallace as a model of contemporary persuasive nonfiction",
      "Write a three-draft irony analysis essay and a three-draft persuasive essay",
      "Learn rhetorical appeals (ethos, pathos, logos, kairos) and advanced figurative language (paradox, oxymoron, euphemism)",
    ],
    skills: "Irony analysis, rhetorical appeals, persuasive essay, figurative language, MLA citation",
    scaffoldsFrom: "Elements of Story & Narrative Writing",
    scaffoldsTo: "Language & Power: The Tempest & Poetry",
  },
  {
    course: "8th Grade English",
    courseColor: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    title: "Language & Power: The Tempest & Poetry",
    duration: "13 weeks",
    heroImage: "/units/tempest-miranda.jpg",
    heroAlt: "Waterhouse's Miranda watching the tempest shipwreck — the opening scene of Shakespeare's play",
    essentialQuestions: [
      "How does Shakespeare use language, power, and magic to explore justice and forgiveness?",
      "How do form and structure in poetry create layers of meaning?",
    ],
    objectives: [
      "Read The Tempest and analyze archaic diction and dramatic structure",
      "Study elements of poetry: meter, iambic pentameter, rhyme schemes, sonnet forms (English and Italian)",
      "Write a three-draft narrative poetry analysis essay and a three-draft comparative essay",
      "Master advanced sentence variety: absolute phrases, relative clauses, adverb and noun clauses",
    ],
    skills: "Shakespearean drama, elements of poetry, iambic pentameter, comparative essay, advanced syntax",
    scaffoldsFrom: "Dramatic Irony & Persuasion: The Glass Menagerie",
    gallery: [
      { src: "/units/tempest-ariel.jpg", alt: "Edmund Dulac illustration of Ariel commanding the storm over Prospero's enemies", caption: "Ariel and the tempest" },
    ],
  },

  // ── SSAT Prep ──────────────────────────────────────────────────────────────
  {
    course: "SSAT Prep",
    courseColor: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    title: "Verbal Mastery: Synonyms & Analogies",
    duration: "Flexible (4–6 weeks)",
    heroImage: "/units/quill-pen.jpg",
    heroAlt: "Quill pen and ink well — the classical symbol of precise, deliberate language, central to SSAT verbal preparation",
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
    scaffoldsTo: "Critical Reading: Passage Strategies",
  },
  {
    course: "SSAT Prep",
    courseColor: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    title: "Critical Reading: Passage Strategies",
    duration: "Flexible (4–6 weeks)",
    heroImage: "/units/story-map.jpg",
    heroAlt: "Story map graphic organizer — the same structured thinking students apply when mapping an SSAT passage using the 5 W's",
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
    scaffoldsFrom: "Verbal Mastery: Synonyms & Analogies",
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
    color: units.find((u) => u.course === course)?.courseColor ?? "",
    units: units.filter((u) => u.course === course),
  }));

  return (
    <div className="mx-auto max-w-[1400px] px-6" style={{ paddingTop: 96, paddingBottom: 120 }}>
      <header className="mb-16">
        <p className="eyebrow mb-8">Unit Overview</p>
        <h1
          className="font-display"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, marginBottom: 20 }}
        >
          Every unit, start to <em className="accent">finish.</em>
        </h1>
        <p style={{ maxWidth: 560, color: "var(--muted)", fontSize: 17, lineHeight: 1.65, letterSpacing: "-0.005em" }}>
          A macroscopic view of every unit I have planned — organized by course,
          sequenced from start to finish. Click any unit to explore details,
          materials, and scaffolding.
        </p>
      </header>

      <UnitsGallery grouped={grouped} />
    </div>
  );
}
