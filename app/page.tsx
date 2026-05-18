import Link from "next/link";
import Image from "next/image";

const principles = [
  {
    title: "Lifelong Learning",
    body: "I believe learning never stops — for students or teachers. I model curiosity in my classroom, continually seeking new approaches and bringing that energy to every lesson.",
  },
  {
    title: "Habitual Reflection",
    body: "Growth requires honest self-assessment. I build reflection into every unit through journals, rubrics, and structured feedback so students learn to evaluate their own progress.",
  },
  {
    title: "Proactive Improvement",
    body: "Identifying a gap is only the first step. I teach students to act on their reflections — setting specific goals and tracking their own development over time.",
  },
  {
    title: "Student-Centered Practice",
    body: "Every learner is unique. I personalize instruction through differentiated tasks, targeted feedback, and genuine relationships that motivate students to take ownership of their learning.",
  },
];

const credentials = [
  { label: "Degree", value: "BA in English — California State University, San Bernardino" },
  { label: "Degree", value: "MA in TESOL — Vancouver Island University" },
  { label: "Certification", value: "TESOL Certificate — International TEFL Academy" },
  { label: "Experience", value: "English Language Arts, Grades 8–12 (US)" },
  { label: "Experience", value: "EFL Instructor — Thailand (4 years, all ages & levels)" },
  { label: "Experience", value: "EFL Instructor — Cambodia (TESOL practicum + young learners)" },
  { label: "Experience", value: "ESL Tutor — California (Spanish-speaking learners)" },
  { label: "Courses Taught", value: "AP Literature · AP Language · Honors Lit · 8th Grade English · SSAT Prep" },
];

export default function OverviewPage() {
  return (
    <>
      {/* Hero / Teaching Background */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="grid gap-12 sm:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
              Teaching Portfolio
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Annalisa Ard
            </h1>
            <p className="mt-3 text-lg text-zinc-500">
              English Language Arts Teacher
            </p>
            <p className="mt-6 text-zinc-600 leading-relaxed">
              I am an English Language Arts teacher with a passion for language, literature,
              and the transformative power of communication. With a BA in English, a TESOL
              certificate from International TEFL Academy, and an MA in TESOL from Vancouver
              Island University, I bring both academic depth and practical expertise to
              every classroom.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              My teaching career has spanned two continents and four countries — from tutoring
              Spanish-speaking learners in California, to working with young learners in Cambodia,
              to four years of instruction across all ages and proficiency levels in Thailand.
              I now teach English Language Arts in the US at the secondary level, including
              AP Literature, AP Language, Honors Literature, and 8th Grade English.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/units"
                className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                View My Units
              </Link>
              <Link
                href="/test-prep"
                className="rounded-full border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
              >
                Test Prep Work
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-56 h-56 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
              <Image
                src="/annalisa-ard.jpg"
                alt="Annalisa Ard"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="w-full space-y-3">
              {[
                { label: "Subject Area", value: "English Language Arts" },
                { label: "Grade Levels", value: "8–12" },
                { label: "Specializations", value: "AP Lit · AP Lang · SSAT" },
                { label: "Int'l Experience", value: "California · Cambodia · Thailand" },
                { label: "Email", value: "annalisa.joy1014@gmail.com" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-zinc-100 pb-3"
                >
                  <span className="text-sm font-medium text-zinc-400">{label}</span>
                  <span className="text-sm text-zinc-800 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-semibold mb-6">Teaching Philosophy</h2>
          <div className="max-w-2xl space-y-4 text-zinc-600 leading-relaxed mb-12">
            <p>
              My teaching philosophy is rooted in three interconnected principles: Lifelong
              Learning, Habitual Reflection, and Proactive Improvement. I believe that the
              best teachers are also avid learners — continuously questioning, refining, and
              expanding their practice in response to the students in front of them. As
              William Arthur Ward wrote, "Curiosity is the wick in the candle of learning,"
              and I strive to keep that flame alive in every classroom I enter.
            </p>
            <p>
              In practice, I draw on Communicative Language Teaching (CLT), Task-Based
              Language Learning, and Direct Method approaches. These frameworks share a
              commitment to authentic, purposeful communication — students learn by doing,
              discussing, writing, and engaging with real ideas. I personalize instruction
              by tailoring tasks to individual strengths and needs, using both formal and
              informal assessment to guide instruction, and building the kind of classroom
              culture where students feel safe to take risks with language.
            </p>
            <p>
              My years of international teaching — across four countries and two continents —
              have shaped my understanding of language acquisition, cultural responsiveness,
              and the courage it takes to communicate in an unfamiliar tongue. That experience
              informs how I approach every student: with patience, genuine curiosity about
              their perspective, and the conviction that growth is always possible when the
              conditions for learning are right.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Credentials */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl font-semibold mb-8">Teaching Credentials</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {credentials.map(({ label, value }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-zinc-50 px-5 py-4"
            >
              <span className="rounded-full bg-white border border-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-500 whitespace-nowrap mt-0.5">
                {label}
              </span>
              <span className="text-sm text-zinc-700">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-14 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-zinc-500 mb-4 text-sm">
            Explore the full portfolio or get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/units"
              className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-white"
            >
              Unit Overview
            </Link>
            <Link
              href="/test-prep"
              className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-white"
            >
              Test Prep
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
