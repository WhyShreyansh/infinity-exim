import React from "react";
import Link from "next/link";
import { Globe, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { GlobalMap } from "@/components/map/GlobalMap";
import { GLOBAL_MARKETS, ORIGIN_POINT } from "@/data/markets";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";

export const metadata = {
  title: "Global Reach | International B2B Markets | INFINITY EXIM",
  description:
    "Based in Mundra, Gujarat, INFINITY EXIM connects Indian commodity sourcing with buyers across international destinations in Asia, the Middle East and Africa."
};

export default function GlobalReachPage() {
  return (
    <div className="space-y-0 bg-[#F7F5EF] text-[#102A43]">
      
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-[#102A43] text-[#F7F5EF] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
            GLOBAL REACH & MARKETS
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5EF] tracking-tight">
            India at the centre. <br />
            <span className="text-[#B87952]">Markets beyond borders.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Based in Mundra, Kutch, Gujarat, India, INFINITY EXIM is positioned around international B2B trade requirements and commodity sourcing.
          </p>

          <div className="pt-2 text-xs font-mono text-[#D8C9B5]">
            TRADE ROUTES FROM MUNDRA PORT, GUJARAT
          </div>
        </div>
      </section>

      {/* Main Copy & Interactive Map */}
      <section className="py-16 bg-[#FFFFFF] border-b border-[#D8C9B5]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43]">
              Connecting Indian Commodities with Global Demand
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              Our international focus connects Indian commodities with buyers and trade requirements across key target markets in the Middle East, Southeast Asia, and East Africa.
            </p>
          </div>

          {/* Interactive World Map Component */}
          <GlobalMap />

          {/* Market Destinations Grid */}
          <div className="pt-8">
            <h3 className="text-xl font-bold text-[#102A43] mb-6">
              Target Market Destinations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GLOBAL_MARKETS.map((mkt) => (
                <div
                  key={mkt.id}
                  className="bg-[#F7F5EF] border border-[#D8C9B5]/60 p-6 rounded-sm space-y-2 hover:border-[#B87952] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-[#102A43]">{mkt.country}</span>
                    <span className="text-[10px] font-mono text-[#B87952] uppercase bg-[#D8C9B5]/40 px-2 py-0.5 rounded">
                      {mkt.region}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#B87952] uppercase tracking-wider block">
                    {mkt.label}
                  </span>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {mkt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <EnquiryCTA />
    </div>
  );
}
