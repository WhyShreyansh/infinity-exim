import React from "react";
import Link from "next/link";
import { ArrowUpRight, Anchor, Globe2, Layers } from "lucide-react";

export const Pillars: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "Commodity Sourcing",
      description: "Salt, minerals and agricultural products sourced around defined B2B requirements.",
      cta: "Explore Commodities",
      href: "/commodities",
      icon: Layers
    },
    {
      num: "02",
      title: "Export & Import",
      description: "Support for international trade requirements and cross-border coordination.",
      cta: "Explore Services",
      href: "/services",
      icon: Globe2
    },
    {
      num: "03",
      title: "Logistics & Freight",
      description: "Coordination around cargo, destination and shipment requirements.",
      cta: "Discuss Logistics",
      href: "/request-a-quote?service=logistics",
      icon: Anchor
    }
  ];

  return (
    <section className="py-20 bg-[#102A43] text-[#F7F5EF] relative overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F7F5EF] mt-2 tracking-tight">
            Three pillars of international trade coordination.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group bg-[#1E3A5F]/40 border border-[#1E3A5F] hover:border-[#B87952] p-8 rounded-sm flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-black font-mono text-[#D8C9B5]">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#102A43] border border-[#D8C9B5]/30 flex items-center justify-center text-[#B87952]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#F7F5EF] mb-3 group-hover:text-[#D8C9B5] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1E3A5F]">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#B87952] group-hover:text-[#F7F5EF] transition-colors"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
