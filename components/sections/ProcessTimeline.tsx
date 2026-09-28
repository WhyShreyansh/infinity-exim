"use client";

import React from "react";
import { PROCESS_STEPS } from "@/data/services";
import { CheckCircle2 } from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F5EF] text-[#102A43] border-t border-[#D8C9B5]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
            COMMERCIAL WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] mt-2 tracking-tight">
            From source to shipment.
          </h2>
          <p className="text-base text-[#64748B] mt-4 leading-relaxed">
            We bring commodity sourcing and international trade coordination together under one roof — helping buyers move from a defined requirement to a commercially practical supply solution.
          </p>
        </div>

        {/* 5-Step Animated Process Flow Cards */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#D8C9B5]/60 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-[#FFFFFF] border border-[#D8C9B5]/60 hover:border-[#B87952] p-6 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#B87952] bg-[#F7F5EF] px-2.5 py-1 rounded border border-[#D8C9B5]/40">
                      STEP {step.step}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-[#D8C9B5] group-hover:text-[#B87952] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-[#102A43] mb-2 group-hover:text-[#B87952] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F7F5EF] text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider">
                  {idx === 0 && "01. BUYER SPEC"}
                  {idx === 1 && "02. FEASIBILITY"}
                  {idx === 2 && "03. AGREE TERMS"}
                  {idx === 3 && "04. PORT SUPERVISION"}
                  {idx === 4 && "05. DISPATCH"}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
