"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling down 150px
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden pointer-events-auto">
      <Link
        href="/request-a-quote"
        className="flex items-center justify-between bg-[#102A43] text-[#F7F5EF] px-5 py-3.5 rounded-md shadow-2xl border border-[#D8C9B5]/40 text-sm font-semibold tracking-wide transition-transform active:scale-95"
      >
        <span className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#B87952] animate-pulse" />
          <span>Start an Enquiry</span>
        </span>
        <div className="flex items-center space-x-1 text-[#D8C9B5]">
          <span className="text-xs uppercase tracking-wider font-mono">B2B Trade</span>
          <ArrowUpRight className="w-4 h-4 text-[#B87952]" />
        </div>
      </Link>
    </div>
  );
};
