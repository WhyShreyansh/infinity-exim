import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { IMPORTANT_PRODUCT_DISCLAIMER } from "@/data/products";

export const metadata = {
  title: "Terms & Conditions | INFINITY EXIM",
  description: "Terms and Conditions for INFINITY EXIM B2B international trade website."
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#F7F5EF] text-[#102A43]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link
          href="/"
          className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#B87952] hover:text-[#9A603C]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="border-b border-[#D8C9B5] pb-6 space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
            LEGAL DOCUMENTATION
          </span>
          <h1 className="text-4xl font-black text-[#102A43]">Terms & Conditions</h1>
          <p className="text-xs font-mono text-[#64748B]">Last updated: September 2026</p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#D8C9B5]/60 p-8 sm:p-12 rounded-sm space-y-6 text-sm text-[#64748B] leading-relaxed">
          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-900 text-xs font-mono">
            <strong>NOTICE FOR BUSINESS REVIEW:</strong> These Terms govern website usage and commercial enquiry submissions. Please review and tailor with your legal counsel prior to formal publication.
          </div>

          <h2 className="text-lg font-bold text-[#102A43]">1. Commercial Disclaimer & Specifications</h2>
          <p className="font-semibold text-[#102A43]">
            {IMPORTANT_PRODUCT_DISCLAIMER}
          </p>
          <p>
            Information, product listings, descriptions, and categories presented on this website serve informational purposes to facilitate B2B commercial enquiries. Binding commercial obligations, grade guarantees, pricing, and shipment schedules are established solely through formal written contracts signed by authorized representatives of INFINITY EXIM.
          </p>

          <h2 className="text-lg font-bold text-[#102A43]">2. Operational Proximity & Positioning</h2>
          <p>
            INFINITY EXIM operates from Mundra, Kutch, Gujarat, India, providing export-import support, commodity sourcing, logistics, and freight coordination. Reference to international destination markets indicates trade routes and target buyer markets, not physical office facilities unless explicitly specified in writing.
          </p>

          <h2 className="text-lg font-bold text-[#102A43]">3. Intellectual Property</h2>
          <p>
            All branding, design elements, visual assets, text content, and graphics published on this website are protected under copyright and trademark laws.
          </p>

          <h2 className="text-lg font-bold text-[#102A43]">4. Contact & Inquiries</h2>
          <p>
            For commercial contract inquiries or official correspondence: <br />
            <strong>Email:</strong> {COMPANY_DATA.email} <br />
            <strong>Location:</strong> Mundra, Kutch, Gujarat, India
          </p>
        </div>

      </div>
    </div>
  );
}
