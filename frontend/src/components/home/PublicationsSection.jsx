import React from "react";
import { publications } from "../../mock";
import { ArrowUpRight, BarChart3, Layers, Network } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

// LinkedIn-infographic style visual for each publication
function InfographicVisual({ variant, title }) {
  if (variant === 0) {
    // Stacked market share bars
    const bars = [
      { label: "CVS Caremark", pct: 34 },
      { label: "Express Scripts", pct: 26 },
      { label: "OptumRx", pct: 22 },
      { label: "All Others", pct: 18 },
    ];
    return (
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="eyebrow text-[#B7C3D5]">Figure 01 · Market Share</div>
          <BarChart3 className="w-4 h-4 text-[#B7C3D5]" />
        </div>
        <div className="space-y-3 mt-4">
          {bars.map((b, i) => (
            <div key={b.label}>
              <div className="flex justify-between text-[11px] text-[#F6F1E7]">
                <span className="font-mono-editorial opacity-80">{b.label}</span>
                <span className="font-mono-editorial">{b.pct}%</span>
              </div>
              <div className="h-2 mt-1 bg-[#1e3556]">
                <div className="h-full bg-[#F6F1E7]" style={{ width: `${b.pct}%`, transition: "width .8s ease" }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 font-serif text-[#F6F1E7] text-lg leading-tight">Top 3 PBMs control 82% of prescriptions.</div>
      </div>
    );
  }
  if (variant === 1) {
    // Nine cells grid
    return (
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="eyebrow ink-muted">Framework 02 · Typology</div>
          <Layers className="w-4 h-4 ink-muted" />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {["Health-System","Payer-Owned","Retail","Manufacturer","Independent","PBM-Owned","Hybrid","Nonprofit","340B"].map((t, i) => (
            <div key={t} className={`aspect-square flex items-center justify-center text-[10px] leading-tight text-center px-1 border ${i === 4 ? "bg-[#0B1C33] text-[#F6F1E7] border-[#0B1C33]" : "border-[#D8CFBE] ink"}`}>
              {t}
            </div>
          ))}
        </div>
        <div className="mt-4 font-serif ink text-lg leading-tight">Nine specialty pharmacy business models, one map.</div>
      </div>
    );
  }
  // Network / flow diagram
  return (
    <div className="p-6 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="eyebrow ink-muted">Figure 03 · Benefit Flow</div>
        <Network className="w-4 h-4 ink-muted" />
      </div>
      <svg viewBox="0 0 240 120" className="w-full mt-3">
        <g fill="none" stroke="#0B1C33" strokeWidth="1">
          <path d="M20 60 C 60 60, 60 20, 120 20 S 180 60, 220 60" />
          <path d="M20 60 C 60 60, 60 100, 120 100 S 180 60, 220 60" />
        </g>
        {[[20,60],[120,20],[120,100],[220,60]].map(([x,y],i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="7" fill="#F6F1E7" stroke="#0B1C33" strokeWidth="1.5" />
            <text x={x} y={y+3} textAnchor="middle" fontSize="7" fill="#0B1C33" fontFamily="JetBrains Mono, monospace">{["EMP","PBM","MFG","PT"][i]}</text>
          </g>
        ))}
      </svg>
      <div className="mt-2 font-serif ink text-lg leading-tight">How employer dollars actually reach patients.</div>
    </div>
  );
}

const variants = [0, 1, 2];
const variantBg = ["bg-[#0B1C33]", "paper-alt", "paper-alt"];

export default function PublicationsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-4">Section IV · Research & Publications</div>
              <h2 className="font-serif text-4xl lg:text-6xl leading-[1.02] ink editorial-heading">
                Original reports and industry-leading <em className="italic font-light">research</em>.
              </h2>
            </div>
            <p className="lg:col-span-4 ink-muted leading-relaxed">
              White papers, annual reports, and collaborative research exploring the economics of U.S. healthcare.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <Link to="/research" className="group block border border-[#D8CFBE] card-hover hover:border-[#0B1C33] hover:shadow-[0_30px_60px_-30px_rgba(11,28,51,0.35)]">
                <div className={`aspect-[4/3] ${variantBg[i % 3]} border-b border-[#D8CFBE] overflow-hidden`}>
                  <InfographicVisual variant={variants[i % 3]} title={p.title} />
                </div>
                <div className="p-6 paper">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="eyebrow ink">{p.outlet}</span>
                    <span className="font-mono-editorial ink-muted">{p.date}</span>
                  </div>
                  <h3 className="font-serif text-xl mt-3 ink leading-snug group-hover:opacity-80 transition-opacity">{p.title}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.slice(0,2).map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 border border-[#D8CFBE] ink-muted">{t}</span>
                      ))}
                    </div>
                    <ArrowUpRight className="w-4 h-4 ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
