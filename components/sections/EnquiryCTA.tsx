import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MessageSquare } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const EnquiryCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F5EF] text-[#102A43] border-t border-[#D8C9B5]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102A43] text-[#F7F5EF] rounded-md p-8 sm:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Subtle Grid background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Left Text */}
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
              START A COMMERCIAL CONVERSATION
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-[#FFFFFF] tracking-tight leading-tight">
              Tell us what you need.
            </h2>

            <p className="text-base text-[#94A3B8] leading-relaxed">
              Product, trade support, logistics or ocean freight — give us enough context to start a useful commercial discussion for your business.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#D8C9B5] font-mono">
              <span className="flex items-center space-x-1.5">
                <Mail className="w-4 h-4 text-[#B87952]" />
                <span>{COMPANY_DATA.email}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Phone className="w-4 h-4 text-[#B87952]" />
                <span>{COMPANY_DATA.contacts[0].phone}</span>
              </span>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center space-x-3 bg-[#B87952] hover:bg-[#9A603C] text-[#F7F5EF] px-8 py-4 rounded-sm text-base font-bold tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <span>Start an Enquiry</span>
              <ArrowUpRight className="w-5 h-5 text-[#F7F5EF]" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-transparent hover:bg-[#1E3A5F] text-[#D8C9B5] border border-[#1E3A5F] hover:border-[#D8C9B5] px-6 py-4 rounded-sm text-sm font-semibold tracking-wide transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#B87952]" />
              <span>Contact Page</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
