import Link from "next/link";
import Image from "next/image";
import CredentialsAccordion from "@/components/CredentialsAccordion";

const principles = [
  {
    index: "01",
    title: "Lifelong Learning",
    body: "I believe learning never stops — for students or teachers. I model curiosity in my classroom, continually seeking new approaches and bringing that energy to every lesson.",
  },
  {
    index: "02",
    title: "Habitual Reflection",
    body: "Growth requires honest self-assessment. I build reflection into every unit through journals, rubrics, and structured feedback so students learn to evaluate their own progress.",
  },
  {
    index: "03",
    title: "Proactive Improvement",
    body: "Identifying a gap is only the first step. I teach students to act on their reflections — setting specific goals and tracking their own development over time.",
  },
  {
    index: "04",
    title: "Student-Centered Practice",
    body: "Every learner is unique. I personalize instruction through differentiated tasks, targeted feedback, and genuine relationships that motivate students to take ownership of their learning.",
  },
];


export default function OverviewPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[960px] px-6" style={{ paddingTop: 96, paddingBottom: 120 }}>
        <div className="grid gap-16 sm:grid-cols-[1.2fr_1fr] items-start">

          {/* Left: name + bio + pills */}
          <div>
            <p className="eyebrow mb-8">Teaching Portfolio</p>

            <h1
              className="font-display"
              style={{ fontSize: "clamp(52px, 7vw, 96px)", lineHeight: 0.96, marginBottom: 32 }}
            >
              Annalisa{" "}
              <em className="accent">Ard.</em>
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.65,
                color: "var(--muted)",
                maxWidth: 520,
                letterSpacing: "-0.005em",
                marginBottom: 16,
              }}
            >
              English Language Arts teacher with a passion for language, literature,
              and the transformative power of purposeful communication.
            </p>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--muted)",
                maxWidth: 520,
                letterSpacing: "-0.005em",
                marginBottom: 40,
              }}
            >
              My career has spanned two continents and four countries — from tutoring
              Spanish-speaking learners in California, to four years across all ages
              and levels in Thailand, to secondary ELA instruction in the US including
              AP Literature, AP Language, Honors Literature, and 8th Grade English.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/units" className="pill-primary">View My Units</Link>
            </div>
          </div>

          {/* Right: photo + definition list */}
          <div>
            <div
              className="relative w-full overflow-hidden mb-8"
              style={{
                aspectRatio: "4/5",
                borderRadius: 4,
                border: "1px solid var(--hair)",
                maxHeight: 360,
              }}
            >
              <Image
                src="/annalisa-ard.jpg"
                alt="Annalisa Ard"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Definition list of facts */}
            <dl>
              {[
                { label: "Subject Area", value: "English Language Arts" },
                { label: "Grade Levels", value: "8–12" },
                { label: "Specializations", value: "AP Lit · AP Lang · SSAT Prep" },
                { label: "International", value: "California · Cambodia · Thailand" },
              ].map(({ label, value }, i) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 py-3"
                  style={{ borderTop: i === 0 ? "none" : "1px solid var(--hair)" }}
                >
                  <dt
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </dt>
                  <dd
                    style={{
                      fontSize: 13,
                      color: "var(--ink)",
                      textAlign: "right",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Teaching Philosophy ───────────────────────────────────── */}
      <section
        className="mx-auto max-w-[960px] px-6"
        style={{ paddingTop: 120, paddingBottom: 120, borderTop: "1px solid var(--hair)" }}
      >
        <p className="eyebrow mb-8">Teaching Philosophy</p>

        <div className="grid sm:grid-cols-[1fr_1.2fr] gap-16 mb-16">
          <div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(32px, 4vw, 44px)", lineHeight: 1.05 }}
            >
              A practice built on <em className="accent">principles.</em>
            </h2>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.7, letterSpacing: "-0.005em" }}>
            <p style={{ marginBottom: 16 }}>
              My teaching philosophy is rooted in three interconnected principles: Lifelong
              Learning, Habitual Reflection, and Proactive Improvement. I believe that the
              best teachers are also avid learners — continuously questioning, refining, and
              expanding their practice in response to the students in front of them. As
              William Arthur Ward wrote, &ldquo;Curiosity is the wick in the candle of learning.&rdquo;
            </p>
            <p style={{ marginBottom: 16 }}>
              In practice, I draw on Communicative Language Teaching, Task-Based Language
              Learning, and Direct Method approaches. These frameworks share a commitment
              to authentic, purposeful communication — students learn by doing, discussing,
              writing, and engaging with real ideas.
            </p>
            <p>
              My years of international teaching across four countries have shaped my
              understanding of language acquisition, cultural responsiveness, and the
              courage it takes to communicate in an unfamiliar tongue.
            </p>
          </div>
        </div>

        {/* 2×2 card lattice */}
        <div className="lattice sm:grid-cols-2">
          {principles.map(({ index, title, body }) => (
            <div key={title} className="lattice-card">
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--purple)",
                  marginBottom: 16,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {index}
              </p>
              <h3
                className="font-display"
                style={{ fontSize: 22, marginBottom: 12, color: "var(--ink)" }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, letterSpacing: "-0.005em" }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Teaching Credentials ──────────────────────────────────── */}
      <section
        className="mx-auto max-w-[960px] px-6"
        style={{ paddingTop: 120, paddingBottom: 120, borderTop: "1px solid var(--hair)" }}
      >
        <p className="eyebrow mb-8">Teaching Credentials</p>

        <div className="grid sm:grid-cols-[1fr_1.2fr] gap-16 mb-16">
          <div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(32px, 4vw, 44px)", lineHeight: 1.05 }}
            >
              A career shaped by <em className="accent">experience.</em>
            </h2>
          </div>
          <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.7, letterSpacing: "-0.005em" }}>
            Formal academic preparation in English and TESOL, combined with practical
            classroom experience across multiple countries, grade levels, and instructional
            contexts — from language acquisition in EFL settings to AP-level literary
            analysis in US secondary schools.
          </p>
        </div>

        <CredentialsAccordion />
      </section>
    </>
  );
}
