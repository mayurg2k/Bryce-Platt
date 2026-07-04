import React from "react";

export default function PullQuote() {
  return (
    <section className="py-20 lg:py-28 border-y border-[#D8CFBE] paper-alt">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
        <div className="eyebrow mb-8">Editorial Note</div>
        <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.08] ink italic font-light">
          &ldquo;Healthcare decisions are driven by <span className="not-italic font-normal">incentives</span>. Everything else is downstream.&rdquo;
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="hairline w-16" />
          <span className="font-mono-editorial text-xs ink-muted">BRYCE PLATT, PHARMD</span>
          <span className="hairline w-16" />
        </div>
      </div>
    </section>
  );
}
