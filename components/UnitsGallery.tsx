"use client";

import { useState } from "react";
import Image from "next/image";

export type Unit = {
  course: string;
  courseColor: string;
  title: string;
  duration: string;
  essentialQuestions: string[];
  objectives: string[];
  skills: string;
  scaffoldsFrom?: string;
  scaffoldsTo?: string;
  heroImage?: string;
  heroAlt?: string;
  gallery?: { src: string; alt: string; caption?: string }[];
};

export type GroupedCourse = {
  course: string;
  color: string;
  units: Unit[];
};

/* Course label colors mapped to dark-palette badges */
const BADGE: Record<string, { bg: string; text: string; ring: string }> = {
  "AP Literature":    { bg: "rgba(167,139,250,0.12)", text: "#a78bfa",  ring: "rgba(167,139,250,0.25)" },
  "AP Language":      { bg: "rgba(96,165,250,0.10)",  text: "#60a5fa",  ring: "rgba(96,165,250,0.22)"  },
  "Honors Literature":{ bg: "rgba(251,113,133,0.10)", text: "#fb7185",  ring: "rgba(251,113,133,0.22)" },
  "8th Grade English":{ bg: "rgba(52,211,153,0.10)",  text: "#34d399",  ring: "rgba(52,211,153,0.22)"  },
  "SSAT Prep":        { bg: "rgba(251,191,36,0.10)",  text: "#fbbf24",  ring: "rgba(251,191,36,0.22)"  },
};

function CourseBadge({ course }: { course: string }) {
  const c = BADGE[course] ?? { bg: "rgba(255,255,255,0.06)", text: "var(--muted)", ring: "rgba(255,255,255,0.12)" };
  return (
    <span
      style={{
        display: "inline-block",
        background: c.bg,
        color: c.text,
        border: `1px solid ${c.ring}`,
        borderRadius: 999,
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontWeight: 500,
        padding: "3px 10px",
      }}
    >
      {course}
    </span>
  );
}

export default function UnitsGallery({ grouped }: { grouped: GroupedCourse[] }) {
  const [openUnit, setOpenUnit] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
      {grouped.map(({ course, units }) => (
        <section key={course}>
          {/* Course header */}
          <div
            className="flex items-center gap-3 mb-6"
          >
            <CourseBadge course={course} />
            <span style={{ fontSize: 13, color: "var(--faint)" }}>
              {units.length} unit{units.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Timeline spine */}
          <div className="relative">
            <div
              className="absolute left-4 top-0 bottom-0 hidden sm:block"
              style={{ width: 1, background: "var(--hair)" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {units.map((unit) => {
                const isOpen = openUnit === unit.title;
                return (
                  <div key={unit.title} className="sm:pl-12 relative">
                    {/* Timeline dot */}
                    <div
                      className="absolute hidden sm:block"
                      style={{
                        left: 11,
                        top: 22,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        border: "1.5px solid var(--faint)",
                        background: isOpen ? "var(--purple)" : "var(--bg)",
                        transition: "background 180ms ease",
                      }}
                    />

                    <div
                      style={{
                        borderRadius: 2,
                        border: `1px solid ${isOpen ? "rgba(255,255,255,0.14)" : "var(--hair)"}`,
                        overflow: "hidden",
                        transition: "border-color 180ms ease",
                        background: "var(--bg)",
                      }}
                    >
                      {/* Collapsed header */}
                      <button
                        onClick={() => setOpenUnit(isOpen ? null : unit.title)}
                        className="w-full text-left"
                        aria-expanded={isOpen}
                        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      >
                        <div style={{ display: "flex", alignItems: "stretch" }}>
                          {unit.heroImage && (
                            <div
                              className="relative shrink-0 hidden sm:block"
                              style={{ width: 128, background: "var(--bg-raised)" }}
                            >
                              <Image
                                src={unit.heroImage}
                                alt={unit.heroAlt ?? unit.title}
                                fill
                                className="object-cover"
                                sizes="128px"
                              />
                            </div>
                          )}
                          <div
                            style={{
                              flex: 1,
                              padding: "18px 20px",
                              display: "flex",
                              alignItems: "flex-start",
                              justifyContent: "space-between",
                              gap: 16,
                            }}
                          >
                            <div style={{ minWidth: 0 }}>
                              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 4 }}>
                                <h3
                                  className="font-display"
                                  style={{ fontSize: 17, color: "var(--ink)", lineHeight: 1.3 }}
                                >
                                  {unit.title}
                                </h3>
                                <span style={{ fontSize: 12, color: "var(--faint)", whiteSpace: "nowrap" }}>
                                  {unit.duration}
                                </span>
                              </div>
                              <p
                                style={{
                                  fontSize: 14,
                                  color: "var(--muted)",
                                  lineHeight: 1.55,
                                  overflow: "hidden",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                }}
                              >
                                {unit.essentialQuestions[0]}
                              </p>
                            </div>
                            <span
                              style={{
                                color: "var(--faint)",
                                transition: "transform 200ms ease",
                                transform: isOpen ? "rotate(180deg)" : "none",
                                flexShrink: 0,
                                marginTop: 2,
                              }}
                            >
                              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 10.414L2.293 4.707 1 6l7 7 7-7-1.293-1.293L8 10.414z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </button>

                      {/* Expanded panel */}
                      {isOpen && (
                        <div style={{ borderTop: "1px solid var(--hair)" }}>
                          {/* Hero image */}
                          {unit.heroImage && (
                            <div className="relative w-full" style={{ height: 220 }}>
                              <Image
                                src={unit.heroImage}
                                alt={unit.heroAlt ?? unit.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 896px) 100vw, 896px"
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)",
                                }}
                              />
                              <div style={{ position: "absolute", bottom: 0, left: 0, padding: "24px" }}>
                                <h3
                                  className="font-display"
                                  style={{ fontSize: 22, color: "var(--ink)", lineHeight: 1.15 }}
                                >
                                  {unit.title}
                                </h3>
                                <p style={{ fontSize: 13, color: "rgba(245,245,245,0.55)", marginTop: 4 }}>
                                  {unit.duration}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Details grid */}
                          <div
                            style={{
                              padding: "28px 24px",
                              display: "grid",
                              gap: 28,
                              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                            }}
                          >
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
                                Essential Questions
                              </p>
                              <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                {unit.essentialQuestions.map((q, i) => (
                                  <li
                                    key={i}
                                    style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}
                                  >
                                    {q}
                                  </li>
                                ))}
                              </ul>
                            </div>

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
                                Learning Objectives
                              </p>
                              <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                {unit.objectives.map((o, i) => (
                                  <li
                                    key={i}
                                    style={{
                                      display: "flex",
                                      gap: 8,
                                      fontSize: 14,
                                      color: "var(--muted)",
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    <span style={{ color: "var(--faint)", flexShrink: 0, marginTop: 2 }}>›</span>
                                    {o}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Skills + scaffolding row */}
                          <div
                            style={{
                              padding: "16px 24px",
                              borderTop: "1px solid var(--hair)",
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "8px 24px",
                              fontSize: 13,
                              color: "var(--faint)",
                            }}
                          >
                            <span>
                              <span style={{ color: "var(--muted)", fontWeight: 500 }}>Skills: </span>
                              {unit.skills}
                            </span>
                            {unit.scaffoldsFrom && (
                              <span>← Builds on: {unit.scaffoldsFrom}</span>
                            )}
                            {unit.scaffoldsTo && (
                              <span>→ Leads to: {unit.scaffoldsTo}</span>
                            )}
                          </div>

                          {/* Gallery */}
                          {unit.gallery && unit.gallery.length > 0 && (
                            <div style={{ padding: "20px 24px", borderTop: "1px solid var(--hair)" }}>
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
                                Teaching Materials
                              </p>
                              <div
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                                  gap: 8,
                                }}
                              >
                                {unit.gallery.map(({ src, alt, caption }, i) => (
                                  <div
                                    key={i}
                                    style={{
                                      position: "relative",
                                      aspectRatio: "4/3",
                                      overflow: "hidden",
                                      background: "var(--bg-raised)",
                                      borderRadius: 2,
                                    }}
                                  >
                                    <Image
                                      src={src}
                                      alt={alt}
                                      fill
                                      className="object-cover"
                                      sizes="(max-width: 640px) 50vw, 25vw"
                                      style={{ transition: "transform 300ms ease" }}
                                      onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = "scale(1.04)")}
                                      onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = "scale(1)")}
                                    />
                                    {caption && (
                                      <div
                                        style={{
                                          position: "absolute",
                                          bottom: 0,
                                          left: 0,
                                          right: 0,
                                          background: "rgba(10,10,10,0.75)",
                                          padding: "6px 8px",
                                        }}
                                      >
                                        <p style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1.3 }}>
                                          {caption}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
