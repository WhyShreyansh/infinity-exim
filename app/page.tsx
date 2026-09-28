import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Pillars } from "@/components/sections/Pillars";
import { CategoryExplorer } from "@/components/sections/CategoryExplorer";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WhyUs } from "@/components/sections/WhyUs";
import { HomepageContactSection } from "@/components/sections/HomepageContactSection";
import { PRODUCTS_DATA } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export default function HomePage() {
  const featuredSlugs = [
    "triple-refined-free-flow-iodised-salt",
    "bentonite",
    "silica-sand",
    "basmati-rice",
    "turmeric",
    "quartz"
  ];

  const featuredProducts = PRODUCTS_DATA.filter((p) => featuredSlugs.includes(p.slug));

  return (
    <div className="space-y-0 bg-[#0B1726] text-[#F7F5EF]">
      
      {/* 1. HERO SECTION — VIDEO BACKGROUND (FADED, LEFT-ANCHORED) */}
      <section className="relative min-h-[calc(100vh-20px)] flex flex-col justify-center pt-24 pb-10 lg:pt-24 lg:pb-12 bg-[#0B1726] text-[#F7F5EF] overflow-hidden">

        {/* Background Video — anchored left, faded out toward the right so copy stays readable */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-100"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.65) 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.65) 100%)"
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>

          {/* Dot Matrix Pattern (kept, sits above the video) */}
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />

          {/* Readability scrim: darkens the left/text zone, stays light on the right so video reads through */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1726]/55 via-[#0B1726]/30 to-[#0B1726]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726] via-transparent to-[#0B1726]/25" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
          <div className="relative max-w-3xl space-y-6">

            {/* Local scrim just behind the copy — keeps text/CTA readable even with the video brighter */}
            <div
              className="absolute -inset-x-6 -inset-y-10 -z-10 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse 110% 100% at 0% 50%, rgba(11,23,38,0.92) 0%, rgba(11,23,38,0.75) 45%, rgba(11,23,38,0) 100%)"
              }}
            />

            {/* Top Subtitle Tag */}
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#C08A5D] uppercase font-semibold">
              GLOBAL TRADE · COMMODITIES · LOGISTICS
            </div>

            {/* Massive Crisp Editorial Headline */}
            <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-[76px] font-normal tracking-tight leading-[1.04]">
              <span className="text-[#FFFFFF] block">From Indian Supply</span>
              <span className="text-[#D8C9B5] block">To Global Demand.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-lg font-normal">
              INFINITY EXIM connects international B2B buyers with commodity sourcing, export-import support and logistics coordination from Mundra, Gujarat.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center space-x-2 bg-[#C08A5D] hover:bg-[#A8744B] text-[#FFFFFF] px-7 py-3 rounded-full text-xs font-semibold tracking-wide transition-all shadow-lg hover:scale-[1.02]"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/commodities"
                className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#152538]/60 text-[#F7F5EF] border border-[#D8C9B5]/30 hover:border-[#D8C9B5] px-7 py-3 rounded-full text-xs font-semibold tracking-wide transition-all"
              >
                <span>Explore Commodities</span>
                <ArrowUpRight className="w-4 h-4 text-[#D8C9B5]" />
              </Link>
            </div>

            {/* Bottom Left Tag */}
            <div className="pt-2 text-[11px] font-mono tracking-[0.25em] text-[#C08A5D] uppercase font-medium">
              MUNDRA, GUJARAT · INDIA
            </div>

          </div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO SECTION */}
      <section className="py-24 bg-[#08121E] border-y border-[#D8C9B5]/15 text-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C08A5D] font-semibold">
                COMMERCIAL FOCUS
              </span>

              <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-[#F7F5EF] tracking-tight">
                From source to shipment.
              </h2>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                We bring commodity sourcing and international trade coordination together under one roof — helping buyers move from a defined requirement to a commercially practical supply solution.
              </p>

              <div className="pt-2 flex flex-col space-y-3 text-xs font-semibold">
                <div className="flex items-center space-x-3 p-4 bg-[#0B1726] border-l-2 border-[#C08A5D] rounded-r-sm">
                  <span className="text-[#C08A5D] font-mono font-bold">REQUIREMENT-FIRST:</span>
                  <span className="text-[#D8C9B5]">Clear commercial alignment prior to quotation.</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-[#0B1726] border-l-2 border-[#D8C9B5] rounded-r-sm">
                  <span className="text-[#F7F5EF] font-mono font-bold">PORT-CONNECTED:</span>
                  <span className="text-[#D8C9B5]">Strategic operational proximity to Mundra Port, Gujarat.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0B1726] text-[#F7F5EF] p-8 sm:p-12 rounded-sm border border-[#D8C9B5]/20 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#152538]">
                  <span className="text-xs font-mono text-[#D8C9B5] uppercase">
                    B2B TRADE WORKFLOW
                  </span>
                  <span className="text-[10px] font-mono text-[#C08A5D] border border-[#C08A5D]/40 px-2.5 py-0.5 rounded-full">
                    GUJARAT HUB
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#152538]/50 border border-[#D8C9B5]/15 rounded-sm flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#C08A5D] uppercase block">STAGE 01</span>
                      <span className="text-sm font-bold text-[#F7F5EF]">INDIA / SOURCE</span>
                    </div>
                    <span className="text-xs font-mono text-[#D8C9B5]">MUNDRA ORIGIN</span>
                  </div>

                  <div className="p-4 bg-[#152538]/50 border border-[#D8C9B5]/15 rounded-sm flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#C08A5D] uppercase block">STAGE 02</span>
                      <span className="text-sm font-bold text-[#F7F5EF]">GLOBAL / TRADE</span>
                    </div>
                    <span className="text-xs font-mono text-[#D8C9B5]">SPEC ALIGNMENT</span>
                  </div>

                  <div className="p-4 bg-[#152538]/50 border border-[#D8C9B5]/15 rounded-sm flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#C08A5D] uppercase block">STAGE 03</span>
                      <span className="text-sm font-bold text-[#F7F5EF]">B2B / SHIPMENT</span>
                    </div>
                    <span className="text-xs font-mono text-[#D8C9B5]">OCEAN FREIGHT</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THREE BUSINESS PILLARS */}
      <Pillars />

      {/* 4. COMMODITY CATEGORIES */}
      <CategoryExplorer />

      {/* 5. FEATURED PRODUCTS SHOWCASE */}
      <section className="py-24 bg-[#08121E] border-t border-[#D8C9B5]/15 text-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C08A5D] font-semibold">
                FEATURED SELECTION
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#F7F5EF] mt-2 tracking-tight">
                Featured Indian Commodities.
              </h2>
            </div>

            <Link
              href="/commodities"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#C08A5D] hover:text-[#FFFFFF] transition-colors"
            >
              <span>View All Commodities →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS TIMELINE */}
      <ProcessTimeline />

      {/* 7. WHY INFINITY EXIM */}
      <WhyUs />

      {/* 8. HOMEPAGE UPPER FOOTER CONTACT SECTION */}
      <HomepageContactSection />

    </div>
  );
}
