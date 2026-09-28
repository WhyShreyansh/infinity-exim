export interface MarketDestination {
  id: string;
  country: string;
  region: string;
  label: string;
  description: string;
  // SVG coordinates for world map visual relative to viewBox [0 0 1000 500]
  x: number;
  y: number;
}

export const ORIGIN_POINT = {
  name: "INDIA / MUNDRA",
  location: "Mundra Port, Kutch, Gujarat, India",
  x: 640,
  y: 240
};

export const GLOBAL_MARKETS: MarketDestination[] = [
  {
    id: "mkt-uae",
    country: "UAE",
    region: "Middle East",
    label: "International market / destination",
    description: "Key Middle East trading hub for salt, industrial minerals, and agricultural commodities.",
    x: 570,
    y: 235
  },
  {
    id: "mkt-oman",
    country: "Oman",
    region: "Middle East",
    label: "International market / destination",
    description: "Strategic trade route destination for bulk salt and mineral cargo shipments.",
    x: 585,
    y: 245
  },
  {
    id: "mkt-qatar",
    country: "Qatar",
    region: "Middle East",
    label: "International market / destination",
    description: "Commercial destination for specification-driven industrial and food-grade commodities.",
    x: 560,
    y: 230
  },
  {
    id: "mkt-vietnam",
    country: "Vietnam",
    region: "Southeast Asia",
    label: "International market / destination",
    description: "Rapidly growing Southeast Asian industrial destination for mineral and agricultural sourcing.",
    x: 760,
    y: 260
  },
  {
    id: "mkt-malaysia",
    country: "Malaysia",
    region: "Southeast Asia",
    label: "International market / destination",
    description: "Major maritime trade destination receiving commodities sourced from India.",
    x: 740,
    y: 290
  },
  {
    id: "mkt-singapore",
    country: "Singapore",
    region: "Southeast Asia",
    label: "International market / destination",
    description: "Global maritime transit and commodity trade hub in Southeast Asia.",
    x: 748,
    y: 300
  },
  {
    id: "mkt-thailand",
    country: "Thailand",
    region: "Southeast Asia",
    label: "International market / destination",
    description: "Southeast Asian destination for requirement-led B2B trade coordination.",
    x: 730,
    y: 265
  },
  {
    id: "mkt-kenya",
    country: "Kenya",
    region: "East Africa",
    label: "International market / destination",
    description: "East African trade gateway connecting Indian commodities across the Indian Ocean.",
    x: 550,
    y: 300
  }
];
