import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, MapPin, Building2, Shield, Compass, Network, Scale } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";

export const metadata = {
  title: "About INFINITY EXIM | India-Based Global Trade Partner",
  description:
    "INFINITY EXIM is a Mundra, Gujarat-based B2B business working across commodity sourcing, export-import services, logistics support and freight requirements."
};

export default function AboutPage() {
  const approaches = [
    {
      title: "Requirement-led",
      desc: "Start with what the buyer actually needs. Specifications, grade, packaging, and commercial terms are verified upfront.",
      icon: Compass
    },
    {
      title: "Connected",
      desc: "Bring sourcing, trade documentation, port handling, and freight conversations together into a cohesive workflow.",
      icon: Network
    },
    {
      title: "Clear",
      desc: "Keep the commercial process straightforward, transparent, and strictly aligned with real operational capabilities.",
      icon: Scale
    },
    {
      title: "International",
      desc: "Built around cross-border B2B requirements from India for buyers across international destination markets.",
      icon: Shield
    }
  ];

  const visualFlow = [
    { step: "01", label: "REQUIREMENT", copy: "Buyer defines target specs & delivery volume." },
    { step: "02", label: "SOURCE", copy: "Commodity sourced against defined parameters." },
    { step: "03", label: "DISCUSS", copy: "Commercial terms, packaging & shipping schedules aligned." },
    { step: "04", label: "COORDINATE", copy: "Port loading & custom documentation supervised from Mundra." },
    { step: "05", label: "SHIP", copy: "Vessel dispatch to international destination port." }
  ];

  return (
    <div className="space-y-0 bg-[#F7F5EF] text-[#102A43]">
      
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-[#102A43] text-[#F7F5EF] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
            ABOUT INFINITY EXIM
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5EF] tracking-tight leading-tight">
            Built around trade. <br />
            <span className="text-[#B87952]">Driven by clarity.</span>
          </h1>

          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            INFINITY EXIM is a Mundra, Gujarat-based B2B business working across commodity sourcing, export-import services, logistics support and freight requirements.
          </p>

          <div className="pt-4 flex items-center space-x-2 text-xs font-mono text-[#D8C9B5]">
            <MapPin className="w-4 h-4 text-[#B87952]" />
            <span>OPERATIONAL BASE: MUNDRA, KUTCH, GUJARAT, INDIA</span>
          </div>
        </div>
      </section>

      {/* Main Positioning Section */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#D8C9B5]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
              COMMERCIAL POSITIONING
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
              A practical partner for international business.
            </h2>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              INFINITY EXIM provides export-import services, logistics support and freight services, while sourcing commodities including salt, minerals and agricultural products.
            </p>

            <p className="text-sm text-[#64748B] leading-relaxed">
              We position ourselves as a modern, reliable trade bridge connecting international buyers with Indian commodities. By prioritizing clear communication, specification alignment, and port coordination from Mundra, we help our commercial partners execute cross-border transactions efficiently.
            </p>
          </div>

          {/* 4 Pillars of Approach */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((app) => {
              const IconComp = app.icon;
              return (
                <div
                  key={app.title}
                  className="bg-[#F7F5EF] border border-[#D8C9B5]/60 p-6 rounded-sm space-y-3 hover:border-[#B87952] transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#102A43] text-[#B87952] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#102A43]">{app.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{app.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Timeline Section */}
      <section className="py-20 bg-[#F7F5EF] text-[#102A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
              OPERATIONAL TIMELINE
            </span>
            <h2 className="text-3xl font-extrabold text-[#102A43]">
              The Sourcing & Trade Workflow
            </h2>
            <p className="text-sm text-[#64748B]">
              Subtle, structured coordination moving from requirement definition to vessel departure.
            </p>
          </div>

          {/* Vertical/Horizontal Flow Visual */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {visualFlow.map((flow, i) => (
              <div
                key={flow.step}
                className="bg-[#FFFFFF] border border-[#D8C9B5]/80 p-6 rounded-sm shadow-sm space-y-3 relative group hover:border-[#B87952] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#B87952]">
                    {flow.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8]">STAGE</span>
                </div>
                <h3 className="text-sm font-bold text-[#102A43] tracking-wide">
                  {flow.label}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {flow.copy}
                </p>
                {i < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#B87952] font-bold text-lg">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <EnquiryCTA />
    </div>
  );
}
