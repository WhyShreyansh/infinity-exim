import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { PRODUCTS_DATA, IMPORTANT_PRODUCT_DISCLAIMER } from "@/data/products";
import { getProductImageFallback } from "@/lib/images";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} | ${product.category} | INFINITY EXIM`,
    description: product.shortDescription
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const fallbackImage = getProductImageFallback(product.slug, product.category);

  return (
    <div className="space-y-0 bg-[#F7F5EF] text-[#102A43]">
      
      {/* Breadcrumb Navigation */}
      <section className="bg-[#102A43] text-[#F7F5EF] pt-8 pb-4 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-[#D8C9B5]">
            <Link href="/commodities" className="hover:text-white flex items-center space-x-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>COMMODITIES</span>
            </Link>
            <span>/</span>
            <span className="uppercase text-[#B87952]">{product.category}</span>
            <span>/</span>
            <span className="text-[#94A3B8] truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Main Product Hero */}
      <section className="py-12 sm:py-20 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Image View */}
            <div className="lg:col-span-6 bg-[#102A43] border border-[#D8C9B5]/60 rounded-sm overflow-hidden shadow-xl relative aspect-[4/3]">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#102A43]/90 text-[#D8C9B5] text-xs font-mono uppercase tracking-widest px-3 py-1 rounded border border-[#D8C9B5]/30">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Right Product Summary & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
                  {product.category} COMMODITY SOURCING
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102A43] mt-2 leading-tight">
                  {product.name}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                {product.fullPositioning || product.shortDescription}
              </p>

              {/* Trade Support Tags */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#102A43] font-bold block">
                  COMMERCIAL SUPPORT INCLUDED:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.tradeSupport.map((sup) => (
                    <span
                      key={sup}
                      className="bg-[#FFFFFF] text-[#102A43] border border-[#D8C9B5] text-xs font-semibold px-3 py-1 rounded-sm flex items-center space-x-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B87952]" />
                      <span>{sup}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-[#D8C9B5]/60">
                <Link
                  href={`/request-a-quote?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center space-x-2 bg-[#102A43] hover:bg-[#1E3A5F] text-[#F7F5EF] px-8 py-4 rounded-sm text-sm font-bold tracking-wide transition-all shadow-lg"
                >
                  <span>Request This Product</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D8C9B5]" />
                </Link>

                <a
                  href={`mailto:INFINYEXIM01@GMAIL.COM?subject=Enquiry for ${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center space-x-2 bg-[#FFFFFF] hover:bg-[#D8C9B5]/20 text-[#102A43] border border-[#D8C9B5] px-6 py-4 rounded-sm text-sm font-semibold tracking-wide transition-colors"
                >
                  <span>Email Direct Enquiry</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* About Commodity & Specifications Note */}
      <section className="py-16 bg-[#FFFFFF] border-y border-[#D8C9B5]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* About text */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl font-bold text-[#102A43]">
                About this commodity
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {product.fullPositioning || product.shortDescription}
              </p>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Offered through INFINITY EXIM for requirement-led B2B sourcing from India. We work closely with international trade buyers to coordinate grade parameters, moisture tolerances, custom packaging, and vessel loading schedules from Mundra Port.
              </p>
            </div>

            {/* Critical Commercial Note Box */}
            <div className="lg:col-span-5 bg-[#F7F5EF] border-l-4 border-[#B87952] p-6 rounded-r-sm space-y-3">
              <div className="flex items-center space-x-2 text-[#B87952]">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  IMPORTANT COMMERCIAL NOTE
                </span>
              </div>
              <p className="text-xs text-[#102A43] font-medium leading-relaxed">
                {IMPORTANT_PRODUCT_DISCLAIMER}
              </p>
            </div>

          </div>

          {/* Looking for this Commodity Section */}
          <div className="bg-[#102A43] text-[#F7F5EF] p-8 sm:p-12 rounded-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF]">
                Looking for this commodity?
              </h3>
              <p className="text-sm text-[#94A3B8]">
                Tell us your required quantity, destination, specifications and packaging requirements.
              </p>
            </div>

            <Link
              href={`/request-a-quote?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center space-x-2 bg-[#B87952] hover:bg-[#9A603C] text-[#F7F5EF] px-7 py-3.5 rounded-sm text-sm font-bold tracking-wide transition-all shadow-lg shrink-0"
            >
              <span>Start an Enquiry</span>
              <ArrowUpRight className="w-4 h-4 text-[#F7F5EF]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
