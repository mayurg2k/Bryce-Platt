import React from "react";
import { authorityStats } from "../../mock";

export default function AuthorityStrip() {
  return (
    <section className="paper-alt border-y border-[#D8CFBE]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {authorityStats.map((s) => (
            <div key={s.label} className="border-l border-[#0B1C33]/20 pl-5">
              <div className="font-serif text-4xl lg:text-5xl ink leading-none">{s.value}</div>
              <div className="mt-3 text-sm ink font-medium">{s.label}</div>
              <div className="text-xs ink-muted mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
