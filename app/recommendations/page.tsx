import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "References & Reviews · Teaching Portfolio",
};

const ratingCategories = [
  "Time management",
  "Creativity",
  "Adherence to organization/school standards",
  "Openness to constructive criticism",
  "Communicates effectively",
  "Maintains effective relationships with students and parents",
  "Maintains effective relationships with peers and staff",
  "Works well in a team environment",
  "Perseveres through challenges and faces change with enthusiasm",
  "Energized when challenged",
  "Work Ethic",
];

const reviews = [
  {
    name: "Candace Baldwin",
    relationship: "Supervisor",
    wouldWorkAgain: true,
    comment:
      "I would work with Annalisa again in a heartbeat. Any student is lucky to have her as a teacher! She has thrived in so many different teaching environments and made each of them a great experience. She is a treasure!",
    strengths: [
      "Bringing organization and creativity together to create an interesting and engaging learning environment",
      "Seeing places for optimization and thinking outside the box to make learning more effective",
      "Connecting with both students and staff to make sure the needs of everyone are being met",
    ],
    improvement:
      "It is hard for her to accept that some parents or organizations do not want the optimal level of learning but rather the lowest amount of effort. In these cases it is difficult for her to adapt to a lower standard of learning.",
    concerns: false,
  },
  {
    name: "Devin Sundry",
    relationship: "Co-worker (10+ years)",
    wouldWorkAgain: true,
    comment:
      "Annalisa is easily the best coworker I have ever had the pleasure of working with. I would happily work with her in any capacity. She is knowledgeable, supportive and dedicated to her role. Anyone who knows her or has ever worked with her, including past students, would say the same thing. If you want someone who can manage any situation in the classroom no matter how big, she is the one you want. She is an incredible teacher and someone anyone would want on staff.",
    strengths: [
      "Subject Knowledge — not only does she know her subject matter as close to perfect as humanly possible, but she is always striving to learn more about it, constantly seeking new ways to improve",
      "Organizational Skills — her ability to effectively manage time and resources, prioritize responsibilities, and achieve goals is second to none; if a system doesn't exist, she creates one",
      "Dedication to her classroom — she is always there for anyone who wants to learn, needs guidance, or just a little extra time, and that mindset extends to her colleagues as well",
    ],
    improvement:
      "Work/Life Balance. Annalisa is someone who puts as much time into work as is needed. I have seen her grade into the night and on weekends to stay on top of her responsibilities. She prioritizes work and is driven to stay as far ahead as possible.",
    concerns: false,
  },
];

const letters = [
  {
    name: "Mrs. Ramphai Chomchub",
    title: "Head of Foreign Language Department",
    institution: "Phayaophitthayakhom School, Phayao, Thailand",
    context: "Professional — direct supervisor in Thailand",
    pullQuote:
      "Ms. Ard is an exemplary English teacher with strong work ethics. She commands an open, accessible personality, and she is adept at handling the issues involved in cross-cultural communications as well as affairs at a professional level.",
    body: [
      "I am writing you on behalf of Ms. Annalisa Ard. I have enjoyed getting to know Ms. Ard in my capacity as Head of Foreign Language Departments at Phayaophitthayakhom School. I have found her to be committed and hard-working, and a true asset to our department.",
      "Ms. Ard is an exemplary English teacher with strong work ethics. She commands an open, accessible personality, and she is adept at handling the issues involved in cross-cultural communications as well as affairs at a professional level. I consider Ms. Ard to be a very competent individual, and especially in such fields as educational technologies, teaching methodology, language assessment, testing, and lesson design.",
      "Ms. Ard was in charge of training students to compete in regional English Competitions under the Multi-Skill genre. She also headed the training of students who entered into a Student's Excellence Fair competition. She developed ESL teaching materials from a broad range of sources — books, academic journals, magazines, and newspapers. Under her supervision, students wrote essays and journals, gave oral presentations, and debated on a large number of topics. She taught at levels 1 through 5, and actively participated in extra-curricular activities such as English Reading Club, English Camps, and Grammar Studies for Gifted Students.",
      "I have no doubt that in view of her qualifications and experience, Ms. Ard will be a productive contributor to the work of any institution. As a conscientious, honest, and open-minded person, she will also be a valuable member of a team of colleagues.",
    ],
    closing: "Mrs. Ramphai Chomchub · Head of Foreign Language Department · Phayaophitthayakhom School",
  },
  {
    name: "Dr. Gabrielle Goetze, DVM",
    title: "Doctor of Veterinary Medicine",
    institution: "Personal & Professional Acquaintance (6+ years)",
    context: "Personal & professional — known Annalisa 6+ years",
    pullQuote:
      "What is most impressive is her passion for teaching, and the joy she gets from sharing her zeal for learning with others. It's truly inspiring to see her help those around her achieve more than they ever thought possible and spread the contagious curiosity to always learn more about the world around her.",
    body: [
      "It's my pleasure to offer my unreserved recommendation of Annalisa Ard. I have known Annalisa for over six years in both a professional and personal capacity and have been consistently impressed with her strong work ethic, diligence, and ambition.",
      "One example that stands out to me is the passion and dedication with which she pursued her goal to travel overseas and experience new peoples and cultures. It takes unusual initiative to embark on such a path, and considerable commitment and resolve to make living overseas sustainable.",
      "Annalisa has always had a passion for teaching, and I have watched with interest as she has pursued further education and a career in this area. You will see from her transcripts and professional recommendations that she has been exceedingly driven in her attainment of credentials, experiences, and higher education. What is most impressive, however, is her passion for teaching, and the joy she gets from sharing her zeal for learning with others. It's truly inspiring to see her help those around her achieve more than they ever thought possible and spread the contagious curiosity to always learn more about the world around her.",
      "Annalisa would be an asset to any school. Her passion for teaching, initiative, and dedication make her an excellent candidate.",
    ],
    closing: "Dr. Gabrielle Goetze, DVM",
  },
  {
    name: "Joyce Wainscott",
    title: "Personal Reference",
    institution: "Lifelong acquaintance",
    context: "Personal — known Annalisa her entire adult life",
    pullQuote:
      "She has a devotion to preparation with a goal to provide superior learning experiences for her students and a work ethic consistent with the high standards she sets for herself and others.",
    body: [
      "I am writing to recommend Annalisa Ard as a candidate for employment in a teaching position and to attest to the many attributes she would bring to that position. I have known Annalisa all of her adult life and have watched her develop into a person focused on bringing excellence to assigned tasks.",
      "She has a devotion to preparation with a goal to provide superior learning experiences for her students and a work ethic consistent with the high standards she sets for herself and others. She has a devotion to solid educational achievement in her teaching that attests to her dedication and skills as an educator.",
      "I believe you will find Annalisa to be ambitious in her pursuit of the best method of holding the attention and interest of her students and an excellent and imaginative problem solver.",
    ],
    closing: "Joyce Wainscott",
  },
];

export default function ReferencesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-14">
        <h1 className="text-4xl font-bold tracking-tight">References & Reviews</h1>
        <p className="mt-4 max-w-xl text-zinc-500 leading-relaxed">
          Structured evaluations and letters of recommendation from supervisors,
          colleagues, and professional contacts who have observed my teaching firsthand.
        </p>
      </header>

      {/* Structured Reviews */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Peer & Supervisor Evaluations</h2>
        <div className="space-y-10">
          {reviews.map(({ name, relationship, wouldWorkAgain, comment, strengths, improvement, concerns }) => (
            <article key={name} className="rounded-2xl border border-zinc-200 overflow-hidden">
              {/* Header */}
              <div className="bg-zinc-50 border-b border-zinc-100 px-8 py-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-zinc-900">{name}</p>
                  <p className="text-sm text-zinc-500 mt-0.5">{relationship}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {wouldWorkAgain && (
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs text-emerald-700 font-medium">
                      Would work together again
                    </span>
                  )}
                  {!concerns && (
                    <span className="rounded-full bg-white border border-zinc-200 px-3 py-1 text-xs text-zinc-500 font-medium">
                      No concerns working with children
                    </span>
                  )}
                </div>
              </div>

              {/* Ratings */}
              <div className="px-8 py-6 border-b border-zinc-100">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-4">
                  Performance Ratings <span className="normal-case font-normal">(1 Unsatisfactory → 5 Exceptional)</span>
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {ratingCategories.map((cat) => (
                    <div key={cat} className="flex items-center justify-between gap-4">
                      <span className="text-sm text-zinc-600">{cat}</span>
                      <div className="flex gap-0.5 shrink-0">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <span
                            key={n}
                            className="w-4 h-4 rounded-sm bg-zinc-900"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-zinc-400">
                  All {ratingCategories.length} categories rated <span className="font-medium text-zinc-600">5 — Exceptional</span>
                </p>
              </div>

              {/* Strengths */}
              <div className="px-8 py-6 border-b border-zinc-100">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-3">
                  3 Greatest Strengths
                </p>
                <ul className="space-y-2">
                  {strengths.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                      <span className="text-zinc-300 mt-0.5 shrink-0">›</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas for improvement */}
              <div className="px-8 py-5 border-b border-zinc-100 bg-zinc-50">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-2">
                  Areas for Growth
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed italic">{improvement}</p>
              </div>

              {/* Comment */}
              <div className="px-8 py-6">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-3">
                  Additional Comments
                </p>
                <blockquote className="pl-5 border-l-2 border-zinc-300">
                  <p className="text-zinc-700 leading-relaxed italic text-sm sm:text-base">
                    &ldquo;{comment}&rdquo;
                  </p>
                </blockquote>
                <p className="mt-3 text-sm text-zinc-400">— {name}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Letters of Recommendation */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Letters of Recommendation</h2>
        <div className="space-y-12">
          {letters.map(({ name, title, institution, context, pullQuote, body, closing }) => (
            <article
              key={name}
              className="rounded-2xl border border-zinc-200 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-zinc-50 border-b border-zinc-100 px-8 py-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-zinc-900">{name}</p>
                  <p className="text-sm text-zinc-500 mt-0.5">{title}</p>
                  <p className="text-sm text-zinc-400">{institution}</p>
                </div>
                <span className="rounded-full bg-white border border-zinc-200 px-3 py-1 text-xs text-zinc-500 font-medium whitespace-nowrap">
                  {context}
                </span>
              </div>

              {/* Pull quote */}
              <div className="px-8 py-6 border-b border-zinc-100 bg-white">
                <blockquote className="relative pl-5 border-l-2 border-zinc-300">
                  <p className="text-zinc-700 leading-relaxed italic text-sm sm:text-base">
                    &ldquo;{pullQuote}&rdquo;
                  </p>
                </blockquote>
              </div>

              {/* Full letter */}
              <div className="px-8 py-6 space-y-4">
                {body.map((para, i) => (
                  <p key={i} className="text-sm text-zinc-600 leading-relaxed">
                    {para}
                  </p>
                ))}
                <p className="text-sm text-zinc-400 pt-2">— {closing}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
