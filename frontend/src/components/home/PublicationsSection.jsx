import React from "react";
import { publications } from "../../mock";
import { FileText, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PublicationsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
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

        <div className="divide-y divide-[#D8CFBE] border-y border-[#D8CFBE]">
          {publications.map((p, i) => (
            <Link to="/research" key={p.id} className="group grid lg:grid-cols-12 gap-6 py-10 hover:bg-[#EFE7D5] px-4 -mx-4 transition-colors">
              <div className="lg:col-span-1 font-mono-editorial text-xs ink-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="lg:col-span-2">
                <div className="eyebrow ink">{p.outlet}</div>
                <div className="font-mono-editorial text-xs ink-muted mt-2">{p.date}</div>
              </div>
              <div className="lg:col-span-7">
                <h3 className="font-serif text-2xl lg:text-3xl ink leading-tight group-hover:opacity-70 transition-opacity">{p.title}</h3>
                <p className="ink-muted mt-3 leading-relaxed">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 border border-[#D8CFBE] ink-muted">{t}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 flex lg:justify-end items-start">
                <div className="inline-flex items-center gap-2 ink">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm link-underline">Read</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
