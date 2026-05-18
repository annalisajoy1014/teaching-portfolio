import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSAT Prep · Teaching Portfolio",
};

const sections = [
  {
    area: "Verbal",
    color: "bg-amber-50 border-amber-100",
    badge: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    description:
      "The Verbal section tests synonyms and analogies — both of which reward students who approach words analytically rather than just from memory. For synonyms, I teach the Three C's: Comprehension (do you know the word at all?), Context (can you use contextual clues?), and Connotation (is the word positive, negative, or neutral?). For analogies, I teach students to articulate the relationship as a complete sentence before looking at the answer choices, which prevents the most common error of pattern-matching on surface similarity.",
    strategies: [
      "The Three C's for synonyms: Comprehension → Context → Connotation",
      "Five analogy relationship types: synonyms/antonyms, intensity/degree, parts/wholes, examples/types, use/function",
      "Greek and Latin root study with prefix and suffix charts for decoding unfamiliar words",
      "Process of elimination — use the relationship sentence to rule out two or three choices immediately",
      "Timed practice from authentic Middle Level verbal sections",
    ],
  },
  {
    area: "Reading",
    color: "bg-sky-50 border-sky-100",
    badge: "bg-sky-50 text-sky-700 ring-1 ring-sky-200",
    description:
      "Reading comprehension on the SSAT rewards students who read with intention rather than passivity. I teach students to approach every passage using the 5 W's: Who is this about? What is happening? Where and when does it take place? And most critically — Why? What is the author's purpose? Students annotate actively with a pencil, underlining key words, circling transitional phrases, and noting topic shifts in the margin. This turns passive reading into an active conversation with the text.",
    strategies: [
      "The 5 W's framework: Who, What, Where, When, Why — applied to every passage",
      "Active annotation: underline key words, circle transitions, note the author's purpose",
      "Use transitional words (however, therefore, in contrast, as a result) as signposts for structure",
      "Three questions for every passage: What topics does the author address? What does the author say? What is the author's purpose?",
      "Evidence-based answer selection — return to the passage; eliminate answers not supported by the text",
    ],
  },
  {
    area: "Writing Sample",
    color: "bg-violet-50 border-violet-100",
    badge: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
    description:
      "The SSAT Writing Sample is unscored but sent directly to admissions offices, where it is read as a window into a student's voice, thinking, and command of written English. I help students understand that admissions readers are looking for a genuine, organized perspective — not perfection, but clarity and confidence. Students practice two types of prompts (creative and essay) and learn to spend the first three minutes outlining before writing.",
    strategies: [
      "Read the prompt carefully — choose the topic you have the most to say about, not the 'safer' one",
      "Spend 2–3 minutes outlining: one main idea, two or three supporting points, a strong opening line",
      "Open with something specific — a concrete image, a short anecdote, or a direct claim — rather than a vague generalization",
      "Vary sentence length and structure to demonstrate range; avoid repeating the same sentence pattern",
      "Reserve the last two minutes to re-read your first and last sentences for clarity",
    ],
  },
];

export default function SSATPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">SSAT Preparation</h1>
        <p className="mt-3 max-w-2xl text-zinc-500 leading-relaxed">
          An overview of how I prepare students for the Secondary School Admission
          Test — my instructional approach, section-by-section strategies, and
          the skills students develop along the way.
        </p>
      </header>

      {/* What is the SSAT */}
      <section className="mb-12 rounded-2xl border border-zinc-200 p-6">
        <h2 className="font-semibold mb-3">About the SSAT</h2>
        <p className="text-sm text-zinc-600 leading-relaxed mb-4">
          The Secondary School Admission Test (SSAT) is used by independent and
          private schools to evaluate applicants in grades 3–11. It is offered at
          three levels — Elementary, Middle, and Upper — and tests four areas:
          Verbal reasoning (synonyms and analogies), Quantitative (math),
          Reading comprehension, and an unscored Writing Sample that is sent
          directly to applying schools. I specialize in the verbal and reading
          sections, where targeted strategy work produces rapid and measurable gains.
        </p>
        <div className="grid gap-3 sm:grid-cols-4 mt-6">
          {["Verbal", "Quantitative", "Reading", "Writing"].map((s) => (
            <div
              key={s}
              className="rounded-xl bg-zinc-50 border border-zinc-100 px-4 py-3 text-sm font-medium text-zinc-700 text-center"
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* Prep Approach */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">My Prep Approach</h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          I begin with a diagnostic session to identify which sections and question
          types need the most attention, then build a targeted plan from there. Every
          session combines direct instruction of a specific strategy, immediate
          practice with authentic test materials, and structured reflection — students
          don&apos;t just get questions right or wrong; they understand <em>why</em>,
          which is what allows improvement to stick.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          I use Miss Ard&apos;s Critical Reading Strategies and Miss Ard&apos;s Synonyms
          and Analogies Tips — materials I developed specifically for this population — along
          with authentic Middle Level practice passages and vocabulary resources including
          Greek/Latin root charts and spaced-repetition vocabulary sets. Students also
          complete full timed sections as the test approaches to build stamina and
          time-management confidence.
        </p>
      </section>

      {/* Section-by-section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Section-by-Section</h2>
        <div className="space-y-6">
          {sections.map(({ area, color, badge, description, strategies }) => (
            <div
              key={area}
              className={`rounded-2xl border p-6 ${color}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${badge}`}>
                  {area}
                </span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                {description}
              </p>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-2">
                  Key Strategies
                </p>
                <ul className="space-y-1.5">
                  {strategies.map((s, i) => (
                    <li key={i} className="flex gap-2 text-sm text-zinc-600">
                      <span className="text-zinc-300 mt-0.5">›</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Outcomes */}
      <section className="rounded-2xl border border-zinc-200 p-6">
        <h2 className="font-semibold mb-3">Student Outcomes</h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Students who work with me consistently report greater confidence approaching
          unfamiliar vocabulary and feeling less overwhelmed by reading passages under
          time pressure. The strategy-first approach — giving students repeatable frameworks
          rather than just drilling questions — means the gains carry through to test day
          even for passages they have never seen before.
        </p>
      </section>
    </div>
  );
}
