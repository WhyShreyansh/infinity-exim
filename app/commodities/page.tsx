"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, Layers } from "lucide-react";
import { PRODUCTS_DATA, CATEGORIES_META } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";

export default function CommoditiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categorySlug === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-0 bg-[#F7F5EF] text-[#102A43]">
      
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-[#102A43] text-[#F7F5EF] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B87952] font-semibold">
            COMMODITY CATALOGUE
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F7F5EF] tracking-tight">
            Commodities sourced with purpose.
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Explore the products and categories INFINITY EXIM works with across salt, minerals and agricultural commodities.
          </p>

          <div className="pt-2 text-xs font-mono text-[#D8C9B5]">
            SHOWING ALL {PRODUCTS_DATA.length} LISTED B2B COMMODITIES
          </div>
        </div>
      </section>

      {/* Main Filter & Products Section */}
      <section className="py-16 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Controls Header: Search & Category Filters */}
          <div className="bg-[#FFFFFF] border border-[#D8C9B5]/60 p-6 rounded-sm shadow-md space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors ${
                    selectedCategory === "all"
                      ? "bg-[#102A43] text-[#F7F5EF]"
                      : "bg-[#F7F5EF] text-[#64748B] hover:text-[#102A43] border border-[#D8C9B5]/40"
                  }`}
                >
                  All ({PRODUCTS_DATA.length})
                </button>

                {CATEGORIES_META.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors ${
                      selectedCategory === cat.slug
                        ? "bg-[#102A43] text-[#F7F5EF]"
                        : "bg-[#F7F5EF] text-[#64748B] hover:text-[#102A43] border border-[#D8C9B5]/40"
                    }`}
                  >
                    {cat.title} ({cat.count})
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[260px]">
                <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search commodities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#F7F5EF]/80 border border-[#D8C9B5] focus:border-[#B87952] pl-9 pr-4 py-2 text-xs text-[#102A43] rounded-sm focus:outline-none transition-colors"
                />
              </div>

            </div>

            {/* Active Category Description Banner */}
            {selectedCategory !== "all" && (
              <div className="pt-4 border-t border-[#F7F5EF] flex items-center justify-between text-xs text-[#64748B]">
                <span>
                  Category:{" "}
                  <strong className="text-[#102A43]">
                    {CATEGORIES_META.find((c) => c.slug === selectedCategory)?.title}
                  </strong>
                </span>
                <span>
                  {CATEGORIES_META.find((c) => c.slug === selectedCategory)?.description}
                </span>
              </div>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-[#FFFFFF] border border-[#D8C9B5] p-12 text-center rounded-sm space-y-4">
              <p className="text-lg font-bold text-[#102A43]">
                No commodities found matching &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-xs font-bold uppercase tracking-wider text-[#B87952] underline"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      <EnquiryCTA />
    </div>
  );
}
