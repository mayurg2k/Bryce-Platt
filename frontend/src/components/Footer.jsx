import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("bp_subscribed", "1");
    toast({ title: "You're on the list.", description: "Confirmation sent to " + email });
    setEmail("");
  };

  return (
    <footer className="paper-dark mt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow text-[#B7C3D5]">The Drug Channels Brief</div>
            <h3 className="font-serif text-3xl lg:text-4xl mt-4 leading-tight">
              Insight, framework, and evidence — delivered weekly.
            </h3>
            <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@work-email.com"
                className="flex-1 bg-transparent border border-[#3a4d6b] focus:border-[#F6F1E7] outline-none px-4 py-3 text-sm text-[#F6F1E7] placeholder:text-[#7a8aa3]"
                required
              />
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#F6F1E7] text-[#0B1C33] px-6 py-3 text-sm tracking-wide hover:bg-white transition-colors">
                Subscribe <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-[#8697b3] mt-3">No spam. Unsubscribe anytime.</p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="eyebrow text-[#B7C3D5] mb-4">Explore</div>
              <ul className="space-y-3">
                <li><Link to="/insights" className="link-underline">Insights</Link></li>
                <li><Link to="/frameworks" className="link-underline">Frameworks</Link></li>
                <li><Link to="/research" className="link-underline">Research</Link></li>
                <li><Link to="/newsletter" className="link-underline">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow text-[#B7C3D5] mb-4">Bryce</div>
              <ul className="space-y-3">
                <li><Link to="/about" className="link-underline">About</Link></li>
                <li><Link to="/speaking" className="link-underline">Speaking</Link></li>
                <li><Link to="/contact" className="link-underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow text-[#B7C3D5] mb-4">Topics</div>
              <ul className="space-y-3">
                <li>Drug Channels</li>
                <li>PBMs</li>
                <li>Medicare</li>
                <li>Specialty Pharmacy</li>
              </ul>
            </div>
            <div>
              <div className="eyebrow text-[#B7C3D5] mb-4">Connect</div>
              <ul className="space-y-3">
                <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 link-underline"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
                <li><a href="mailto:hello@bryceplatt.com" className="inline-flex items-center gap-2 link-underline"><Mail className="w-4 h-4" /> Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1e3556] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#8697b3]">
          <div>© {new Date().getFullYear()} Bryce Platt, PharmD. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="font-mono-editorial">Vol. IX · Iss. 07</span>
            <span>Made with intention.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
