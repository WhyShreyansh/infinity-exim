import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const metadata = {
  title: "Privacy Policy | INFINITY EXIM",
  description: "Privacy Policy for INFINITY EXIM B2B international trade website."
};

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-black text-[#102A43]">Privacy Policy</h1>
          <p className="text-xs font-mono text-[#64748B]">Last updated: September 2026</p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#D8C9B5]/60 p-8 sm:p-12 rounded-sm space-y-6 text-sm text-[#64748B] leading-relaxed">
          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-900 text-xs font-mono">
            <strong>NOTICE FOR BUSINESS REVIEW:</strong> This Privacy Policy outlines the standard data handling practices for commercial enquiries submitted through the INFINITY EXIM website. Please review and tailor with your legal advisor prior to formal publication.
          </div>

          <h2 className="text-lg font-bold text-[#102A43]">1. Information We Collect</h2>
          <p>
            INFINITY EXIM collects information directly provided by business visitors submitting commercial sourcing or trade enquiries. This information includes full names, company names, business email addresses, phone/WhatsApp numbers, country, target commodity specifications, and messages.
          </p>

          <h2 className="text-lg font-bold text-[#102A43]">2. Use of Information</h2>
          <p>
            The information submitted is strictly utilized to evaluate commercial requirements, prepare specifications, communicate regarding trade enquiries, and coordinate logistics or freight services. We do not sell or rent commercial lead data to third-party marketers.
          </p>

          <h2 className="text-lg font-bold text-[#102A43]">3. Data Security & Storage</h2>
          <p>
            We implement administrative and technical security measures to protect enquiry details submitted through our online lead generation forms. Leads are securely recorded in commercial enquiry logs and accessible only to authorized personnel.
          </p>

          <h2 className="text-lg font-bold text-[#102A43]">4. Contact Details</h2>
          <p>
            For any questions or data privacy requests regarding INFINITY EXIM, please contact us at: <br />
            <strong>Email:</strong> {COMPANY_DATA.email} <br />
            <strong>Location:</strong> Mundra, Kutch, Gujarat, India
          </p>
        </div>

      </div>
    </div>
  );
}
