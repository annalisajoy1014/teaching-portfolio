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
    <div className="border-b border-zinc-100 bg-zinc-50">
      <div className="mx-auto max-w-4xl px-6 py-3 flex gap-2">
        {tabs.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              pathname === href
                ? "bg-zinc-900 text-white"
                : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
