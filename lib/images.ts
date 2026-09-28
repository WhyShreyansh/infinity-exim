// Utility to generate stylish SVG visual patterns for products if external image assets are absent
export function getProductImageFallback(productSlug: string, category: string): string {
  let bgColor = "#102A43";
  let patternColor = "#D8C9B5";
  let label = productSlug.replace(/-/g, " ").toUpperCase();
  let icon = "📦";

  if (category === "Salt") {
    bgColor = "#2C3E50";
    patternColor = "#ECE8DE";
    icon = "🧂";
  } else if (category === "Minerals") {
    bgColor = "#1A252C";
    patternColor = "#B87952";
    icon = "💎";
  } else if (category === "Agricultural Products") {
    bgColor = "#1B2A1E";
    patternColor = "#D8C9B5";
    icon = "🌾";
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="${bgColor}"/>
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${patternColor}" stroke-opacity="0.12" stroke-width="1"/>
      </pattern>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgColor}"/>
        <stop offset="100%" stop-color="#102A43"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#grad)"/>
    <rect width="800" height="600" fill="url(#grid)"/>
    <circle cx="400" cy="270" r="120" fill="${patternColor}" fill-opacity="0.08" stroke="${patternColor}" stroke-opacity="0.2" stroke-width="2"/>
    <text x="400" y="290" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="72" text-anchor="middle" fill="#FFFFFF">${icon}</text>
    <rect x="80" y="440" width="640" height="80" rx="4" fill="#102A43" fill-opacity="0.7" stroke="${patternColor}" stroke-opacity="0.3"/>
    <text x="400" y="475" font-family="Arial, sans-serif" font-size="20" font-weight="bold" letter-spacing="2" text-anchor="middle" fill="#F7F5EF">${label}</text>
    <text x="400" y="500" font-family="Arial, sans-serif" font-size="12" letter-spacing="3" text-anchor="middle" fill="#D8C9B5">INDIA SOURCE / B2B TRADE</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
