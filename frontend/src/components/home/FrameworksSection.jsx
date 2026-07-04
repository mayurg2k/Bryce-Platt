import React from "react";
import { frameworks } from "../../mock";
import { Link } from "react-router-dom";
import { ArrowUpRight, LayoutGrid } from "lucide-react";

export default function FrameworksSection() {
  return (
    <section className="paper-dark py-24 lg:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="eyebrow text-[#B7C3D5] mb-4">Section III · Framework Library</div>
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.02] editorial-heading text-[#F6F1E7]">
              Visual models that <em className="italic font-light">simplify</em> complex systems.
            </h2>
          </div>
          <p className="lg:col-span-4 text-[#B7C3D5] leading-relaxed">
            Practical mental models used across executive briefings, industry reports, and conference keynotes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((f) => (
            <Link
              to="/frameworks"
              key={f.id}
              className="group relative border border-[#1e3556] p-8 hover:border-[#F6F1E7] transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono-editorial text-xs text-[#8697b3]">{f.number}</span>
                <LayoutGrid className="w-5 h-5 text-[#8697b3] group-hover:text-[#F6F1E7] transition-colors" />
              </div>
              <h3 className="font-serif text-2xl lg:text-[26px] mt-8 leading-snug text-[#F6F1E7]">
                {f.title}
              </h3>
              <p className="mt-4 text-sm text-[#B7C3D5] leading-relaxed">{f.summary}</p>
              <div className="mt-8 pt-6 border-t border-[#1e3556] flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 border border-[#1e3556] text-[#B7C3D5]">{t}</span>
                  ))}
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#B7C3D5] group-hover:text-[#F6F1E7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/frameworks" className="inline-flex items-center gap-2 border border-[#F6F1E7] px-7 py-4 text-sm tracking-wide text-[#F6F1E7] hover:bg-[#F6F1E7] hover:text-[#0B1C33] transition-colors">
            View Full Framework Library <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
