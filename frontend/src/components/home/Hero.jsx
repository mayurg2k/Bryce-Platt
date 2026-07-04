import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8 fade-in">
            <div className="flex items-center gap-4 mb-8">
              <span className="eyebrow">Vol. IX · Digital Headquarters</span>
              <span className="hairline flex-1" />
              <span className="eyebrow">Est. 2021</span>
            </div>
            <h1 className="font-serif text-[46px] sm:text-[64px] lg:text-[92px] leading-[0.98] tracking-[-0.02em] ink">
              Understanding the <em className="italic font-light">economics</em> behind U.S. healthcare.
            </h1>
            <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-relaxed ink-muted">
              Helping healthcare leaders understand the financial incentives shaping pharmacy, Medicare, PBMs, specialty pharmacy, reimbursement, and healthcare policy — through practical frameworks and evidence-based analysis.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/newsletter" className="group inline-flex items-center gap-2 bg-[#0B1C33] text-[#F6F1E7] px-7 py-4 text-sm tracking-wide hover:bg-[#132a4a] transition-colors">
                Subscribe to the Newsletter
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link to="/insights" className="inline-flex items-center gap-2 border border-[#0B1C33] px-7 py-4 text-sm tracking-wide hover:bg-[#0B1C33] hover:text-[#F6F1E7] transition-colors">
                Explore Latest Insights
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODMyMDM5MDl8MA&ixlib=rb-4.1.0&q=85"
                alt="Bryce Platt, PharmD"
                className="w-full aspect-[3/4] object-cover grayscale-[15%] contrast-[1.05]"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#F6F1E7] border border-[#D8CFBE] p-5 max-w-[240px] shadow-sm">
                <div className="eyebrow mb-2">Portrait · 2025</div>
                <div className="font-serif text-lg leading-tight ink">Bryce Platt, PharmD</div>
                <div className="text-xs ink-muted mt-1">Director, Drug Channels Institute</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex items-center gap-4">
          <ArrowDown className="w-4 h-4 ink-muted animate-bounce" />
          <span className="eyebrow">Scroll to explore — Insights, Frameworks, Research</span>
        </div>
      </div>
    </section>
  );
}
