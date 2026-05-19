import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSAT Prep · Teaching Portfolio",
};

const sections = [
  {
    index: "01",
    area: "Verbal",
    description:
      "The Verbal section tests synonyms and analogies — both of which reward students who approach words analytically rather than just from memory. For synonyms, I teach the Three C's: Comprehension (do you know the word at all?), Context (can you use contextual clues?), and Connotation (is the word positive, negative, or neutral?). For analogies, I teach students to articulate the relationship as a complete sentence before looking at answer choices.",
    strategies: [
      "The Three C's: Comprehension → Context → Connotation",
      "Five analogy relationship types: synonyms/antonyms, intensity/degree, parts/wholes, examples/types, use/function",
      "Greek and Latin root study with prefix and suffix charts",
      "Process of elimination — use the relationship sentence to rule out choices immediately",
      "Timed practice from authentic Middle Level verbal sections",
    ],
  },
  {
    index: "02",
    area: "Reading",
    description:
      "Reading comprehension on the SSAT rewards students who read with intention rather than passivity. I teach students to approach every passage using the 5 W's: Who is this about? What is happening? Where and when does it take place? And most critically — Why? What is the author's purpose? Students annotate actively, underlining key words, circling transitional phrases, and noting topic shifts in the margin.",
    strategies: [
      "The 5 W's framework: Who, What, Where, When, Why — applied to every passage",
      "Active annotation: underline key words, circle transitions, note author's purpose",
      "Use transitional words as signposts for structural shifts",
      "Three questions per passage: What topics? What does the author say? What is the purpose?",
      "Evidence-based answer selection — return to the passage; eliminate unsupported answers",
    ],
  },
  {
    index: "03",
    area: "Writing Sample",
    description:
      "The SSAT Writing Sample is unscored but sent directly to admissions offices, where it is read as a window into a student's voice, thinking, and command of written English. I help students understand that admissions readers are looking for a genuine, organized perspective — not perfection, but clarity and confidence. Students practice both prompt types and learn to spend the first three minutes outlining before writing.",
    strategies: [
      "Choose the topic you have the most to say about, not the 'safer' one",
      "Spend 2–3 minutes outlining: one main idea, two or three supporting points, a strong opening line",
      "Open with something specific — a concrete image, a short anecdote, or a direct claim",
      "Vary sentence length and structure to demonstrate range",
      "Reserve the last two minutes to re-read your first and last sentences for clarity",
    ],
  },
];

export default function SSATPage() {
  return (
    <div className="mx-auto max-w-[960px] px-6" style={{ paddingTop: 80, paddingBottom: 120 }}>
      <header style={{ marginBottom: 56 }}>
        <p className="eyebrow mb-8">Test Prep</p>
        <h1
          className="font-display"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, marginBottom: 20 }}
        >
          SSAT preparation through <em className="accent">strategy.</em>
        </h1>
        <p style={{ maxWidth: 560, color: "var(--muted)", fontSize: 17, lineHeight: 1.65, letterSpacing: "-0.005em" }}>
          How I prepare students for the Secondary School Admission Test — my
          instructional approach, section-by-section strategies, and the skills
          students develop along the way.
        </p>
      </header>

      {/* About the SSAT */}
      <section
        style={{
          borderTop: "1px solid var(--hair)",
          paddingTop: 48,
          paddingBottom: 48,
          marginBottom: 48,
        }}
      >
        <div
          className="sm:grid sm:grid-cols-[1fr_1.2fr]"
          style={{ gap: 48, alignItems: "start" }}
        >
          <div>
            <p className="eyebrow mb-6">About the SSAT</p>
            <h2
              className="font-display"
              style={{ fontSize: 28, lineHeight: 1.1, color: "var(--ink)", marginBottom: 0 }}
            >
              Four sections. One <em className="accent">strategy.</em>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, letterSpacing: "-0.005em", marginBottom: 24 }}>
              The Secondary School Admission Test (SSAT) is used by independent and private
              schools to evaluate applicants in grades 3–11. It tests four areas: Verbal
              reasoning (synonyms and analogies), Quantitative (math), Reading comprehension,
              and an unscored Writing Sample sent directly to applying schools. I specialize
              in the verbal and reading sections, where targeted strategy work produces rapid,
              measurable gains.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--hair)" }}>
              {["Verbal", "Quantitative", "Reading", "Writing"].map((s) => (
                <div
                  key={s}
                  style={{
                    background: "var(--bg)",
                    padding: "12px 16px",
                    fontSize: 13,
                    color: "var(--muted)",
                    textAlign: "center",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My approach */}
      <section
        style={{ borderTop: "1px solid var(--hair)", paddingTop: 48, paddingBottom: 48 }}
      >
        <div
          className="sm:grid sm:grid-cols-[1fr_1.2fr]"
          style={{ gap: 48, alignItems: "start" }}
        >
          <div>
            <p className="eyebrow mb-6">My Approach</p>
            <h2
              className="font-display"
              style={{ fontSize: 28, lineHeight: 1.1, color: "var(--ink)" }}
            >
              Diagnostic-first, <em className="accent">strategy-led.</em>
            </h2>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, letterSpacing: "-0.005em" }}>
            <p style={{ marginBottom: 16 }}>
              I begin with a diagnostic session to identify which sections and question types
              need the most attention, then build a targeted plan from there. Every session
              combines direct instruction of a specific strategy, immediate practice with
              authentic test materials, and structured reflection.
            </p>
            <p>
              I use Miss Ard&apos;s Critical Reading Strategies and Miss Ard&apos;s Synonyms
              and Analogies Tips — materials I developed specifically for this population —
              along with authentic Middle Level practice passages, Greek/Latin root charts,
              and spaced-repetition vocabulary sets.
            </p>
          </div>
        </div>
      </section>

      {/* Section-by-section */}
      <section style={{ borderTop: "1px solid var(--hair)", paddingTop: 64 }}>
        <p className="eyebrow mb-12">Section-by-Section</p>

        {sections.map(({ index, area, description, strategies }) => (
          <div
            key={area}
            style={{
              borderTop: "1px solid var(--hair)",
              padding: "40px 0",
              display: "grid",
              gap: 32,
            }}
            className="sm:grid-cols-[180px_1fr]"
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  color: "var(--faint)",
                  textTransform: "uppercase",
                  marginBottom: 8,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {index}
              </p>
              <h3
                className="font-display"
                style={{ fontSize: 26, color: "var(--ink)" }}
              >
                {area}
              </h3>
            </div>

            <div>
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, letterSpacing: "-0.005em", marginBottom: 24 }}>
                {description}
              </p>
              <div>
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--faint)",
                    marginBottom: 12,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Key Strategies
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {strategies.map((s, i) => (
                    <li
                      key={i}
                      style={{ display: "flex", gap: 10, fontSize: 15, color: "var(--muted)", lineHeight: 1.6 }}
                    >
                      <span style={{ color: "var(--faint)", flexShrink: 0, marginTop: 2 }}>›</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Outcomes */}
        <div
          style={{
            borderTop: "1px solid var(--hair)",
            padding: "40px 0",
            display: "grid",
            gap: 32,
          }}
          className="sm:grid-cols-[180px_1fr]"
        >
          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "var(--faint)",
                textTransform: "uppercase",
                marginBottom: 8,
                fontFamily: "var(--font-sans)",
              }}
            >
              04
            </p>
            <h3
              className="font-display"
              style={{ fontSize: 26, color: "var(--ink)" }}
            >
              Outcomes
            </h3>
          </div>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, letterSpacing: "-0.005em" }}>
            Students who work with me consistently report greater confidence approaching
            unfamiliar vocabulary and feeling less overwhelmed by reading passages under
            time pressure. The strategy-first approach — giving students repeatable frameworks
            rather than just drilling questions — means the gains carry through to test day
            even for passages they have never seen before.
          </p>
        </div>
      </section>
    </div>
  );
}
