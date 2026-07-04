import React from "react";
import { Link } from "react-router-dom";
import { timeline, values } from "../mock";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <div>
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="eyebrow mb-4">About · The Story Behind the Insights</div>
          <h1 className="font-serif text-5xl lg:text-8xl leading-[0.98] ink editorial-heading max-w-4xl">
            From community pharmacy to <em className="italic font-light">national thought leadership</em>.
          </h1>
          <p className="mt-10 max-w-3xl text-lg lg:text-xl ink-muted leading-relaxed">
            Bryce&rsquo;s career has been dedicated to understanding — and explaining — the systems that shape patient access, affordability, and healthcare economics.
          </p>
        </div>
      </section>

      <section className="paper-alt border-y border-[#D8CFBE] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="eyebrow mb-8">Career Timeline</div>
          <div className="space-y-0 divide-y divide-[#D8CFBE] border-y border-[#D8CFBE]">
            {timeline.map((t) => (
              <div key={t.year} className="grid lg:grid-cols-12 py-8 gap-6 items-baseline">
                <div className="lg:col-span-2 font-mono-editorial text-sm ink">{t.year}</div>
                <div className="lg:col-span-4 font-serif text-2xl ink">{t.label}</div>
                <div className="lg:col-span-6 ink-muted">{t.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="eyebrow mb-4">Mission</div>
          <p className="font-serif text-3xl lg:text-5xl leading-[1.1] ink editorial-heading max-w-4xl">
            To make the economics of U.S. healthcare understandable — so leaders can make better decisions that improve affordability, access, and long-term sustainability.
          </p>
        </div>
      </section>

      <section className="paper-alt border-y border-[#D8CFBE] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="eyebrow mb-8">Core Values</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="border border-[#D8CFBE] bg-[#F6F1E7] p-8">
                <div className="font-mono-editorial text-xs ink-muted">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-serif text-2xl mt-4 ink">{v.title}</h3>
                <p className="mt-3 text-sm ink-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-wrap gap-4">
          <Link to="/newsletter" className="inline-flex items-center gap-2 bg-[#0B1C33] text-[#F6F1E7] px-7 py-4 text-sm hover:bg-[#132a4a]">
            Subscribe to the Newsletter <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link to="/speaking" className="inline-flex items-center gap-2 border border-[#0B1C33] px-7 py-4 text-sm ink hover:bg-[#0B1C33] hover:text-[#F6F1E7]">
            Speaking & Executive Education
          </Link>
        </div>
      </section>
    </div>
  );
}
