import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recommendations · Teaching Portfolio",
};

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

export default function RecommendationsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-14">
        <h1 className="text-4xl font-bold tracking-tight">Recommendations</h1>
        <p className="mt-4 max-w-xl text-zinc-500 leading-relaxed">
          Letters of recommendation from colleagues, supervisors, and professional
          contacts who have observed my teaching firsthand.
        </p>
      </header>

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
    </div>
  );
}
