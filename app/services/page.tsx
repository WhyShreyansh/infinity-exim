import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Globe2, Anchor, Layers, FileText } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";

export const metadata = {
  title: "Export, Import, Logistics & Freight Services | INFINITY EXIM",
  description:
    "Export-import services, logistics support and freight coordination for requirement-led B2B business based in Mundra, Gujarat."
};

export default function ServicesPage() {
  return (
    <div className="space-y-0 bg-[#F7F5EF] text-[#102A43]">
      
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-[#102A43] text-[#F7F5EF] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
            COMMERCIAL SERVICES
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5EF] tracking-tight">
            Trade support that connects the pieces.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Export-import services, logistics support and freight coordination for requirement-led B2B business.
          </p>

          <div className="pt-2 text-xs font-mono text-[#D8C9B5]">
            MUNDRA PORT OPERATIONAL COORDINATION
          </div>
        </div>
      </section>

      {/* Major 3 Service Sections */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#D8C9B5]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 ${
                idx < SERVICES_DATA.length - 1 ? "border-b border-[#D8C9B5]/40" : ""
              }`}
            >
              {/* Service Info Left */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-black font-mono text-[#B87952]">
                    SERVICE {service.number}
                  </span>
                  <span className="h-px w-12 bg-[#D8C9B5]" />
                </div>

                <h2 className="text-3xl font-bold text-[#102A43]">
                  {service.title}
                </h2>

                <p className="text-base text-[#64748B] leading-relaxed">
                  {service.fullCopy}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#102A43] block">
                    KEY SCOPE & CAPABILITIES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center space-x-2 text-xs text-[#102A43]">
                        <CheckCircle2 className="w-4 h-4 text-[#B87952] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={service.ctaHref}
                    className="inline-flex items-center space-x-2 bg-[#102A43] hover:bg-[#1E3A5F] text-[#F7F5EF] px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D8C9B5]" />
                  </Link>
                </div>
              </div>

              {/* Service Visual Box Right */}
              <div className="lg:col-span-5 bg-[#F7F5EF] border border-[#D8C9B5] p-8 rounded-sm space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B87952] block font-bold">
                  {service.title.toUpperCase()} SUMMARY
                </span>
                <p className="text-sm font-semibold text-[#102A43]">
                  &ldquo;{service.shortCopy}&rdquo;
                </p>
                <div className="p-4 bg-[#FFFFFF] border border-[#D8C9B5]/60 text-xs text-[#64748B] space-y-1">
                  <span className="font-mono text-[#102A43] font-bold block">OPERATIONAL SCOPE:</span>
                  <span>Handled around commercial requirement, destination port, and buyer specifications.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Visual Story Timeline */}
      <ProcessTimeline />

      <EnquiryCTA />
    </div>
  );
}
