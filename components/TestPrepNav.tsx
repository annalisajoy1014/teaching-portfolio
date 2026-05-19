"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/test-prep/ap", label: "AP Classes" },
  { href: "/test-prep/ssat", label: "SSAT" },
];

export default function TestPrepNav() {
  const pathname = usePathname();

  return (
    <div
      style={{
        borderBottom: "1px solid var(--hair)",
        background: "var(--bg)",
      }}
    >
      <div
        className="mx-auto max-w-[960px] px-6 flex gap-2"
        style={{ paddingTop: 14, paddingBottom: 14 }}
      >
        {tabs.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: pathname === href ? 500 : 400,
              letterSpacing: "-0.005em",
              textDecoration: "none",
              transition: "color 180ms ease, border-color 180ms ease, background 180ms ease",
              ...(pathname === href
                ? {
                    background: "var(--ink)",
                    color: "var(--bg)",
                    border: "1px solid transparent",
                  }
                : {
                    background: "transparent",
                    color: "var(--muted)",
                    border: "1px solid var(--hair)",
                  }),
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
