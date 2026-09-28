"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface MarketNode {
  id: string;
  name: string;
  region: string;
  x: number;
  y: number;
  controlX: number;
  controlY: number;
  details: string;
}

export const HeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<MarketNode | null>(null);

  const origin = { name: "MUNDRA", x: 330, y: 165 };

  const markets: MarketNode[] = [
    {
      id: "uae",
      name: "UAE",
      region: "Middle East",
      x: 130,
      y: 95,
      controlX: 230,
      controlY: 90,
      details: "Direct containerized trade route from Mundra Port"
    },
    {
      id: "oman",
      name: "Oman",
      region: "Middle East",
      x: 160,
      y: 170,
      controlX: 245,
      controlY: 180,
      details: "Commercial destination for bulk & bagged commodities"
    },
    {
      id: "kenya",
      name: "Kenya",
      region: "East Africa",
      x: 110,
      y: 270,
      controlX: 210,
      controlY: 250,
      details: "Indian Ocean maritime trade link"
    },
    {
      id: "vietnam",
      name: "Vietnam",
      region: "Southeast Asia",
      x: 530,
      y: 95,
      controlX: 430,
      controlY: 85,
      details: "Rapidly growing mineral & agricultural market"
    },
    {
      id: "thailand",
      name: "Thailand",
      region: "Southeast Asia",
      x: 510,
      y: 180,
      controlX: 420,
      controlY: 185,
      details: "Specification-led trade destination"
    },
    {
      id: "malaysia",
      name: "Malaysia",
      region: "Southeast Asia",
      x: 530,
      y: 245,
      controlX: 430,
      controlY: 230,
      details: "Key maritime import port"
    },
    {
      id: "singapore",
      name: "Singapore",
      region: "Southeast Asia",
      x: 550,
      y: 295,
      controlX: 440,
      controlY: 275,
      details: "Global maritime transit & trading hub"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] bg-[#070F18] border border-[#D8C9B5]/20 rounded-lg p-3 sm:p-5 shadow-2xl flex items-center justify-center overflow-hidden group"
    >
      {/* Background Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      {/* Radial Soft Ambient Glow behind Mundra Hub */}
      <div className="absolute top-[48%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#C08A5D]/25 blur-3xl pointer-events-none animate-pulse" />

      {/* Top Banner Tag */}
      <div className="absolute top-3 left-3 z-20 flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-[#C08A5D] animate-ping" />
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D8C9B5] bg-[#0B1726]/80 px-2 py-0.5 rounded border border-[#D8C9B5]/20 backdrop-blur-sm">
          ORIGIN HUB: MUNDRA PORT
        </span>
      </div>

      <div className="absolute bottom-3 left-3 z-20 text-[9px] font-mono text-[#94A3B8] tracking-widest uppercase hidden sm:block">
        GLOBAL TRADE ROUTES · INDIA → INTERNATIONAL MARKETS
      </div>

      {/* Interactive Tooltip Overlay */}
      {activeNode && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-3 right-3 z-30 bg-[#0B1726]/95 border border-[#C08A5D] p-3 rounded-md shadow-2xl backdrop-blur-md max-w-[210px]"
        >
          <div className="flex items-center justify-between pb-1 border-b border-[#152538] mb-1">
            <span className="text-xs font-bold text-[#F7F5EF]">{activeNode.name}</span>
            <span className="text-[9px] font-mono text-[#C08A5D] uppercase bg-[#C08A5D]/20 px-1.5 py-0.5 rounded">
              {activeNode.region}
            </span>
          </div>
          <p className="text-[10px] text-[#94A3B8] leading-tight">{activeNode.details}</p>
        </motion.div>
      )}

      {/* Full Scale SVG Map Visual */}
      <svg
        className="w-full h-full relative z-10"
        viewBox="0 0 680 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Global Trade Destinations Map"
      >
        {/* Connection Arcs */}
        {markets.map((mkt, idx) => {
          const pathD = `M ${origin.x} ${origin.y} Q ${mkt.controlX} ${mkt.controlY} ${mkt.x} ${mkt.y}`;
          const isHovered = activeNode?.id === mkt.id;

          return (
            <g key={mkt.id}>
              {/* Static Dashed Route Line */}
              <path
                d={pathD}
                stroke={isHovered ? "#C08A5D" : "#D8C9B5"}
                strokeOpacity={isHovered ? "0.9" : "0.22"}
                strokeWidth={isHovered ? "2.5" : "1.5"}
                strokeDasharray="4 5"
                fill="none"
                className="transition-all duration-300"
              />

              {/* Animated Cargo Flow Particles */}
              <path
                d={pathD}
                stroke="#C08A5D"
                strokeWidth={isHovered ? "3" : "2"}
                fill="none"
                strokeDasharray="16 120"
                className="animate-[dash_3.5s_linear_infinite]"
                style={{ animationDelay: `${idx * 0.4}s` }}
              />

              {/* Destination Node */}
              <g
                className="cursor-pointer group/node"
                onMouseEnter={() => setActiveNode(mkt)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <circle
                  cx={mkt.x}
                  cy={mkt.y}
                  r="10"
                  stroke="#C08A5D"
                  strokeOpacity="0.5"
                  strokeWidth="1"
                  fill="none"
                  className="animate-ping"
                  style={{ animationDuration: "3s", animationDelay: `${idx * 0.3}s` }}
                />

                <circle
                  cx={mkt.x}
                  cy={mkt.y}
                  r={isHovered ? "7" : "5"}
                  fill={isHovered ? "#C08A5D" : "#D8C9B5"}
                  stroke="#070F18"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />

                <text
                  x={mkt.x < origin.x ? mkt.x - 10 : mkt.x + 10}
                  y={mkt.y + 4}
                  textAnchor={mkt.x < origin.x ? "end" : "start"}
                  fontFamily="sans-serif"
                  fontSize={isHovered ? "14" : "12"}
                  fontWeight={isHovered ? "800" : "600"}
                  fill={isHovered ? "#FFFFFF" : "#D8C9B5"}
                  className="transition-all duration-300 select-none"
                >
                  {mkt.name}
                </text>
              </g>
            </g>
          );
        })}

        {/* MUNDRA ORIGIN HUB */}
        <g className="cursor-pointer">
          <circle cx={origin.x} cy={origin.y} r="32" fill="#C08A5D" fillOpacity="0.1" />
          <circle cx={origin.x} cy={origin.y} r="20" fill="#C08A5D" fillOpacity="0.25" />
          <circle
            cx={origin.x}
            cy={origin.y}
            r="14"
            stroke="#C08A5D"
            strokeWidth="1.5"
            strokeOpacity="0.6"
            fill="none"
            className="animate-ping"
            style={{ animationDuration: "2s" }}
          />

          <circle
            cx={origin.x}
            cy={origin.y}
            r="6"
            fill="#FFFFFF"
            stroke="#C08A5D"
            strokeWidth="3"
          />

          <rect
            x={origin.x - 44}
            y={origin.y - 36}
            width="88"
            height="22"
            rx="4"
            fill="#0B1726"
            stroke="#C08A5D"
            strokeWidth="1.5"
          />
          <text
            x={origin.x}
            y={origin.y - 21}
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize="11"
            fontWeight="bold"
            letterSpacing="1.5"
            fill="#FFFFFF"
          >
            MUNDRA
          </text>
        </g>
      </svg>
    </motion.div>
  );
};
