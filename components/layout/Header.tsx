"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Commodities", href: "/commodities" },
    { name: "Global Reach", href: "/global-reach" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1726]/90 backdrop-blur-md border-b border-[#D8C9B5]/15 shadow-md py-3 text-[#F7F5EF]"
          : "bg-transparent py-5 text-[#F7F5EF]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with 3D Infinity Globe/Ship Image */}
          <Link
            href="/"
            className="group flex items-center space-x-3 focus:outline-none"
            aria-label="INFINITY EXIM Homepage"
          >
            <img
              src="/images/logo.png"
              alt="INFINITY EXIM Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            />
            <span className="font-serif-editorial text-xl sm:text-2xl font-black tracking-wider text-[#FFFFFF] group-hover:text-[#C08A5D] transition-colors">
              INFINITY EXIM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors ${
                    isActive
                      ? "text-[#C08A5D] font-semibold"
                      : "text-[#D8C9B5]/80 hover:text-[#FFFFFF]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Top Right Pill CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center justify-center bg-[#C08A5D] hover:bg-[#A8744B] text-[#FFFFFF] px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[#F7F5EF] hover:text-[#C08A5D] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B1726] border-b border-[#D8C9B5]/20 px-6 pt-4 pb-8 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3 pt-2">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/" ? "text-[#C08A5D] font-semibold" : "text-[#F7F5EF]"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#C08A5D] font-semibold"
                      : "text-[#D8C9B5]/80 hover:text-[#FFFFFF]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#D8C9B5]/20">
            <Link
              href="/request-a-quote"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center space-x-2 w-full bg-[#C08A5D] text-[#FFFFFF] px-4 py-3 rounded-full text-center font-semibold text-sm tracking-wide shadow-md"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
