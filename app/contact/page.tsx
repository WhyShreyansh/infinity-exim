import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, MessageSquare, Clock } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";

export const metadata = {
  title: "Contact INFINITY EXIM | Commodity & Trade Enquiries",
  description:
    "Get in touch with INFINITY EXIM in Mundra, Kutch, Gujarat for product sourcing, export-import, logistics or ocean freight enquiries."
};

export default function ContactPage() {
  return (
    <div className="space-y-0 bg-[#F7F5EF] text-[#102A43]">
      
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#102A43] text-[#F7F5EF] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
            GET IN TOUCH
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5EF] tracking-tight">
            Let&apos;s talk trade.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            For product sourcing, trade support, logistics or freight enquiries, contact INFINITY EXIM.
          </p>

          <div className="pt-2 text-xs font-mono text-[#D8C9B5]">
            DIRECT COMMERCIAL CHANNELS
          </div>
        </div>
      </section>

      {/* Split Screen Design (Section 26) */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#D8C9B5]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Large Typography Statement */}
            <div className="lg:col-span-5 bg-[#102A43] text-[#F7F5EF] p-8 sm:p-12 rounded-sm shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold block">
                  COMMERCIAL ENQUIRIES
                </span>

                <h2 className="text-4xl sm:text-5xl font-black text-[#FFFFFF] leading-tight">
                  Have a requirement?
                </h2>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Whether you are seeking salt, industrial minerals, agricultural commodities, or freight coordination from Mundra Port, our commercial leads are available to assist.
                </p>
              </div>

              <div className="relative z-10 pt-10 border-t border-[#1E3A5F]">
                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center space-x-2 bg-[#B87952] hover:bg-[#9A603C] text-[#F7F5EF] px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Fill Specification Form</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F7F5EF]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* EMAIL */}
              <div className="bg-[#F7F5EF] border border-[#D8C9B5]/60 p-6 rounded-sm space-y-3 hover:border-[#B87952] transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#102A43] text-[#B87952] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#94A3B8] uppercase block">BUSINESS ENQUIRIES</span>
                  <h3 className="text-sm font-bold text-[#102A43] mt-1">Email Address</h3>
                </div>
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="text-sm font-bold text-[#B87952] hover:underline break-all block"
                >
                  {COMPANY_DATA.email}
                </a>
              </div>

              {/* PRIMARY CONTACT: KHALID SAMA */}
              <div className="bg-[#F7F5EF] border border-[#D8C9B5]/60 p-6 rounded-sm space-y-3 hover:border-[#B87952] transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#102A43] text-[#B87952] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#94A3B8] uppercase block">PRIMARY CONTACT</span>
                  <h3 className="text-base font-bold text-[#102A43] mt-1">Khalid Sama</h3>
                </div>
                <a
                  href="tel:+918460568211"
                  className="text-sm font-bold text-[#102A43] hover:text-[#B87952] transition-colors block"
                >
                  +91 84605 68211
                </a>
                <a
                  href="https://wa.me/918460568211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs text-[#B87952] font-semibold"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* SECONDARY CONTACT: KHUSH MEHTA */}
              <div className="bg-[#F7F5EF] border border-[#D8C9B5]/60 p-6 rounded-sm space-y-3 hover:border-[#B87952] transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#102A43] text-[#B87952] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#94A3B8] uppercase block">ADDITIONAL CONTACT</span>
                  <h3 className="text-base font-bold text-[#102A43] mt-1">Khush Mehta</h3>
                </div>
                <a
                  href="tel:+919429650248"
                  className="text-sm font-bold text-[#102A43] hover:text-[#B87952] transition-colors block"
                >
                  +91 94296 50248
                </a>
                <a
                  href="https://wa.me/919429650248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs text-[#B87952] font-semibold"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* LOCATION */}
              <div className="bg-[#F7F5EF] border border-[#D8C9B5]/60 p-6 rounded-sm space-y-3 hover:border-[#B87952] transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#102A43] text-[#B87952] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#94A3B8] uppercase block">OPERATIONAL HUB</span>
                  <h3 className="text-base font-bold text-[#102A43] mt-1">Mundra, Kutch</h3>
                </div>
                <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                  Gujarat, India <br />
                  <span className="text-[11px] font-mono text-[#B87952]">PORT: MUNDRA PORT, GUJARAT</span>
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <EnquiryCTA />
    </div>
  );
}
