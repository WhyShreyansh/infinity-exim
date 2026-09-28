"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CATEGORIES_META, PRODUCTS_DATA } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export const CategoryExplorer: React.FC = () => {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>("all");

  const filteredProducts = activeCategorySlug === "all"
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.categorySlug === activeCategorySlug);

  return (
    <section className="py-20 bg-[#F7F5EF] text-[#102A43]" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
              03 / COMMODITY CATEGORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] mt-2 tracking-tight">
              Commodities built around real demand.
            </h2>
            <p className="text-base text-[#64748B] mt-4 leading-relaxed">
              Explore the categories INFINITY EXIM works with across salt, minerals and agricultural products sourced directly from India.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/commodities"
              className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-[#102A43] hover:text-[#B87952] transition-colors group"
            >
              <span>View Full Catalogue (20 Products)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Main Editorial Category Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CATEGORIES_META.map((cat) => {
            const isActive = activeCategorySlug === cat.slug;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategorySlug(cat.slug)}
                className={`cursor-pointer rounded-sm p-8 transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? "bg-[#102A43] text-[#F7F5EF] border-[#102A43] shadow-xl translate-y-[-4px]"
                    : "bg-[#FFFFFF] text-[#102A43] border-[#D8C9B5]/60 hover:border-[#B87952] hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-mono uppercase tracking-widest font-bold ${
                        isActive ? "text-[#B87952]" : "text-[#B87952]"
                      }`}
                    >
                      {cat.label}
                    </span>
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded ${
                        isActive
                          ? "bg-[#1E3A5F] text-[#D8C9B5]"
                          : "bg-[#F7F5EF] text-[#102A43]"
                      }`}
                    >
                      {cat.count} Products
                    </span>
                  </div>

                  <h3 className="text-2xl font-black mb-3">{cat.title}</h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isActive ? "text-[#94A3B8]" : "text-[#64748B]"
                    }`}
                  >
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-current/10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {cat.ctaText}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-[#B87952] translate-x-1" : "text-[#102A43]"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D8C9B5]/40">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategorySlug("all")}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                activeCategorySlug === "all"
                  ? "bg-[#102A43] text-[#F7F5EF]"
                  : "bg-[#FFFFFF] text-[#64748B] hover:text-[#102A43] border border-[#D8C9B5]/40"
              }`}
            >
              All Commodities ({PRODUCTS_DATA.length})
            </button>

            {CATEGORIES_META.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveCategorySlug(c.slug)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                  activeCategorySlug === c.slug
                    ? "bg-[#102A43] text-[#F7F5EF]"
                    : "bg-[#FFFFFF] text-[#64748B] hover:text-[#102A43] border border-[#D8C9B5]/40"
                }`}
              >
                {c.title} ({c.count})
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-[#64748B]">
            Showing {filteredProducts.length} items
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        {filteredProducts.length > 6 && (
          <div className="mt-12 text-center">
            <Link
              href="/commodities"
              className="inline-flex items-center space-x-2 bg-[#102A43] hover:bg-[#1E3A5F] text-[#F7F5EF] px-8 py-4 rounded-sm text-sm font-semibold tracking-wide transition-all shadow-md"
            >
              <span>Explore Complete Catalogue (20 Products)</span>
              <ArrowRight className="w-4 h-4 text-[#D8C9B5]" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
