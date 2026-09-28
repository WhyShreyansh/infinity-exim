import React, { Suspense } from "react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Loader2 } from "lucide-react";

export const metadata = {
  title: "Request a Quote | INFINITY EXIM",
  description:
    "Product, trade, logistics or freight — provide your sourcing requirement parameters to start a commercial conversation with INFINITY EXIM."
};

export default function RequestQuotePage() {
  return (
    <div className="space-y-0 bg-[#F7F5EF] text-[#102A43]">
      
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-[#102A43] text-[#F7F5EF] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
            COMMERCIAL ENQUIRY
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5EF] tracking-tight">
            Tell us what you need.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Product, trade, logistics or freight — give us enough context to start a useful commercial conversation.
          </p>

          <div className="pt-2 text-xs font-mono text-[#D8C9B5]">
            RESPONSE TIMEFRAME: WITHIN 24 COMMERCIAL HOURS
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-[#F7F5EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="p-12 text-center bg-white rounded-sm border border-[#D8C9B5] space-y-4">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#B87952]" />
                <p className="text-sm font-semibold text-[#102A43]">Loading Enquiry Form...</p>
              </div>
            }
          >
            <EnquiryForm />
          </Suspense>
        </div>
      </section>

    </div>
  );
}
