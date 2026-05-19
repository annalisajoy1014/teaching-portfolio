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
    <div className="mx-auto max-w-[960px] px-6" style={{ paddingTop: 96, paddingBottom: 120 }}>
      <header style={{ marginBottom: 80 }}>
        <p className="eyebrow mb-8">References &amp; Reviews</p>
        <h1
          className="font-display"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, marginBottom: 20 }}
        >
          What colleagues say about <em className="accent">working together.</em>
        </h1>
        <p style={{ maxWidth: 520, color: "var(--muted)", fontSize: 17, lineHeight: 1.65, letterSpacing: "-0.005em" }}>
          Evaluations and letters of recommendation from supervisors, colleagues,
          and professional contacts who have observed my teaching firsthand.
        </p>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--hair)" }}>
        {references.map(
          ({ name, title, institution, context, wouldWorkAgain, rating, pullQuote, strengths, improvement, remarks, closing }) => (
            <article key={name} style={{ background: "var(--bg)" }}>

              {/* Header row */}
              <div
                style={{
                  padding: "28px 32px",
                  borderBottom: "1px solid var(--hair)",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <div>
                  <h2
                    className="font-display"
                    style={{ fontSize: 22, color: "var(--ink)", marginBottom: 4 }}
                  >
                    {name}
                  </h2>
                  <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 2 }}>{title}</p>
                  <p style={{ fontSize: 13, color: "var(--faint)" }}>{institution}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: 999,
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      border: "1px solid var(--hair)",
                    }}
                  >
                    {context}
                  </span>
                  {wouldWorkAgain && (
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: 999,
                        fontSize: 11,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--purple)",
                        border: "1px solid rgba(167,139,250,0.3)",
                      }}
                    >
                      Would work together again
                    </span>
                  )}
                  {rating && (
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: 999,
                        fontSize: 11,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--ink)",
                        border: "1px solid rgba(245,245,245,0.15)",
                      }}
                    >
                      {rating}
                    </span>
                  )}
                </div>
              </div>

              {/* Pull quote */}
              <div style={{ padding: "28px 32px", borderBottom: "1px solid var(--hair)" }}>
                <blockquote
                  style={{
                    paddingLeft: 20,
                    borderLeft: "2px solid var(--purple)",
                    margin: 0,
                  }}
                >
                  <p
                    className="font-display"
                    style={{
                      fontSize: 18,
                      fontStyle: "italic",
                      color: "var(--ink)",
                      lineHeight: 1.6,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    &ldquo;{pullQuote}&rdquo;
                  </p>
                </blockquote>
              </div>

              {/* Strengths */}
              <div style={{ padding: "24px 32px", borderBottom: "1px solid var(--hair)" }}>
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--faint)",
                    marginBottom: 14,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Key Strengths
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {strengths.map((s, i) => (
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

              {/* Areas for growth — conditional */}
              {improvement && (
                <div
                  style={{
                    padding: "20px 32px",
                    borderBottom: "1px solid var(--hair)",
                    background: "var(--bg-raised)",
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--faint)",
                      marginBottom: 10,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    Areas for Growth
                  </p>
                  <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, fontStyle: "italic" }}>
                    {improvement}
                  </p>
                </div>
              )}

              {/* Full remarks */}
              <div style={{ padding: "24px 32px" }}>
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--faint)",
                    marginBottom: 14,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  Full Remarks
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {remarks.map((para, i) => (
                    <p key={i} style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, letterSpacing: "-0.005em" }}>
                      {para}
                    </p>
                  ))}
                  <p style={{ fontSize: 13, color: "var(--faint)", paddingTop: 8 }}>— {closing}</p>
                </div>
              </div>

            </article>
          )
        )}
      </div>
    </div>
  );
}
