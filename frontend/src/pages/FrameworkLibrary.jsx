import React from "react";
import { frameworks } from "../mock";
import { LayoutGrid, ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function FrameworkLibrary() {
  return (
    <div>
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="eyebrow mb-4">Framework Library · Visual Models</div>
          <h1 className="font-serif text-5xl lg:text-8xl leading-[0.98] ink editorial-heading max-w-4xl">
            Frameworks that make healthcare <em className="italic font-light">understandable</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg ink-muted leading-relaxed">
            Practical mental models designed to simplify pharmacy economics, drug channels, and healthcare policy.
          </p>
        </div>
      </section>

      <section className="paper-alt border-y border-[#D8CFBE]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid md:grid-cols-2 gap-6">
            {frameworks.map((f) => (
              <div key={f.id} className="group bg-[#F6F1E7] border border-[#D8CFBE] p-10 hover:border-[#0B1C33] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono-editorial text-xs ink-muted">Framework {f.number}</span>
                  <LayoutGrid className="w-5 h-5 ink-muted" />
                </div>
                <h3 className="font-serif text-3xl mt-6 ink leading-tight">{f.title}</h3>
                <p className="mt-4 ink-muted leading-relaxed">{f.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 border border-[#D8CFBE] ink-muted">{t}</span>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-[#D8CFBE] flex items-center justify-between">
                  <Link to="/newsletter" className="inline-flex items-center gap-2 ink text-sm link-underline">
                    Read overview <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <button className="inline-flex items-center gap-2 ink-muted text-sm hover:ink">
                    <Download className="w-4 h-4" /> PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
