import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function AboutTeaser() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxjb25mZXJlbmNlJTIwc3BlYWtlcnxlbnwwfHx8fDE3ODMyMDM5MDl8MA&ixlib=rb-4.1.0&q=85"
              alt="Bryce Platt speaking"
              className="w-full aspect-[4/5] object-cover grayscale-[10%]"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">Section VI · About</div>
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.02] ink editorial-heading">
              Meet Bryce <em className="italic font-light">Platt</em>.
            </h2>
            <p className="mt-8 ink-muted text-lg leading-relaxed max-w-2xl">
              Bryce is Director at Drug Channels Institute and one of the leading educators explaining the economics of pharmacy, reimbursement, and healthcare policy. His work helps executives, consultants, providers, researchers, and policymakers understand how incentives shape healthcare markets.
            </p>
            <p className="mt-4 ink-muted leading-relaxed max-w-2xl">
              He has published educational content every day for more than four consecutive years, cultivating one of the fastest-growing healthcare audiences on LinkedIn — not through personality, but through clarity.
            </p>
            <div className="mt-10">
              <Link to="/about" className="inline-flex items-center gap-2 border border-[#0B1C33] px-7 py-4 text-sm ink hover:bg-[#0B1C33] hover:text-[#F6F1E7] transition-colors">
                Read Full Biography <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
