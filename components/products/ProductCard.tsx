"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";
import { getProductImageFallback } from "@/lib/images";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const fallbackSvg = getProductImageFallback(product.slug, product.category);

  return (
    <div className="group bg-[#0E1E30] border border-[#D8C9B5]/20 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#C08A5D] transition-all duration-300 shadow-md hover:shadow-2xl">
      <div>
        {/* Product Image Container */}
        <div className="relative w-full aspect-[4/3] bg-[#070F19] overflow-hidden flex items-center justify-center">
          <img
            src={product.image || fallbackSvg}
            alt={product.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackSvg;
            }}
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#0B1726]/90 text-[#D8C9B5] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-xs backdrop-blur-sm border border-[#D8C9B5]/20">
              {product.category}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-3">
          <h3 className="font-sans text-lg font-bold text-[#F7F5EF] group-hover:text-[#C08A5D] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="pt-2 border-t border-[#152538]">
            <p className="text-[10px] text-[#64748B] italic leading-tight">
              Specifications & commercial terms confirmed prior to quotation.
            </p>
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-[#152538] bg-[#091421]/60">
        <Link
          href={`/commodities/${product.slug}`}
          className="text-xs font-semibold text-[#D8C9B5] hover:text-[#FFFFFF] transition-colors"
        >
          View Details
        </Link>

        <Link
          href={`/request-a-quote?product=${encodeURIComponent(product.name)}`}
          className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#C08A5D] hover:text-[#FFFFFF] transition-colors"
        >
          <span>Request Quote</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
