import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "References & Reviews · Teaching Portfolio",
};

type Reference = {
  name: string;
  title: string;
  institution: string;
  context: string;
  wouldWorkAgain: boolean;
  rating?: string;
  pullQuote: string;
  strengths: string[];
  improvement?: string;
  remarks: string[];
  closing: string;
};

const references: Reference[] = [
  {
    name: "Candace Baldwin",
    title: "Supervisor",
    institution: "Professional evaluation",
    context: "Supervisor",
    wouldWorkAgain: true,
    rating: "5 / 5 across all 11 categories",
    pullQuote:
      "I would work with Annalisa again in a heartbeat. Any student is lucky to have her as a teacher. She has thrived in so many different teaching environments and made each of them a great experience. She is a treasure.",
    strengths: [
      "Brings organization and creativity together to build an interesting and engaging learning environment",
      "Identifies opportunities for optimization and thinks outside the box to make learning more effective",
      "Connects with both students and staff to ensure the needs of everyone are being met",
    ],
    improvement:
      "It is hard for her to accept that some parents or organizations do not want the optimal level of learning but rather the lowest amount of effort. In these cases it is difficult for her to adapt to a lower standard.",
    remarks: [
      "I would work with Annalisa again in a heartbeat. Any student is lucky to have her as a teacher. She has thrived in so many different teaching environments and made each of them a great experience. She is a treasure.",
    ],
    closing: "Candace Baldwin · Supervisor",
  },
  {
    name: "Devin Sundry",
    title: "Co-worker",
    institution: "10+ years working together",
    context: "Colleague",
    wouldWorkAgain: true,
    rating: "5 / 5 across all 11 categories",
    pullQuote:
      "Annalisa is easily the best coworker I have ever had the pleasure of working with. If you want someone who can manage any situation in the classroom no matter how big, she is the one you want.",
    strengths: [
      "Subject knowledge — her command of English Language Arts is exceptional, and she is constantly seeking new ways to deepen and expand it",
      "Organizational skills — her ability to manage time and resources, prioritize responsibilities, and achieve goals is second to none; where a system does not exist, she builds one",
      "Dedication — she is always available to any student who wants to learn or needs guidance, and that same commitment extends to her colleagues",
    ],
    improvement:
      "Work/life balance. Annalisa gives as much time to her work as it requires, often grading into the night and on weekends. She is driven to stay as far ahead as possible — a strength that occasionally comes at a personal cost.",
    remarks: [
      "Annalisa is easily the best coworker I have ever had the pleasure of working with. I would happily work with her in any capacity. She is knowledgeable, supportive, and dedicated to her role. Anyone who knows her — including past students — would say the same.",
      "If you want someone who can manage any situation in the classroom, no matter how large, she is the one you want. She is an incredible teacher and someone any school would be fortunate to have on staff. I can never say enough about the strength of her work ethic or the impact she has on students, on the school, and on every organization she is a part of.",
    ],
    closing: "Devin Sundry · Co-worker, 10+ years",
  },
  {
    name: "Mrs. Ramphai Chomchub",
    title: "Head of Foreign Language Department",
    institution: "Phayaophitthayakhom School, Phayao, Thailand",
    context: "Direct supervisor — Thailand",
    wouldWorkAgain: true,
    pullQuote:
      "Ms. Ard is an exemplary English teacher with strong work ethics. She is adept at handling the issues involved in cross-cultural communications and I consider her to be a very competent individual in educational technologies, teaching methodology, language assessment, and lesson design.",
    strengths: [
      "Expert command of teaching methodology, language assessment, educational technology, and lesson design across all levels",
      "Led students to competitive excellence — coached teams for regional English Competitions (Multi-Skill genre) and the Student Excellence Fair",
      "Developed original ESL materials from books, academic journals, magazines, and newspapers, and led extracurricular programs including English Reading Club, English Camps, and Grammar Studies for Gifted Students",
    ],
    remarks: [
      "I have enjoyed getting to know Ms. Ard in my capacity as Head of Foreign Language Departments at Phayaophitthayakhom School. I have found her to be committed and hard-working, and a true asset to our department.",
      "Ms. Ard commands an open, accessible personality and is adept at handling the issues involved in cross-cultural communications as well as affairs at a professional level. Under her supervision, students wrote essays and journals, gave oral presentations, and debated on a large number of topics. She taught at levels 1 through 5 and actively participated in extracurricular activities throughout her tenure.",
      "I have no doubt that Ms. Ard will be a productive contributor to the work of any institution. As a conscientious, honest, and open-minded person, she will also be a valuable member of any team.",
    ],
    closing: "Mrs. Ramphai Chomchub · Head of Foreign Language Department · Phayaophitthayakhom School",
  },
  {
    name: "Dr. Gabrielle Goetze, DVM",
    title: "Doctor of Veterinary Medicine",
    institution: "Personal & professional acquaintance, 6+ years",
    context: "Personal & professional reference",
    wouldWorkAgain: true,
    pullQuote:
      "What is most impressive is her passion for teaching and the joy she gets from sharing her zeal for learning with others. It is truly inspiring to see her help those around her achieve more than they ever thought possible.",
    strengths: [
      "Exceptional work ethic, diligence, and ambition — consistently driven in the pursuit of credentials, experience, and professional growth",
      "Remarkable initiative — pursued overseas teaching across multiple countries, demonstrating uncommon commitment and resolve",
      "A contagious passion for learning that inspires students and colleagues to surpass their own expectations",
    ],
    remarks: [
      "It is my pleasure to offer my unreserved recommendation of Annalisa Ard. I have known Annalisa for over six years in both a professional and personal capacity and have been consistently impressed with her strong work ethic, diligence, and ambition.",
      "One example that stands out is the passion and dedication with which she pursued her goal to travel overseas and experience new peoples and cultures. It takes unusual initiative to embark on such a path, and considerable commitment and resolve to make living overseas sustainable.",
      "What is most impressive, however, is her passion for teaching, and the joy she gets from sharing her zeal for learning with others. It is truly inspiring to see her help those around her achieve more than they ever thought possible. Annalisa would be an asset to any school.",
    ],
    closing: "Dr. Gabrielle Goetze, DVM",
  },
  {
    name: "Joyce Wainscott",
    title: "Personal Reference",
    institution: "Lifelong acquaintance",
    context: "Personal reference",
    wouldWorkAgain: true,
    pullQuote:
      "She has a devotion to preparation with a goal to provide superior learning experiences for her students, and a work ethic consistent with the high standards she sets for herself and others.",
    strengths: [
      "Unwavering focus on excellence — brings the same high standards to every task she undertakes",
      "Deep devotion to preparation, consistently working to provide superior learning experiences for every student",
      "Ambitious and imaginative problem solver who finds creative approaches to holding student attention and interest",
    ],
    remarks: [
      "I am writing to recommend Annalisa Ard for a teaching position and to attest to the many attributes she would bring to that role. I have known Annalisa all of her adult life and have watched her develop into a person focused on bringing excellence to every assigned task.",
      "She has a devotion to preparation with a goal to provide superior learning experiences for her students, and a work ethic consistent with the high standards she sets for herself and others. I believe you will find Annalisa to be ambitious in her pursuit of the best methods for holding the attention and interest of her students, and an excellent and imaginative problem solver.",
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
          Evaluations and letters of recommendation from supervisors, colleagues,
          and professional contacts who have observed my teaching firsthand.
        </p>
      </header>

      <div className="space-y-10">
        {references.map(
          ({ name, title, institution, context, wouldWorkAgain, rating, pullQuote, strengths, improvement, remarks, closing }) => (
            <article key={name} className="rounded-2xl border border-zinc-200 overflow-hidden">

              {/* Header */}
              <div className="bg-zinc-50 border-b border-zinc-100 px-8 py-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-zinc-900">{name}</p>
                  <p className="text-sm text-zinc-500 mt-0.5">{title}</p>
                  <p className="text-sm text-zinc-400">{institution}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  <span className="rounded-full bg-white border border-zinc-200 px-3 py-1 text-xs text-zinc-500 font-medium">
                    {context}
                  </span>
                  {wouldWorkAgain && (
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs text-emerald-700 font-medium">
                      Would work together again
                    </span>
                  )}
                  {rating && (
                    <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-white font-medium">
                      {rating}
                    </span>
                  )}
                </div>
              </div>

              {/* Pull quote */}
              <div className="px-8 py-6 border-b border-zinc-100">
                <blockquote className="pl-5 border-l-2 border-zinc-300">
                  <p className="text-zinc-700 leading-relaxed italic text-sm sm:text-base">
                    &ldquo;{pullQuote}&rdquo;
                  </p>
                </blockquote>
              </div>

              {/* Strengths */}
              <div className="px-8 py-6 border-b border-zinc-100">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-3">
                  Key Strengths
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

              {/* Areas for growth — only shown when provided */}
              {improvement && (
                <div className="px-8 py-5 border-b border-zinc-100 bg-zinc-50">
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-2">
                    Areas for Growth
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed italic">{improvement}</p>
                </div>
              )}

              {/* Full remarks */}
              <div className="px-8 py-6 space-y-4">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-1">
                  Full Remarks
                </p>
                {remarks.map((para, i) => (
                  <p key={i} className="text-sm text-zinc-600 leading-relaxed">
                    {para}
                  </p>
                ))}
                <p className="text-sm text-zinc-400 pt-2">— {closing}</p>
              </div>

            </article>
          )
        )}
      </div>
    </div>
  );
}
