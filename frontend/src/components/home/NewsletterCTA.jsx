import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("bp_subscribed", "1");
    toast({ title: "Subscribed.", description: "Your first brief will arrive Monday." });
    setEmail("");
  };

  return (
    <section className="paper-dark py-24 lg:py-32">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
        <div className="eyebrow text-[#B7C3D5]">The Drug Channels Brief</div>
        <h2 className="font-serif text-4xl lg:text-7xl leading-[1.02] mt-6 text-[#F6F1E7] editorial-heading">
          Never miss an <em className="italic font-light">insight</em>.
        </h2>
        <p className="mt-6 text-[#B7C3D5] text-lg leading-relaxed max-w-2xl mx-auto">
          Healthcare evolves every day. Receive concise, practical analysis that helps you understand the economics behind the headlines.
        </p>
        <form onSubmit={submit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@work-email.com"
            className="flex-1 bg-transparent border border-[#3a4d6b] focus:border-[#F6F1E7] outline-none px-5 py-4 text-sm text-[#F6F1E7] placeholder:text-[#7a8aa3]"
            required
          />
          <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#F6F1E7] text-[#0B1C33] px-7 py-4 text-sm tracking-wide hover:bg-white transition-colors">
            Subscribe <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#8697b3] font-mono-editorial flex-wrap">
          <span>37,000+ readers</span>
          <span>·</span>
          <span>Weekly, 5–10 minute read</span>
          <span>·</span>
          <span>Evidence first</span>
        </div>
      </div>
    </section>
  );
}
