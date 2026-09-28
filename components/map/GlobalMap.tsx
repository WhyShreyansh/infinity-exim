"use client";

import React, { useState } from "react";
import { ORIGIN_POINT, GLOBAL_MARKETS, MarketDestination } from "@/data/markets";

export const GlobalMap: React.FC = () => {
  const [activeMarket, setActiveMarket] = useState<MarketDestination | null>(null);

  return (
    <div className="w-full bg-[#102A43] border border-[#1E3A5F] rounded-lg p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background overlay & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Map Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#1E3A5F] relative z-10">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#B87952] uppercase">
            INTERNATIONAL DESTINATIONS
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F7F5EF] mt-1">
            Indian Commodity Trade Routes
          </h3>
        </div>
        <div className="text-xs text-[#94A3B8] font-mono">
          Hover or tap any destination market below to view trade details.
        </div>
      </div>

      {/* Interactive Map Visual */}
      <div className="relative w-full aspect-[2/1] min-h-[350px] sm:min-h-[450px] flex items-center justify-center">
        <svg
          className="w-full h-full object-contain"
          viewBox="0 0 1000 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle World Grid Lines */}
          <line x1="0" y1="250" x2="1000" y2="250" stroke="#D8C9B5" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="5 5" />
          <line x1="500" y1="0" x2="500" y2="500" stroke="#D8C9B5" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="5 5" />

          {/* Connective Arcs */}
          {GLOBAL_MARKETS.map((mkt) => {
            const midX = (ORIGIN_POINT.x + mkt.x) / 2;
            const midY = (ORIGIN_POINT.y + mkt.y) / 2 - 35;
            const pathD = `M ${ORIGIN_POINT.x} ${ORIGIN_POINT.y} Q ${midX} ${midY} ${mkt.x} ${mkt.y}`;
            const isSelected = activeMarket?.id === mkt.id;

            return (
              <g key={mkt.id}>
                <path
                  d={pathD}
                  stroke={isSelected ? "#B87952" : "#D8C9B5"}
                  strokeOpacity={isSelected ? "0.9" : "0.25"}
                  strokeWidth={isSelected ? "2.5" : "1.2"}
                  strokeDasharray={isSelected ? "none" : "4 4"}
                  fill="none"
                  className="transition-all duration-300"
                />

                {/* Market Destination Pin */}
                <g
                  className="cursor-pointer group"
                  onMouseEnter={() => setActiveMarket(mkt)}
                  onClick={() => setActiveMarket(mkt)}
                >
                  <circle
                    cx={mkt.x}
                    cy={mkt.y}
                    r={isSelected ? "7" : "5"}
                    fill={isSelected ? "#B87952" : "#F7F5EF"}
                    stroke="#102A43"
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  <text
                    x={mkt.x + 10}
                    y={mkt.y + 4}
                    fontFamily="sans-serif"
                    fontSize={isSelected ? "12" : "10"}
                    fontWeight={isSelected ? "bold" : "600"}
                    fill={isSelected ? "#B87952" : "#D8C9B5"}
                    className="transition-colors duration-300"
                  >
                    {mkt.country}
                  </text>
                </g>
              </g>
            );
          })}

          {/* Origin Pin (Mundra, Gujarat) */}
          <g>
            <circle cx={ORIGIN_POINT.x} cy={ORIGIN_POINT.y} r="10" fill="#B87952" fillOpacity="0.3" />
            <circle cx={ORIGIN_POINT.x} cy={ORIGIN_POINT.y} r="6" fill="#F7F5EF" stroke="#B87952" strokeWidth="2.5" />
            <rect
              x={ORIGIN_POINT.x - 50}
              y={ORIGIN_POINT.y - 36}
              width="100"
              height="22"
              rx="3"
              fill="#102A43"
              stroke="#B87952"
              strokeWidth="1"
            />
            <text
              x={ORIGIN_POINT.x}
              y={ORIGIN_POINT.y - 21}
              fontFamily="sans-serif"
              fontSize="10"
              fontWeight="bold"
              letterSpacing="1"
              textAnchor="middle"
              fill="#F7F5EF"
            >
              INDIA / MUNDRA
            </text>
          </g>
        </svg>

        {/* Active Market Tooltip Overlay */}
        {activeMarket && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xs bg-[#F7F5EF] text-[#102A43] p-4 rounded-md shadow-2xl border border-[#B87952] z-30 transition-all duration-300">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D8C9B5]">
              <span className="font-bold text-lg text-[#102A43]">{activeMarket.country}</span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B87952] bg-[#D8C9B5]/40 px-2 py-0.5 rounded">
                {activeMarket.region}
              </span>
            </div>
            <p className="text-xs font-semibold text-[#B87952] uppercase tracking-wider mb-1">
              {activeMarket.label}
            </p>
            <p className="text-xs text-[#64748B] leading-relaxed">
              {activeMarket.description}
            </p>
          </div>
        )}
      </div>

      {/* Grid of All 8 Markets Buttons for Fast Interactive Access */}
      <div className="mt-6 pt-6 border-t border-[#1E3A5F] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {GLOBAL_MARKETS.map((mkt) => {
          const isSelected = activeMarket?.id === mkt.id;
          return (
            <button
              key={mkt.id}
              onClick={() => setActiveMarket(mkt)}
              onMouseEnter={() => setActiveMarket(mkt)}
              className={`px-3 py-2 text-xs font-medium rounded-sm border transition-all text-center ${
                isSelected
                  ? "bg-[#B87952] text-[#F7F5EF] border-[#B87952] shadow-md"
                  : "bg-[#1E3A5F]/40 text-[#D8C9B5] border-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-[#FFFFFF]"
              }`}
            >
              {mkt.country}
            </button>
          );
        })}
      </div>
    </div>
  );
};
