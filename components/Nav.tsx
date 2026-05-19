"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Overview" },
  { href: "/units", label: "Unit Overview" },
  { href: "/test-prep", label: "Test Prep" },
  { href: "/recommendations", label: "References" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--hair)",
      }}
    >
      <nav
        className="mx-auto flex max-w-[960px] items-center justify-between px-6"
        style={{ height: 64 }}
      >
        {/* Logo — italic Newsreader */}
        <Link
          href="/"
          className="font-display"
          style={{
            fontStyle: "italic",
            fontSize: 20,
            color: "var(--ink)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Annalisa Ard
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                style={{
                  fontSize: 13,
                  color: isActive(href) ? "var(--ink)" : "var(--muted)",
                  fontWeight: isActive(href) ? 500 : 400,
                  textDecoration: "none",
                  transition: "color 180ms ease",
                  letterSpacing: "-0.005em",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--ink)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = isActive(href)
                    ? "var(--ink)"
                    : "var(--muted)")
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="sm:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ color: "var(--muted)", background: "none", border: "none", cursor: "pointer", padding: "10px" }}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="1" y1="5" x2="17" y2="5" />
              <line x1="1" y1="9" x2="17" y2="9" />
              <line x1="1" y1="13" x2="17" y2="13" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul
          className="sm:hidden flex flex-col px-6 py-4 gap-4"
          style={{ borderTop: "1px solid var(--hair)" }}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 15,
                  color: isActive(href) ? "var(--ink)" : "var(--muted)",
                  fontWeight: isActive(href) ? 500 : 400,
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
