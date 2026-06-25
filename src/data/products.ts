// ── Image Constants ──

const IMG = {
  closed: "https://res.cloudinary.com/de4pazo51/image/upload/v1781696657/box_F_sample_bp6c2s.png",
  open: "https://res.cloudinary.com/de4pazo51/image/upload/v1782378484/box-2.2_ecj267.png",
  s21: "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.1_kofhcn.png",
  s22: "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.2_p6edgp.png",
  s23: "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.3_hrfbhm.png",
  s24: "https://res.cloudinary.com/de4pazo51/image/upload/v1782381226/box-2.4_itwesd.png",
  s26: "https://res.cloudinary.com/de4pazo51/image/upload/v1782381227/box-2.6_p9gliw.png",
  wa: "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_wyo6jf.jpg",
  b1: "https://res.cloudinary.com/de4pazo51/image/upload/v1782385102/box-1_f5iq8n.png",
  b11: "https://res.cloudinary.com/de4pazo51/image/upload/v1782385102/box-1.1_zncjlq.png",
  b12: "https://res.cloudinary.com/de4pazo51/image/upload/v1782385102/box-1.2_rmiqoj.png",
  b13: "https://res.cloudinary.com/de4pazo51/image/upload/v1782389745/ChatGPT_Image_Jun_25_2026_at_05_13_53_PM_azq8ze.png",
  b14: "https://res.cloudinary.com/de4pazo51/image/upload/v1782389745/ChatGPT_Image_Jun_25_2026_at_05_10_55_PM_u1nxtr.png",
} as const;

// ── Types ──

export type ProductCategory = "wedding" | "diwali";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  whatsInside: string[];
  closedImage: string;
  openImage: string;
  gallery: string[];
}

// ── Products ──

export const PRODUCTS: Record<string, Product> = {
  // ─── Wedding Invitation Boxes ───
  "velvet-noir": {
    id: "velvet-noir",
    name: "Velvet Noir",
    tagline: "Dark Sophistication",
    category: "wedding",
    categoryLabel: "Luxury Wedding Invitation Box",
    description:
      "A bold statement in deep black velvet — our Velvet Noir box exudes dark sophistication with gold foil detailing and a magnetic closure that opens to reveal premium invitation cards, artisan keepsakes, and gourmet chocolates.",
    whatsInside: [
      "2 Premium Wedding Invitation Cards",
      "2 Elegant Keepsake Jars",
      "Premium Assorted Chocolate Box",
      "Luxury Rigid Presentation Box",
    ],
    closedImage: IMG.closed,
    openImage: IMG.open,
    gallery: [IMG.closed, IMG.open, IMG.s26, IMG.wa],
  },
  "royal-amber": {
    id: "royal-amber",
    name: "Royal Amber",
    tagline: "Warm Opulence",
    category: "wedding",
    categoryLabel: "Premium Wedding Invitation Box",
    description:
      "Draped in warm amber-toned satin, the Royal Amber collection radiates warmth and opulence. Each element is hand-finished with intricate embossing and paired with luxurious accessories that elevate the unboxing into a ceremony of its own.",
    whatsInside: [
      "2 Embossed Wedding Invitation Cards",
      "Premium Dry Fruit Jar with Brass Lid",
      "Satin Pouch with Scented Potpourri",
      "Luxury Amber-Toned Presentation Box",
    ],
    closedImage: IMG.s21,
    openImage: IMG.s22,
    gallery: [IMG.s21, IMG.s22, IMG.s23],
  },
  "ivory-luxe": {
    id: "ivory-luxe",
    name: "Ivory Luxe",
    tagline: "Pristine Elegance",
    category: "wedding",
    categoryLabel: "Luxury Wedding Invitation Box",
    description:
      "Pure, pristine, and timeless — the Ivory Luxe box is wrapped in pearl-white fabric with delicate lace accents. Designed for those who appreciate understated luxury, every detail whispers elegance.",
    whatsInside: [
      "2 Foil-Pressed Wedding Invitation Cards",
      "2 Crystal-Cut Keepsake Jars",
      "Belgian Truffle Collection",
      "Pearl-White Magnetic Closure Box",
    ],
    closedImage: IMG.b1,
    openImage: "https://res.cloudinary.com/de4pazo51/image/upload/v1782389745/ChatGPT_Image_Jun_25_2026_at_05_10_55_PM_u1nxtr.png",
    gallery: [IMG.b1, IMG.b11, IMG.b12, IMG.b13, IMG.b14],
  },
  "midnight-gold": {
    id: "midnight-gold",
    name: "Midnight Gold",
    tagline: "Gilded Mystery",
    category: "wedding",
    categoryLabel: "Premium Wedding Invitation Box",
    description:
      "Where midnight meets gold — this collection combines deep navy tones with brushed gold accents for a truly regal experience. A perfect blend of mystery and majesty for celebrations that demand grandeur.",
    whatsInside: [
      "2 Gold-Leaf Wedding Invitation Cards",
      "Premium Honey Jar with Wax Seal",
      "Handmade Chocolate Truffles Box",
      "Navy & Gold Rigid Presentation Box",
    ],
    closedImage: IMG.s24,
    openImage: IMG.s21,
    gallery: [IMG.s21, IMG.s24, IMG.closed, IMG.open, IMG.wa],
  },
  "champagne-mist": {
    id: "champagne-mist",
    name: "Champagne Mist",
    tagline: "Subtle Radiance",
    category: "wedding",
    categoryLabel: "Luxury Wedding Invitation Box",
    description:
      "Soft champagne hues meet iridescent shimmer in our most ethereal collection. The Champagne Mist box captures light and attention in equal measure, making every invitation feel like a celebration before the celebration.",
    whatsInside: [
      "2 Shimmer-Finish Invitation Cards",
      "Rose Gold Keepsake Candle",
      "Assorted Macaron Gift Box",
      "Champagne Shimmer Presentation Box",
    ],
    closedImage: IMG.s26,
    openImage: IMG.s22,
    gallery: [IMG.s22, IMG.s26, IMG.open, IMG.closed, IMG.wa],
  },
  "obsidian-pearl": {
    id: "obsidian-pearl",
    name: "Obsidian Pearl",
    tagline: "Contrast & Charm",
    category: "wedding",
    categoryLabel: "Premium Wedding Invitation Box",
    description:
      "A striking contrast of deep obsidian black and luminous pearl white — this collection is for those who embrace bold aesthetics. Each piece is a study in duality, combining raw edge with refined craftsmanship.",
    whatsInside: [
      "2 Dual-Tone Wedding Invitation Cards",
      "Pearl-Finish Keepsake Jar",
      "Artisan Dark Chocolate Collection",
      "Obsidian Black Rigid Presentation Box",
    ],
    closedImage: IMG.s23,
    openImage: IMG.s24,
    gallery: [IMG.s23, IMG.s21, IMG.s24, IMG.closed, IMG.open],
  },

  // ─── Diwali Boxes & Gifting ───
  "golden-glow": {
    id: "golden-glow",
    name: "Golden Glow",
    tagline: "Festive Radiance",
    category: "diwali",
    categoryLabel: "Diwali Premium Gift Box",
    description:
      "Celebrate the festival of lights with our Golden Glow box — a radiant ensemble of handpicked sweets, artisan diyas, and premium dry fruits, all nestled within a gold-embossed rigid box that becomes a keepsake long after the festivities.",
    whatsInside: [
      "Assorted Premium Mithai Box",
      "2 Handcrafted Brass Diyas",
      "Premium Dry Fruit Collection",
      "Gold-Embossed Rigid Gift Box",
    ],
    closedImage: IMG.closed,
    openImage: IMG.open,
    gallery: [IMG.closed, IMG.open, IMG.s26, IMG.wa],
  },
  "rangoli-luxe": {
    id: "rangoli-luxe",
    name: "Rangoli Luxe",
    tagline: "Artisan Tradition",
    category: "diwali",
    categoryLabel: "Diwali Luxury Gift Box",
    description:
      "Inspired by the vibrant art of rangoli — this collection blends traditional motifs with modern luxury. Each box features hand-embroidered fabric, curated sweets, scented candles, and a personally engraved nameplate.",
    whatsInside: [
      "Luxury Assorted Sweet Box",
      "Scented Soy Candle Set (3 pcs)",
      "Personalized Engraved Nameplate",
      "Hand-Embroidered Fabric Gift Box",
    ],
    closedImage: IMG.s21,
    openImage: IMG.s22,
    gallery: [IMG.s21, IMG.s22, IMG.s23],
  },
  "marigold-heritage": {
    id: "marigold-heritage",
    name: "Marigold Heritage",
    tagline: "Royal Festivity",
    category: "diwali",
    categoryLabel: "Diwali Premium Gift Box",
    description:
      "A tribute to the marigold — the flower of celebration. This collection features rich saffron-toned packaging, premium chocolates, silver-coated almonds, and a set of decorative tea-light holders for an unforgettable Diwali gifting experience.",
    whatsInside: [
      "Premium Belgian Chocolate Box",
      "Silver-Coated Almond Collection",
      "Decorative Tea-Light Holder Set",
      "Saffron-Toned Luxury Presentation Box",
    ],
    closedImage: IMG.b1,
    openImage: IMG.b11,
    gallery: [IMG.b1, IMG.b11, IMG.b12],
  },
  "diya-opulence": {
    id: "diya-opulence",
    name: "Diya Opulence",
    tagline: "Luminous Luxury",
    category: "diwali",
    categoryLabel: "Diwali Luxury Gift Box",
    description:
      "Let your Diwali gift shine brighter than the rest. The Diya Opulence box features a curated selection of artisanal sweets, premium dry fruits, handcrafted clay diyas, and a luxury fragrance — all presented in a velvet-lined magnetic box.",
    whatsInside: [
      "Artisanal Indian Sweet Selection",
      "Premium Mixed Dry Fruit Jar",
      "4 Handcrafted Clay Diyas",
      "Velvet-Lined Magnetic Gift Box",
    ],
    closedImage: IMG.s24,
    openImage: IMG.s21,
    gallery: [IMG.s21, IMG.s24, IMG.closed, IMG.open, IMG.wa],
  },
  "sparkle-noir": {
    id: "sparkle-noir",
    name: "Sparkle Noir",
    tagline: "Modern Festive",
    category: "diwali",
    categoryLabel: "Diwali Premium Gift Box",
    description:
      "A modern take on Diwali gifting — sleek black packaging meets festive shimmer. This collection is designed for the contemporary celebrator, featuring premium spirits-friendly pairings, gourmet snacks, and a luxury scented candle.",
    whatsInside: [
      "Gourmet Snack & Nut Collection",
      "Luxury Scented Candle (Rose Oud)",
      "Premium Dark Chocolate Truffles",
      "Matte Black Rigid Presentation Box",
    ],
    closedImage: IMG.s26,
    openImage: IMG.s22,
    gallery: [IMG.s22, IMG.s26, IMG.open, IMG.closed, IMG.wa],
  },
  "lotus-bloom": {
    id: "lotus-bloom",
    name: "Lotus Bloom",
    tagline: "Sacred Elegance",
    category: "diwali",
    categoryLabel: "Diwali Luxury Gift Box",
    description:
      "Inspired by the sacred lotus — symbol of purity and prosperity. The Lotus Bloom box features pastel pink packaging, handmade sweets, a copper puja thali, and premium rose-infused treats, creating a deeply spiritual yet luxurious gifting experience.",
    whatsInside: [
      "Handmade Sweet Selection",
      "Copper Puja Thali Set",
      "Rose-Infused Turkish Delights",
      "Lotus-Embossed Pastel Gift Box",
    ],
    closedImage: IMG.s23,
    openImage: IMG.s24,
    gallery: [IMG.s23, IMG.s21, IMG.s24, IMG.closed, IMG.open],
  },
};

// ── Helpers ──

export function getProductsByCategory(category: ProductCategory): Product[] {
  return Object.values(PRODUCTS).filter((p) => p.category === category);
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  const current = PRODUCTS[currentId];
  if (!current) return Object.values(PRODUCTS).slice(0, limit);

  return Object.values(PRODUCTS)
    .filter((p) => p.id !== currentId)
    .sort((a, b) => {
      if (a.category === current.category && b.category !== current.category) return -1;
      if (a.category !== current.category && b.category === current.category) return 1;
      return 0;
    })
    .slice(0, limit);
}

export function getProduct(slug: string): Product {
  return (
    PRODUCTS[slug] ?? {
      id: "default",
      name: "Luxury Invitation Box",
      tagline: "Premium Craftsmanship",
      category: "wedding" as ProductCategory,
      categoryLabel: "Luxury Wedding Invitation Box",
      description:
        "Our Luxury Wedding Invitation Box transforms a traditional invitation into an unforgettable experience. Thoughtfully curated with elegant details, premium keepsakes, and gourmet indulgence.",
      whatsInside: [
        "2 Premium Wedding Invitation Cards",
        "2 Elegant Keepsake Jars",
        "Premium Assorted Chocolate Box",
        "Luxury Rigid Presentation Box",
      ],
      closedImage: IMG.closed,
      openImage: IMG.open,
      gallery: [IMG.closed, IMG.open, IMG.s21, IMG.s26, IMG.wa],
    }
  );
}
