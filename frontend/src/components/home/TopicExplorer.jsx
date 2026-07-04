import React from "react";
import { topics } from "../../mock";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function TopicExplorer() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="eyebrow mb-4">Section II · Topic Explorer</div>
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.02] ink editorial-heading">
              Browse healthcare by <em className="italic font-light">subject</em>, not by date.
            </h2>
          </div>
          <p className="lg:col-span-4 ink-muted leading-relaxed">
            A knowledge library organized around the topics that matter most to healthcare leaders, consultants, and policymakers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#D8CFBE]">
          {topics.map((t, i) => (
            <Link
              to="/insights"
              key={t.name}
              className="group border-r border-b border-[#D8CFBE] p-8 lg:p-10 hover:bg-[#0B1C33] hover:text-[#F6F1E7] transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono-editorial text-xs opacity-70">{String(i + 1).padStart(2, "0")}</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl mt-6 leading-tight">{t.name}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-80">{t.description}</p>
              <div className="mt-6 pt-6 border-t border-current/20 flex items-center justify-between text-xs">
                <span className="font-mono-editorial opacity-70">{t.count} articles</span>
                <span className="eyebrow opacity-90 group-hover:opacity-100">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
