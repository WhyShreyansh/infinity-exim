import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070E18] text-[#F7F5EF] pt-16 pb-12 border-t border-[#D8C9B5]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#D8C9B5]/15">
          
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <img
                src="/images/logo.png"
                alt="INFINITY EXIM Logo"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div>
                <span className="text-xl font-black font-serif-editorial tracking-wider text-[#FFFFFF] block">
                  INFINITY EXIM
                </span>
                <p className="text-[9px] text-[#C08A5D] tracking-[0.2em] font-semibold uppercase">
                  Global Trade House
                </p>
              </div>
            </Link>

            <p className="text-sm text-[#94A3B8] leading-relaxed pr-2">
              Global trade, commodities and logistics support from India, built around clear B2B requirements.
            </p>
            <div className="pt-2 text-xs text-[#D8C9B5] font-mono">
              PORT ORIGIN: MUNDRA, GUJARAT
            </div>
          </div>

          {/* Column 2: Explore Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#C08A5D] mb-5">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/commodities" className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors">
                  Commodities
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/global-reach" className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors">
                  Global Reach
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Commodities Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#C08A5D] mb-5">
              Commodities
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/commodities?category=salt" className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors">
                  Salt (8 Varieties)
                </Link>
              </li>
              <li>
                <Link href="/commodities?category=minerals" className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors">
                  Minerals (6 Products)
                </Link>
              </li>
              <li>
                <Link href="/commodities?category=agricultural-products" className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors">
                  Agricultural Products (6 Commodities)
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/request-a-quote" className="inline-flex items-center space-x-1 text-[#C08A5D] hover:text-[#D8C9B5] font-semibold text-xs tracking-wider uppercase transition-colors">
                  <span>Custom Sourcing Enquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Contacts */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#C08A5D] mb-5">
              Connect
            </h3>
            <ul className="space-y-3 text-sm text-[#94A3B8]">
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-[#C08A5D] shrink-0 mt-1" />
                <a href={`mailto:${COMPANY_DATA.email}`} className="hover:text-[#FFFFFF] transition-colors break-all">
                  {COMPANY_DATA.email}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-[#C08A5D] shrink-0 mt-1" />
                <div>
                  <a href="tel:+918460568211" className="block hover:text-[#FFFFFF] transition-colors">
                    Khalid Sama: +91 84605 68211
                  </a>
                  <a href="tel:+919429650248" className="block hover:text-[#FFFFFF] transition-colors mt-1">
                    Khush Mehta: +91 94296 50248
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C08A5D] shrink-0 mt-1" />
                <span>Mundra, Kutch, Gujarat, India</span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center space-x-2 bg-[#C08A5D] hover:bg-[#A8744B] text-[#FFFFFF] text-xs font-semibold tracking-wider uppercase px-4 py-2.5 rounded-full transition-all"
              >
                <span>Request an Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#64748B] space-y-4 md:space-y-0">
          <p>© 2026 INFINITY EXIM. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-[#D8C9B5] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#152538]">|</span>
            <Link href="/terms" className="hover:text-[#D8C9B5] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
