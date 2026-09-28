export interface Product {
  id: string;
  name: string;
  slug: string;

  category:
    | "Salt"
    | "Industrial Minerals & Rocks"
    | "Agricultural Products"
    | "Chemical, fillers & alkalis"
    | "Industrial Raw Materials"
    | "Industrial Byproducts & Slags";

  categorySlug:
    | "salt"
    | "industrial-minerals-rocks"
    | "agricultural-products"
    | "chemical-fillers-alkalis"
    | "industrial-raw-materials"
    | "industrial-byproducts-slags";

  shortDescription: string;
  fullPositioning?: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  importantNote: string;
  tradeSupport: string[];
}

export const IMPORTANT_PRODUCT_DISCLAIMER =
  "Final specifications, grade, packaging, availability and commercial terms are confirmed against the buyer's actual requirement before quotation.";

export const PRODUCTS_DATA: Product[] = [
  // =========================================================
  // SALT (8 PRODUCTS)
  // =========================================================

  {
    id: "salt-01",
    name: "Triple Refined Free Flow Iodised Salt",
    slug: "triple-refined-free-flow-iodised-salt",
    category: "Salt",
    categorySlug: "salt",
    shortDescription:
      "Refined iodised salt for specification-led B2B sourcing.",
    fullPositioning:
      "Triple Refined Free Flow Iodised Salt is offered through INFINITY EXIM for requirement-led B2B sourcing. Final specifications, grade, packaging, availability and commercial terms are confirmed against the buyer's actual requirement before quotation.",
    image: "/images/products/triple-refined-salt.webp",
    imageAlt:
      "Triple Refined Free Flow Iodised Salt sourced from India",
    featured: true,
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Requirement Sourcing",
      "Custom Packaging",
      "Export Documentation",
      "Freight Support",
    ],
  },

  {
    id: "salt-02",
    name: "30 Mesh Salt",
    slug: "30-mesh-salt",
    category: "Salt",
    categorySlug: "salt",
    shortDescription:
      "30 mesh salt for commercial and industrial sourcing enquiries.",
    image: "/images/products/30-mesh-salt.jpg",
    imageAlt: "30 Mesh Salt for industrial trade",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Commercial Grade Sourcing",
      "Bulk Container Handling",
      "Logistics Coordination",
    ],
  },

  {
    id: "salt-03",
    name: "Low Hardness Salt",
    slug: "low-hardness-salt",
    category: "Salt",
    categorySlug: "salt",
    shortDescription:
      "Low hardness salt for buyers with defined quality requirements.",
    image: "/images/products/low-hardness-salt.webp",
    imageAlt:
      "Low Hardness Salt for technical application requirements",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Quality Verification",
      "Sourcing Coordination",
      "Destination Freight",
    ],
  },

  {
    id: "salt-04",
    name: "Low pH Salt",
    slug: "low-ph-salt",
    category: "Salt",
    categorySlug: "salt",
    shortDescription:
      "Low pH salt for requirement-led sourcing.",
    image: "/images/products/low-ph-salt.jpg",
    imageAlt:
      "Low pH Salt for specification-led procurement",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Specification Confirmation",
      "Export Clearance",
      "Shipment Management",
    ],
  },

  {
    id: "salt-05",
    name: "Coarse Grade Salt",
    slug: "coarse-grade-salt",
    category: "Salt",
    categorySlug: "salt",
    shortDescription:
      "Coarse grade salt for commercial sourcing requirements.",
    image: "/images/products/coarse-salt.jpg",
    imageAlt:
      "Coarse Grade Salt for international trade",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Bulk Sourcing",
      "Port Logistics from Mundra",
      "Customs Support",
    ],
  },

  {
    id: "salt-06",
    name: "Pure Grade Salt",
    slug: "pure-grade-salt",
    category: "Salt",
    categorySlug: "salt",
    shortDescription:
      "Pure grade salt for buyers requiring a defined commercial grade.",
    image: "/images/products/pure-salt.webp",
    imageAlt:
      "Pure Grade Salt for international procurement",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Grade Verification",
      "Packaging Coordination",
      "Freight Booking",
    ],
  },

  {
    id: "salt-07",
    name: "Super Fine & Microfine Salt",
    slug: "super-fine-microfine-salt",
    category: "Salt",
    categorySlug: "salt",
    shortDescription:
      "Fine and microfine salt for specification-led procurement.",
    image: "/images/products/superfine-salt.jpg",
    imageAlt:
      "Super Fine and Microfine Salt sourced from India",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Particle Size Matching",
      "Sealed Bagging",
      "Cross-Border Logistics",
    ],
  },

  {
    id: "salt-08",
    name: "Crystalline Grade Salt",
    slug: "crystalline-grade-salt",
    category: "Salt",
    categorySlug: "salt",
    shortDescription:
      "Crystalline grade salt for international sourcing enquiries.",
    image: "/images/products/crystalline-salt.webp",
    imageAlt:
      "Crystalline Grade Salt for B2B export",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Crystal Sizing Coordination",
      "Export Sourcing",
      "Shipment Tracking",
    ],
  },

  // =========================================================
  // INDUSTRIAL MINERALS & ROCKS (8 PRODUCTS)
  // =========================================================

  {
    id: "min-01",
    name: "Bentonite",
    slug: "bentonite",
    category: "Industrial Minerals & Rocks",
    categorySlug: "industrial-minerals-rocks",
    shortDescription:
      "Bentonite for international B2B sourcing requirements.",
    image: "/images/products/bentonite.jpeg",
    imageAlt:
      "Bentonite industrial mineral sourced from India",
    featured: true,
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Requirement Analysis",
      "Jumbo Bag Packaging",
      "Mundra Port Loading",
      "Maritime Freight",
    ],
  },

  {
    id: "min-02",
    name: "Silica",
    slug: "silica",
    category: "Industrial Minerals & Rocks",
    categorySlug: "industrial-minerals-rocks",
    shortDescription:
      "Silica for requirement-led industrial sourcing.",
    image: "/images/products/silica-sand.webp",
    imageAlt:
      "Silica Sand mineral for industrial buyers",
    featured: true,
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Grain Size Specification",
      "Bulk Shipping",
      "Logistics Coordination",
    ],
  },

  {
    id: "min-03",
    name: "Kaolin",
    slug: "kaolin",
    category: "Industrial Minerals & Rocks",
    categorySlug: "industrial-minerals-rocks",
    shortDescription:
      "Kaolin grades sourced for ceramics, coatings, fillers, and industrial applications.",
    image: "/images/products/kaolin.jpeg",
    imageAlt:
      "Kaolin for industrial applications sourced from India",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Quality Review",
      "Paper / Jumbo Packaging",
      "Export Clearance",
    ],
  },

  {
    id: "min-04",
    name: "Feldspar",
    slug: "feldspar",
    category: "Industrial Minerals & Rocks",
    categorySlug: "industrial-minerals-rocks",
    shortDescription:
      "Feldspar for international commercial sourcing enquiries.",
    image: "/images/products/feldspar.webp",
    imageAlt:
      "Feldspar mineral for export from India",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Lumps & Powder Sourcing",
      "Container Booking",
      "Freight Handling",
    ],
  },

  {
    id: "min-05",
    name: "Ceramic Clay",
    slug: "ceramic-clay",
    category: "Industrial Minerals & Rocks",
    categorySlug: "industrial-minerals-rocks",
    shortDescription:
      "Ceramic clay sourced for pottery, tiles, sanitaryware, and ceramic manufacturing.",
    image: "/images/products/Ceramic-clay.jpg",
    imageAlt:
      "Ceramic Clay for commercial B2B procurement",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Commercial Grade Sourcing",
      "Custom Bagging",
      "Logistics Execution",
    ],
  },

  {
    id: "min-06",
    name: "Quartz",
    slug: "quartz",
    category: "Industrial Minerals & Rocks",
    categorySlug: "industrial-minerals-rocks",
    shortDescription:
      "Quartz for international mineral sourcing enquiries.",
    image: "/images/products/quartz.jpg",
    imageAlt:
      "Quartz mineral for international buyers",
    featured: true,
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Mesh / Size Selection",
      "Export Documentation",
      "Shipping & Freight",
    ],
  },

  {
    id: "min-07",
    name: "Granite",
    slug: "granite",
    category: "Industrial Minerals & Rocks",
    categorySlug: "industrial-minerals-rocks",
    shortDescription:
      "Granite sourced for construction, architectural, and commercial applications.",
    image: "/images/products/granite.png",
    imageAlt:
      "Granite for industrial applications",
    featured: true,
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Mesh / Size Selection",
      "Export Documentation",
      "Shipping & Freight",
    ],
  },

  {
    id: "min-08",
    name: "Bauxite",
    slug: "bauxite",
    category: "Industrial Minerals & Rocks",
    categorySlug: "industrial-minerals-rocks",
    shortDescription:
      "Bauxite sourced for alumina, industrial processing, and other commercial applications.",
    image: "/images/products/bauxite.jpg",
    imageAlt:
      "Bauxite for industrial applications",
    featured: true,
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Mesh / Size Selection",
      "Export Documentation",
      "Shipping & Freight",
    ],
  },

  // =========================================================
  // AGRICULTURAL PRODUCTS (6 PRODUCTS)
  // =========================================================

  {
    id: "agri-01",
    name: "Non-Basmati Rice",
    slug: "non-basmati-rice",
    category: "Agricultural Products",
    categorySlug: "agricultural-products",
    shortDescription:
      "Non-basmati rice for international agricultural sourcing.",
    image: "/images/products/non-basmati-rice.webp",
    imageAlt:
      "Non-Basmati Rice for global export",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Variety & Grain Matching",
      "PP/Jute Packaging Options",
      "Port Clearance & Ocean Freight",
    ],
  },

  {
    id: "agri-02",
    name: "Basmati Rice",
    slug: "basmati-rice",
    category: "Agricultural Products",
    categorySlug: "agricultural-products",
    shortDescription:
      "Basmati rice for international agricultural sourcing.",
    image: "/images/products/basmati-rice.jpg",
    imageAlt:
      "Premium Indian Basmati Rice for international trade",
    featured: true,
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Sourcing Coordination",
      "Branded/Unbranded Packaging",
      "Phytosanitary Clearance",
      "Freight Handling",
    ],
  },

  {
    id: "agri-03",
    name: "Groundnut (Peanuts)",
    slug: "groundnut-peanuts",
    category: "Agricultural Products",
    categorySlug: "agricultural-products",
    shortDescription:
      "Groundnut for international B2B agricultural sourcing.",
    image: "/images/products/groundnut.jpg",
    imageAlt:
      "Indian Groundnut Peanuts for agricultural export",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Bold & Java Variety Sourcing",
      "Moisture Control Packaging",
      "Logistics Coordination",
    ],
  },

  {
    id: "agri-04",
    name: "Foxnut (Makhana)",
    slug: "foxnut-makhana",
    category: "Agricultural Products",
    categorySlug: "agricultural-products",
    shortDescription:
      "Foxnut (makhana) for international sourcing enquiries.",
    image: "/images/products/makhana.webp",
    imageAlt:
      "Foxnut Makhana for international sourcing",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Grade Selection",
      "Volumetric Freight Optimization",
      "Customs Clearance",
    ],
  },

  {
    id: "agri-05",
    name: "Turmeric",
    slug: "turmeric",
    category: "Agricultural Products",
    categorySlug: "agricultural-products",
    shortDescription:
      "Turmeric for international agricultural sourcing requirements.",
    image: "/images/products/turmeric.webp",
    imageAlt:
      "Indian Turmeric Finger and Powder for export",
    featured: true,
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Finger & Powder Sourcing",
      "Moisture Proof Bagging",
      "Export Shipping",
    ],
  },

  {
    id: "agri-06",
    name: "Red Chilli",
    slug: "red-chilli",
    category: "Agricultural Products",
    categorySlug: "agricultural-products",
    shortDescription:
      "Red chilli for international agricultural sourcing requirements.",
    image: "/images/products/red-chilli.jpg",
    imageAlt:
      "Red Chilli for international commodity buyers",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Whole & Stemless Selection",
      "Specialized Jute/PP Bagging",
      "Containerized Transport",
    ],
  },

  // =========================================================
  // CHEMICAL, FILLERS & ALKALIS (4 PRODUCTS)
  // =========================================================

  {
    id: "chem-01",
    name: "Calcium Carbonate",
    slug: "calcium-carbonate",
    category: "Chemical, fillers & alkalis",
    categorySlug: "chemical-fillers-alkalis",
    shortDescription:
      "Calcium Carbonate for specification-led industrial and commercial sourcing.",
    image: "/images/products/calcium-carbonate.webp",
    imageAlt:
      "Calcium Carbonate for industrial and commercial applications",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Grade Specification",
      "Particle Size Coordination",
      "Bulk Packaging",
      "Export Logistics",
    ],
  },

  {
    id: "chem-02",
    name: "Sodium Carbonate",
    slug: "sodium-carbonate",
    category: "Chemical, fillers & alkalis",
    categorySlug: "chemical-fillers-alkalis",
    shortDescription:
      "Sodium Carbonate for specification-led industrial and commercial sourcing.",
    image: "/images/products/sodium-carbonate.webp",
    imageAlt:
      "Sodium Carbonate for industrial applications",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Grade Confirmation",
      "Packaging Coordination",
      "Container Loading",
      "Freight Support",
    ],
  },

  {
    id: "chem-03",
    name: "Sodium Chloride",
    slug: "sodium-chloride",
    category: "Chemical, fillers & alkalis",
    categorySlug: "chemical-fillers-alkalis",
    shortDescription:
      "Sodium Chloride for industrial and commercial sourcing requirements.",
    image: "/images/products/sodium-chloride.webp",
    imageAlt:
      "Sodium Chloride for industrial and commercial sourcing",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Specification Matching",
      "Bulk Sourcing",
      "Packaging Options",
      "Export Freight",
    ],
  },

  {
    id: "chem-04",
    name: "Calcium Chloride",
    slug: "calcium-chloride",
    category: "Chemical, fillers & alkalis",
    categorySlug: "chemical-fillers-alkalis",
    shortDescription:
      "Calcium Chloride for specification-led industrial and commercial applications.",
    image: "/images/products/calcium-chloride.jpg",
    imageAlt:
      "Calcium Chloride for industrial applications",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Grade Specification",
      "Packaging Coordination",
      "Container Handling",
      "Export Logistics",
    ],
  },

  // =========================================================
  // INDUSTRIAL RAW MATERIALS (3 PRODUCTS)
  // =========================================================

  {
    id: "raw-01",
    name: "Carbon",
    slug: "carbon",
    category: "Industrial Raw Materials",
    categorySlug: "industrial-raw-materials",
    shortDescription:
      "Carbon sourced for specification-led industrial and manufacturing requirements.",
    image: "/images/products/Carbon.jpg",
    imageAlt:
      "Industrial Carbon for manufacturing applications",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Specification Matching",
      "Bulk Sourcing",
      "Packaging Coordination",
      "Export Logistics",
    ],
  },

  {
    id: "raw-02",
    name: "Activated Carbon",
    slug: "activated-carbon",
    category: "Industrial Raw Materials",
    categorySlug: "industrial-raw-materials",
    shortDescription:
      "Activated Carbon for industrial processing and commercial sourcing requirements.",
    image: "/images/products/activated-carbon.webp",
    imageAlt:
      "Activated Carbon for industrial applications",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Grade Selection",
      "Quality Specification",
      "Packaging Options",
      "International Freight",
    ],
  },

  {
    id: "raw-03",
    name: "Carbon Black",
    slug: "carbon-black",
    category: "Industrial Raw Materials",
    categorySlug: "industrial-raw-materials",
    shortDescription:
      "Carbon Black for specification-led industrial and manufacturing applications.",
    image: "/images/products/carbon-black.webp",
    imageAlt:
      "Carbon Black for industrial manufacturing applications",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Grade Confirmation",
      "Technical Specification Review",
      "Bulk Packaging",
      "Export Shipping",
    ],
  },

  // =========================================================
  // INDUSTRIAL BYPRODUCTS & SLAGS (2 PRODUCTS)
  // =========================================================

  {
    id: "byproduct-01",
    name: "Copper Slag",
    slug: "copper-slag",
    category: "Industrial Byproducts & Slags",
    categorySlug: "industrial-byproducts-slags",
    shortDescription:
      "Copper slag sourced for specification-led industrial processing and commercial applications.",
    image: "/images/products/copper-slag.webp",
    imageAlt:
      "Copper Slag for industrial and commercial applications",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Grade & Specification Review",
      "Bulk Sourcing",
      "Packaging Coordination",
      "Export Freight",
    ],
  },

  {
    id: "byproduct-02",
    name: "Fly Ash",
    slug: "fly-ash",
    category: "Industrial Byproducts & Slags",
    categorySlug: "industrial-byproducts-slags",
    shortDescription:
      "Fly ash sourced for specification-led industrial processing and commercial requirements.",
    image: "/images/products/fly-ash.webp",
    imageAlt:
      "Fly Ash for industrial and construction applications",
    importantNote: IMPORTANT_PRODUCT_DISCLAIMER,
    tradeSupport: [
      "Specification Matching",
      "Bulk Handling",
      "Packaging Coordination",
      "Logistics & Freight",
    ],
  },
];


// =========================================================
// CATEGORY METADATA
// =========================================================

export const CATEGORIES_META = [
  {
    id: "01",
    label: "01 / SALT",
    title: "Salt",
    slug: "salt",
    description:
      "Refined and commercial salt varieties for specification-led B2B sourcing.",
    count: 8,
    ctaText: "Explore Salt",
    image: "/images/categories/salt-cat.jpg",
  },

  {
    id: "02",
    label: "02 / MINERALS",
    title: "Industrial Minerals & Rocks",
    slug: "industrial-minerals-rocks",
    description:
      "Industrial minerals and rocks sourced for specification-led B2B manufacturing, construction, and commercial applications.",
    count: 8,
    ctaText: "Explore Minerals",
    image: "/images/categories/minerals-cat.jpg",
  },

  {
    id: "03",
    label: "03 / AGRICULTURE",
    title: "Agricultural Products",
    slug: "agricultural-products",
    description:
      "Selected Indian agricultural commodities for international B2B sourcing.",
    count: 6,
    ctaText: "Explore Agriculture",
    image: "/images/categories/agri-cat.jpg",
  },

  {
    id: "04",
    label: "04 / CHEMICAL, FILLERS & ALKALIS",
    title: "Chemical, fillers & alkalis",
    slug: "chemical-fillers-alkalis",
    description:
      "Industrial chemicals, fillers and alkalis sourced for specification-led B2B applications.",
    count: 4,
    ctaText: "Explore Chemicals & Fillers",
    image: "/images/categories/chemical-cat.jpg",
  },

  {
    id: "05",
    label: "05 / INDUSTRIAL RAW MATERIALS",
    title: "Industrial Raw Materials",
    slug: "industrial-raw-materials",
    description:
      "Industrial raw materials sourced for specification-led B2B manufacturing and commercial requirements.",
    count: 3,
    ctaText: "Explore Raw Materials",
    image: "/images/categories/raw-materials-cat.jpg",
  },

  {
    id: "06",
    label: "06 / INDUSTRIAL BYPRODUCTS & SLAGS",
    title: "Industrial Byproducts & Slags",
    slug: "industrial-byproducts-slags",
    description:
      "Industrial byproducts and slags sourced for specification-led B2B processing and commercial applications.",
    count: 2,
    ctaText: "Explore Industrial Byproducts",
    image: "/images/categories/byproducts-cat.jpg",
  },
];