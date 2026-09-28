import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { ARTICLES_DATA } from "@/data/insights";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";

export const metadata = {
  title: "Insights & B2B Trade Knowledge | INFINITY EXIM",
  description:
    "Educational evergreen insights on commodity sourcing from India, salt procurement, logistics, and ocean freight coordination."
};

export default function InsightsPage() {
  return (
    <div className="space-y-0 bg-[#F7F5EF] text-[#102A43]">
      
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#102A43] text-[#F7F5EF] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
            TRADE INSIGHTS & KNOWLEDGE
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5EF] tracking-tight">
            Commercial trade insights.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Educational evergreen guides on commodity sourcing from India, specification management, logistics and freight requirements.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES_DATA.map((art) => (
              <div
                key={art.slug}
                className="bg-[#FFFFFF] border border-[#D8C9B5]/60 hover:border-[#B87952] p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#B87952] uppercase font-bold bg-[#F7F5EF] px-2.5 py-1 rounded border border-[#D8C9B5]/40">
                      {art.category}
                    </span>
                    <span className="text-[#94A3B8] flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#102A43] group-hover:text-[#B87952] transition-colors leading-snug">
                    <Link href={`/insights/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F7F5EF] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#94A3B8]">{art.date}</span>
                  <Link
                    href={`/insights/${art.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#B87952] group-hover:text-[#9A603C]"
                  >
                    <span>Read Guide</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <EnquiryCTA />
    </div>
  );
}
