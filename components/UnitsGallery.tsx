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

export default function UnitsGallery({ grouped }: { grouped: GroupedCourse[] }) {
  const [openUnit, setOpenUnit] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      {grouped.map(({ course, color, units }) => (
        <section key={course}>
          <div className="flex items-center gap-3 mb-6">
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${color}`}>
              {course}
            </span>
            <span className="text-sm text-zinc-400">
              {units.length} unit{units.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-100 hidden sm:block" />

            <div className="space-y-4">
              {units.map((unit) => {
                const isOpen = openUnit === unit.title;
                return (
                  <div key={unit.title} className="sm:pl-12 relative">
                    <div className="absolute left-3 top-6 h-2.5 w-2.5 rounded-full border-2 border-zinc-300 bg-white hidden sm:block" />

                    <div
                      className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                        isOpen ? "border-zinc-300 shadow-sm" : "border-zinc-200"
                      }`}
                    >
                      {/* ── Collapsed header (always visible) ── */}
                      <button
                        onClick={() => setOpenUnit(isOpen ? null : unit.title)}
                        className="w-full text-left"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-stretch gap-0">
                          {/* Thumbnail */}
                          {unit.heroImage && (
                            <div className="relative w-28 sm:w-40 shrink-0 bg-zinc-100">
                              <Image
                                src={unit.heroImage}
                                alt={unit.heroAlt ?? unit.title}
                                fill
                                className="object-cover"
                                sizes="160px"
                              />
                            </div>
                          )}

                          {/* Preview text */}
                          <div className="flex-1 px-5 py-4 flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h3 className="font-semibold text-zinc-900 leading-snug text-sm sm:text-base">
                                  {unit.title}
                                </h3>
                                <span className="text-xs text-zinc-400 whitespace-nowrap">
                                  {unit.duration}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed line-clamp-2">
                                {unit.essentialQuestions[0]}
                              </p>
                            </div>
                            <span
                              className={`shrink-0 mt-0.5 text-zinc-400 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            >
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 10.414L2.293 4.707 1 6l7 7 7-7-1.293-1.293L8 10.414z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </button>

                      {/* ── Expanded panel ── */}
                      {isOpen && (
                        <div className="border-t border-zinc-100">
                          {/* Hero image */}
                          {unit.heroImage && (
                            <div className="relative h-52 sm:h-72 w-full">
                              <Image
                                src={unit.heroImage}
                                alt={unit.heroAlt ?? unit.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 896px) 100vw, 896px"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                              <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-white font-bold text-xl sm:text-2xl leading-snug drop-shadow">
                                  {unit.title}
                                </h3>
                                <p className="text-white/70 text-sm mt-1">{unit.duration}</p>
                              </div>
                            </div>
                          )}

                          {/* Details */}
                          <div className="p-6 grid gap-6 sm:grid-cols-2">
                            <div>
                              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-3">
                                Essential Questions
                              </p>
                              <ul className="space-y-2">
                                {unit.essentialQuestions.map((q, i) => (
                                  <li key={i} className="text-sm text-zinc-600 leading-relaxed">
                                    {q}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-3">
                                Learning Objectives
                              </p>
                              <ul className="space-y-2">
                                {unit.objectives.map((o, i) => (
                                  <li key={i} className="flex gap-2 text-sm text-zinc-600 leading-relaxed">
                                    <span className="text-zinc-300 mt-0.5 shrink-0">›</span>
                                    {o}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Skills + scaffolding */}
                          <div className="px-6 pb-5 pt-0 border-t border-zinc-100 flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-400">
                            <span>
                              <span className="font-medium text-zinc-500">Skills: </span>
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
                            <div className="px-6 pb-6 border-t border-zinc-100 pt-5">
                              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400 mb-3">
                                Teaching Materials & Resources
                              </p>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {unit.gallery.map(({ src, alt, caption }, i) => (
                                  <div key={i} className="group relative rounded-xl overflow-hidden bg-zinc-100 aspect-[4/3]">
                                    <Image
                                      src={src}
                                      alt={alt}
                                      fill
                                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                                      sizes="(max-width: 640px) 50vw, 30vw"
                                    />
                                    {caption && (
                                      <div className="absolute bottom-0 inset-x-0 bg-black/50 px-2 py-1.5">
                                        <p className="text-white text-xs leading-snug">{caption}</p>
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
