import React from "react";
import { Check, ShieldCheck, MapPin, Compass, Shuffle, Network } from "lucide-react";

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      title: "Requirement-Led",
      copy: "We start directly from what the international buyer needs — confirming specifications, grade, mesh size, and packaging prior to quotation.",
      icon: Compass
    },
    {
      title: "Multi-Category Sourcing",
      copy: "Work seamlessly across salt, industrial minerals (bentonite, silica sand, quartz), and agricultural staples (rice, groundnuts, spices).",
      icon: Shuffle
    },
    {
      title: "Trade + Logistics Integration",
      copy: "We connect commodity sourcing directly with export documentation, container stuffing alignment, and maritime freight coordination.",
      icon: Network
    },
    {
      title: "India-Based at Mundra Port",
      copy: "Located in Mundra, Kutch, Gujarat, India — operating adjacent to one of India's largest commercial port and shipping hubs.",
      icon: MapPin
    },
    {
      title: "International B2B Focus",
      copy: "Built specifically around cross-border international trade requirements with buyers across the Middle East, Asia, and Africa.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-[#102A43] text-[#F7F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Heading & Editorial Statement */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
              COMMERCIAL PRACTICALITY
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F7F5EF] tracking-tight leading-tight">
              Why international trade partners work with INFINITY EXIM.
            </h2>

            <p className="text-base text-[#94A3B8] leading-relaxed">
              We focus on clarity, feasibility, and reliable commercial execution rather than inflated promises. Every sourcing enquiry is handled with commercial practicality.
            </p>

            <div className="p-6 bg-[#1E3A5F]/50 border-l-4 border-[#B87952] rounded-r-sm space-y-2">
              <span className="text-xs font-mono text-[#D8C9B5] font-bold uppercase tracking-wider block">
                OUR POSITIONING STATEMENT
              </span>
              <p className="text-sm italic text-[#F7F5EF]">
                &ldquo;Connecting international buyers with commodities sourced from India, backed by practical export, logistics and freight coordination.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column Grid of 5 Clear Reasons */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className={`bg-[#1E3A5F]/30 border border-[#1E3A5F] p-6 rounded-sm hover:border-[#D8C9B5]/40 transition-colors ${
                    idx === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="w-9 h-9 rounded-sm bg-[#102A43] border border-[#B87952]/40 flex items-center justify-center text-[#B87952] mb-4">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F7F5EF] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
