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
  mg1: "https://res.cloudinary.com/de4pazo51/image/upload/v1782390929/ChatGPT_Image_Jun_25_2026_at_06_02_25_PM_w9uwyb.png",
  mg2: "https://res.cloudinary.com/de4pazo51/image/upload/v1782390928/ChatGPT_Image_Jun_25_2026_at_06_01_10_PM_t8lhbq.png",
  mg3: "https://res.cloudinary.com/de4pazo51/image/upload/v1782390928/ChatGPT_Image_Jun_25_2026_at_05_25_45_PM_xo0s7f.png",
  mg4: "https://res.cloudinary.com/de4pazo51/image/upload/v1782390927/ChatGPT_Image_Jun_25_2026_at_05_23_36_PM_txlsli.png",
  mg5: "https://res.cloudinary.com/de4pazo51/image/upload/v1782391435/ChatGPT_Image_Jun_25_2026_at_06_04_41_PM_vjgdzo.png",
  gg1: "https://res.cloudinary.com/de4pazo51/image/upload/v1782975641/ChatGPT_Image_Jul_1_2026_03_57_31_PM_daxhzr.png",
  gg2: "https://res.cloudinary.com/de4pazo51/image/upload/v1782975641/ChatGPT_Image_Jul_1_2026_04_01_19_PM_tdj5uq.png",
  gg3: "https://res.cloudinary.com/de4pazo51/image/upload/v1782975640/ChatGPT_Image_Jul_1_2026_03_52_30_PM_gzi6sw.png",
  gg4: "https://res.cloudinary.com/de4pazo51/image/upload/v1782975639/ChatGPT_Image_Jul_1_2026_03_06_39_PM_gzeohx.png",
  gg5: "https://res.cloudinary.com/de4pazo51/image/upload/v1782975639/ChatGPT_Image_Jul_1_2026_03_02_22_PM_pyfjvf.png",
  gg6: "https://res.cloudinary.com/de4pazo51/image/upload/v1782975638/ChatGPT_Image_Jul_1_2026_03_04_41_PM_alqizx.png",
  gg7: "https://res.cloudinary.com/de4pazo51/image/upload/v1782975638/ChatGPT_Image_Jul_1_2026_03_01_07_PM_vtlhhd.png",
  rl1: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976050/ChatGPT_Image_Jul_1_2026_04_46_28_PM_fncqwr.png",
  rl2: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976048/ChatGPT_Image_Jul_1_2026_04_25_35_PM_jtij0z.png",
  rl3: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976048/ChatGPT_Image_Jul_1_2026_04_37_41_PM_dlnhc0.png",
  rl4: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976047/ChatGPT_Image_Jul_1_2026_04_20_15_PM_fwcezr.png",
  mh1: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976475/ChatGPT_Image_Jun_30_2026_04_51_18_PM_hvhyml.png",
  mh2: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976474/ChatGPT_Image_Jun_30_2026_04_42_32_PM_ctoc0v.png",
  mh3: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976473/ChatGPT_Image_Jun_30_2026_04_38_16_PM_kp7i11.png",
  mh4: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976473/ChatGPT_Image_Jun_30_2026_04_35_28_PM_thqqoj.png",
  mh5: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976472/01_d8ejwp.png",
  jb1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599960/23_he1qnc.png",
  jb2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599959/22_vsgupz.png",
  jb3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599937/21_jn60eh.png",
  jb4: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599934/20_ocg4iz.png",
  jb5: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599932/19_ybojti.png",
  op1: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976929/06_uupxyc.png",
  op2: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976929/05_anqtzi.png",
  op3: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976926/03_tvy2lk.png",
  op4: "https://res.cloudinary.com/de4pazo51/image/upload/v1782976925/02_dt8olj.png",
  nk1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599260/9_tewqy6.png",
  nk2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599258/8_ndguzf.png",
  nk3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599257/13_xyrubg.png",
  nk4: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599256/12_d1jgwu.png",
  nk5: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599255/11_dpnlkv.png",
  nk6: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599253/10_ywsyxg.png",
  km1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599041/7_xcliyc.png",
  km2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599036/6_nariwe.png",
  km3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599034/5_ge57gd.png",
  km4: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599034/4_cemkge.png",
  km5: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599033/3_c8ntwt.png",
  km6: "https://res.cloudinary.com/de4pazo51/image/upload/v1783599033/2_u6xjlr.png",
  rd1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783324913/01_xka0xp.png",
  rd2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783324914/02_xmtrli.png",
  rd3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783324914/03_knqbtl.png",
  rd4: "https://res.cloudinary.com/de4pazo51/image/upload/v1783324913/04_cnvyyy.png",
  rd5: "https://res.cloudinary.com/de4pazo51/image/upload/v1783324914/05_kw3ujq.png",
  rd6: "https://res.cloudinary.com/de4pazo51/image/upload/v1783324914/06_mjo4sk.png",
  em1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783577859/ChatGPT_Image_Jul_7_2026_09_24_49_AM_jltwqm.png",
  em2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783577859/ChatGPT_Image_Jul_7_2026_09_08_02_AM_p3qsci.png",
  em3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783577859/ChatGPT_Image_Jul_7_2026_09_16_04_AM_immcvd.png",
  em4: "https://res.cloudinary.com/de4pazo51/image/upload/v1783577858/ChatGPT_Image_Jul_7_2026_09_14_12_AM_mxst66.png",
  sb1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783578284/1_qtfqhz.png",
  sb2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783578285/2_grusnu.png",
  sb3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783578285/3_d1mr5n.png",
  ph1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783579263/1_zokhc1.png",
  ph2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783579274/2_neipds.png",
  ph3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783579459/4_uwv240.png",
  ph4: "https://res.cloudinary.com/de4pazo51/image/upload/v1783579493/6_w0tkdv.png",
  ph5: "https://res.cloudinary.com/de4pazo51/image/upload/v1783579494/7_jd3am6.png",
  ih1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783579763/1_esnszm.png",
  ih2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783579885/3_vjmj9e.png",
  ih3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783579887/4_kg3rxt.png",
  ih4: "https://res.cloudinary.com/de4pazo51/image/upload/v1783579889/5_iqaylh.png",
  ih5: "https://res.cloudinary.com/de4pazo51/image/upload/v1783579891/6_aujl85.png",
  ld1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580360/1_hczsdy.png",
  ld2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580362/2_qcgcbs.png",
  ld3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580365/3_wqq4bk.png",
  ld4: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580367/4_ing6nq.png",
  ld5: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580370/5_pejjgm.png",
  ld6: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580372/6_if83lk.png",
  tg1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580654/ChatGPT_Image_Jul_1_2026_06_02_13_PM_kregmz.png",
  tg2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580659/ChatGPT_Image_Jul_1_2026_06_07_23_PM_zitcxt.png",
  tg3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580661/ChatGPT_Image_Jul_2_2026_08_45_49_AM_h3q64d.png",
  tg4: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580664/ChatGPT_Image_Jul_2_2026_08_54_03_AM_depr01.png",
  zb1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783581050/ChatGPT_Image_Jul_7_2026_05_05_09_PM_oqljsu.png",
  zb2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783581055/ChatGPT_Image_Jul_7_2026_05_14_15_PM_g9u6on.png",
  zb3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783581057/ChatGPT_Image_Jul_7_2026_05_15_37_PM_njyk4o.png",
  zb4: "https://res.cloudinary.com/de4pazo51/image/upload/v1783581060/closeup_keyse8.png",
  zb5: "https://res.cloudinary.com/de4pazo51/image/upload/v1783581062/mic_evrinm.png",
  zb6: "https://res.cloudinary.com/de4pazo51/image/upload/v1783581065/mic2_ad7dk5.png",
  eg1: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580030/01_n3kk8i.png",
  eg2: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580034/2_h16b53.png",
  eg3: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580223/3_vgn7rz.png",
  eg4: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580225/4_gusfov.png",
  eg5: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580226/5_pbkzvb.png",
  eg6: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580228/6_e7tin0.png",
  eg7: "https://res.cloudinary.com/de4pazo51/image/upload/v1783580030/01_n3kk8i.png",
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
  "scarlet-symphony": {
    id: "scarlet-symphony",
    name: "Kesari Mahal",
    tagline: "Passionate Elegance",
    category: "wedding",
    categoryLabel: "Luxury Wedding Invitation Box",
    description:
      "The Kesari Mahal collection is a masterpiece of passionate design and luxurious detail. From its rich textured exterior to the carefully curated surprises inside, it sets a bold and elegant tone for a celebration of love.",
    whatsInside: [
      "2 Bespoke Wedding Invitation Cards",
      "Personalized Keepsake Box",
      "Artisanal Truffle Assortment",
      "Premium Textured Presentation Box",
    ],
    closedImage: IMG.km5,
    openImage: IMG.km2,
    gallery: [IMG.km1, IMG.km2, IMG.km3, IMG.km4, IMG.km5, IMG.km6],
  },
  "ethereal-bloom": {
    id: "ethereal-bloom",
    name: "Neel Kamal",
    tagline: "Timeless Romance",
    category: "wedding",
    categoryLabel: "Luxury Wedding Invitation Box",
    description:
      "Discover the perfect harmony of romance and luxury with the Neel Kamal collection. Delicate textures and premium finishes create an unforgettable first impression for your special day.",
    whatsInside: [
      "2 Premium Textured Invitation Cards",
      "Artisan Wax Seal Kit",
      "Gourmet Macaron Assortment",
      "Luxury Velvet Presentation Box",
    ],
    closedImage: IMG.nk4,
    openImage: IMG.nk3,
    gallery: [IMG.nk1, IMG.nk2, IMG.nk3, IMG.nk4, IMG.nk5, IMG.nk6],
  },
  "velvet-noir": {
    id: "velvet-noir",
    name: "Rani Bahar",
    tagline: "Dark Sophistication",
    category: "wedding",
    categoryLabel: "Luxury Wedding Invitation Box",
    description:
      "A bold statement in deep black velvet — our Rani Bahar box exudes dark sophistication with gold foil detailing and a magnetic closure that opens to reveal premium invitation cards, artisan keepsakes, and gourmet chocolates.",
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
    name: "Gulal Mahal",
    tagline: "Warm Opulence",
    category: "wedding",
    categoryLabel: "Premium Wedding Invitation Box",
    description:
      "Draped in warm amber-toned satin, the Gulal Mahal collection radiates warmth and opulence. Each element is hand-finished with intricate embossing and paired with luxurious accessories that elevate the unboxing into a ceremony of its own.",
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
    name: "Swarna Dwar",
    tagline: "Pristine Elegance",
    category: "wedding",
    categoryLabel: "Luxury Wedding Invitation Box",
    description:
      "Pure, pristine, and timeless — the Swarna Dwar box is wrapped in pearl-white fabric with delicate lace accents. Designed for those who appreciate understated luxury, every detail whispers elegance.",
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
    name: "Mor Jodi",
    tagline: "Gilded Mystery",
    category: "diwali",
    categoryLabel: "Diwali Premium Gift Box",
    description:
      "Where midnight meets gold — this collection combines deep navy tones with brushed gold accents for a truly regal experience. A perfect blend of mystery and majesty for celebrations that demand grandeur.",
    whatsInside: [
      "2 Gold-Leaf Wedding Invitation Cards",
      "Premium Honey Jar with Wax Seal",
      "Handmade Chocolate Truffles Box",
      "Navy & Gold Rigid Presentation Box",
    ],
    closedImage: IMG.mg4,
    openImage: IMG.mg2,
    gallery: [IMG.mg1, IMG.mg2, IMG.mg3, IMG.mg4, IMG.mg5],
  },
  "champagne-mist": {
    id: "champagne-mist",
    name: "Jaimala Bloom",
    tagline: "Subtle Radiance",
    category: "wedding",
    categoryLabel: "Luxury Wedding Invitation Box",
    description:
      "Soft champagne hues meet iridescent shimmer in our most ethereal collection. The Jaimala Bloom box captures light and attention in equal measure, making every invitation feel like a celebration before the celebration.",
    whatsInside: [
      "2 Shimmer-Finish Invitation Cards",
      "Rose Gold Keepsake Candle",
      "Assorted Macaron Gift Box",
      "Champagne Shimmer Presentation Box",
    ],
    closedImage: IMG.jb3,
    openImage: IMG.jb5,
    gallery: [IMG.jb1, IMG.jb2, IMG.jb3, IMG.jb4, IMG.jb5],
  },
  "obsidian-pearl": {
    id: "obsidian-pearl",
    name: "Lal Bagh",
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
    closedImage: IMG.op1,
    openImage: IMG.op4,
    gallery: [IMG.op1, IMG.op2, IMG.op3, IMG.op4],
  },
  "ivory-haveli": {
    id: "ivory-haveli",
    name: "Ivory Haveli",
    tagline: "A Royal Procession",
    category: "wedding",
    categoryLabel: "Luxury Wedding Invitation Box",
    description:
      "Rising like a palace roof, the Ivory Haveli box is hand-illustrated with a vibrant wedding procession set against patchwork textile panels. Lift its gold-cornered lid to find a fold-out jharokha mirror painted with a bride and groom, a gilded compartment tray, and ceremonial gold-handled jars cradled in cream satin — an heirloom entrance for your invitation.",
    whatsInside: [
      "Fold-Out Hand-Painted Jharokha Mirror Panel",
      "2 Gold-Handled Ceremonial Kumkum Jars",
      "Gold Compartment Tray with Cream Satin Lining",
      "Chalet-Roof Presentation Box with Patchwork Textile Print",
    ],
    closedImage: IMG.ih1,
    openImage: IMG.ih4,
    gallery: [IMG.ih1, IMG.ih2, IMG.ih4, IMG.ih3, IMG.ih5],
  },
  "lotus-darbar": {
    id: "lotus-darbar",
    name: "Lotus Darbar",
    tagline: "A Blessed Union",
    category: "wedding",
    categoryLabel: "Luxury Wedding Invitation Box",
    description:
      "Wrapped in a hand-painted baraat procession and set on gilded filigree feet, the Lotus Darbar box crowns its lid with a blooming lotus medallion. Open it to reveal an LED-illuminated diorama of a divine wedding court, framed by draped canopies and golden bells — a radiant stage for your invitation, ceremonial keepsakes, and a beribboned gift box.",
    whatsInside: [
      "LED-Illuminated Hand-Painted Wedding Court Diorama",
      "2 Gold-Rimmed Ceremonial Sindoor Compacts",
      "Scalloped Wedding Invitation Card with Blessing Verse",
      "Ribbon-Wrapped Keepsake Gift Box",
      "Hand-Painted Baraat Procession Box on Gilded Feet",
    ],
    closedImage: IMG.ld1,
    openImage: IMG.ld2,
    gallery: [IMG.ld1, IMG.ld5, IMG.ld2, IMG.ld3, IMG.ld6, IMG.ld4],
  },
  "elephant-gate": {
    id: "elephant-gate",
    name: "Hathi Gate",
    tagline: "A Royal Welcome",
    category: "wedding",
    categoryLabel: "Luxury Wedding Invitation Box",
    description:
      "A teal lacquered cabinet hand-painted with a royal elephant procession, mandala medallions, and a gilded haveli skyline, fitted with a brass carry handle and a scalloped jharokha archway. Swing open its gate-like doors to a shrine niche cradling a golden Ganesh idol among faux roses and tea-lights, with a pull-out drawer below revealing gourmet chocolate pralines wrapped in golden satin — a majestic entrance for your wedding invitation.",
    whatsInside: [
      "Golden Ganesh Idol Niche with Rose Accents",
      "Pull-Out Drawer with 9-Cavity Chocolate Praline Tray",
      "Golden Satin Wrap Cloth",
      "Hand-Painted Royal Elephant Procession Exterior",
      "Brass Carry Handle & Scalloped Jharokha Archway",
    ],
    closedImage: IMG.eg7,
    openImage: IMG.eg5,
    gallery: [IMG.eg7, IMG.eg1, IMG.eg5, IMG.eg2, IMG.eg4, IMG.eg3, IMG.eg6],
  },

  // ─── Diwali Boxes & Gifting ───
  "golden-glow": {
    id: "golden-glow",
    name: "Mangal Mandir",
    tagline: "Festive Radiance",
    category: "diwali",
    categoryLabel: "Diwali Premium Gift Box",
    description:
      "Celebrate the festival of lights with our Mangal Mandir box — a radiant ensemble of handpicked sweets, artisan diyas, and premium dry fruits, all nestled within a gold-embossed rigid box that becomes a keepsake long after the festivities.",
    whatsInside: [
      "Assorted Premium Mithai Box",
      "2 Handcrafted Brass Diyas",
      "Premium Dry Fruit Collection",
      "Gold-Embossed Rigid Gift Box",
    ],
    closedImage: IMG.gg7,
    openImage: IMG.gg1,
    gallery: [IMG.gg1, IMG.gg2, IMG.gg3, IMG.gg4, IMG.gg5, IMG.gg6, IMG.gg7],
  },
  "rangoli-luxe": {
    id: "rangoli-luxe",
    name: "Sindoori Mandir",
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
    closedImage: IMG.rl1,
    openImage: IMG.rl2,
    gallery: [IMG.rl1, IMG.rl2, IMG.rl3, IMG.rl4],
  },
  "marigold-heritage": {
    id: "marigold-heritage",
    name: "Genda Haveli",
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
    closedImage: IMG.mh1,
    openImage: IMG.mh2,
    gallery: [IMG.mh1, IMG.mh2, IMG.mh3, IMG.mh4, IMG.mh5],
  },
  "rajwada-darbar": {
    id: "rajwada-darbar",
    name: "Rajwada Darbar",
    tagline: "A Palace Unveiled",
    category: "diwali",
    categoryLabel: "Diwali Luxury Gift Box",
    description:
      "Open the doors to a royal Rajasthani courtyard — this collection unfolds into a hand-illustrated palace diorama complete with a gleaming brass Ganesh idol, dancing courtiers, and gilded elephants standing guard. A showstopping keepsake that turns every Diwali gifting moment into grand darbar theatre.",
    whatsInside: [
      "Brass Ganesh Idol",
      "2 Hand-Painted Brass Containers",
      "Pair of Brass Elephant Figurines",
      "Decorative Pooja Bells & Tea-Light Holders",
      "Pop-Up Palace Diorama Gift Box",
    ],
    closedImage: IMG.rd4,
    openImage: IMG.rd6,
    gallery: [IMG.rd1, IMG.rd2, IMG.rd3, IMG.rd4, IMG.rd5, IMG.rd6],
  },
  "ember-mosaic": {
    id: "ember-mosaic",
    name: "Angaar Mosaic",
    tagline: "Jeweled Radiance",
    category: "diwali",
    categoryLabel: "Diwali Luxury Gift Box",
    description:
      "A smoked-glass trunk shimmering with a hand-set copper glitter mosaic, fastened by a gilded clasp set with a black gemstone. Inside, plush velvet and wine satin cradle hand-painted elephant motif keepsake tins and a gourmet chocolate roll wrapped in a jali-cut gold sleeve — a box as covetable as its contents.",
    whatsInside: [
      "3 Hand-Painted Elephant Motif Keepsake Tins",
      "Gourmet Chocolate Roll in Jali-Cut Gold Sleeve",
      "Wine Satin & Velvet Lined Interior",
      "Smoked Glass Box with Copper Glitter Mosaic Panels",
    ],
    closedImage: IMG.em2,
    openImage: IMG.em1,
    gallery: [IMG.em2, IMG.em1, IMG.em4, IMG.em3],
  },
  "saffron-bagh": {
    id: "saffron-bagh",
    name: "Saffron Bagh",
    tagline: "Blooming Heritage",
    category: "diwali",
    categoryLabel: "Diwali Luxury Gift Box",
    description:
      "Inspired by the miniature gardens of Rajasthani palace art, the Saffron Bagh box unfolds in saffron-gold lacquer to reveal hand-painted floral panels in teal and marigold. A multi-tier reveal houses four hand-painted storage tins, a gourmet chocolate mould tray, and a miniature floral art keepsake box — nestled in gold silk for a Diwali gifting experience as rich in craft as it is in flavour.",
    whatsInside: [
      "4 Hand-Painted Floral Motif Storage Tins",
      "6-Cavity Gourmet Chocolate Mould Tray",
      "Miniature Floral Art Keepsake Box",
      "Multi-Tier Saffron Lacquered Presentation Box",
    ],
    closedImage: IMG.sb1,
    openImage: IMG.sb2,
    gallery: [IMG.sb1, IMG.sb2, IMG.sb3],
  },
  "peacock-haveli": {
    id: "peacock-haveli",
    name: "Peacock Haveli",
    tagline: "Gilded Courtyard",
    category: "diwali",
    categoryLabel: "Diwali Luxury Gift Box",
    description:
      "Set upon a gilded wooden pedestal, the Peacock Haveli box opens like a palace gate — its ivory lacquered lid hand-painted with a peacock-flanked haveli courtyard, giving way within to a mirrored pair of peacocks rendered in rich rust and gold. Nestled in gold satin, floral-motif glass jars and premium sweet trays complete a gifting experience fit for royalty.",
    whatsInside: [
      "4 Hand-Painted Floral Motif Glass Jars",
      "2 Premium Sweet & Namkeen Trays",
      "Hand-Painted Peacock Courtyard Interior Artwork",
      "Gilded Wooden Pedestal Presentation Box",
    ],
    closedImage: IMG.ph2,
    openImage: IMG.ph5,
    gallery: [IMG.ph2, IMG.ph1, IMG.ph5, IMG.ph3, IMG.ph4],
  },
  "topaz-geode": {
    id: "topaz-geode",
    name: "Sitara Geode",
    tagline: "Gilded Facets",
    category: "diwali",
    categoryLabel: "Diwali Premium Gift Box",
    description:
      "A study in quiet glamour — the Sitara Geode box pairs smoked amber glass with a lid inset of raw crystal facets that catch the light like candlelight through cut topaz. Trimmed in gold and lined in ivory velvet with a satin ribbon pull, it's an elegant keepsake box for jewellery, sweets, or whatever treasure your Diwali gifting calls for.",
    whatsInside: [
      "Crystal-Embedded Glass Lid",
      "Smoked Topaz Glass Body with Gold Trim",
      "Ivory Velvet Lined Interior",
      "Satin Ribbon Pull & Gold Button Clasp",
    ],
    closedImage: IMG.tg1,
    openImage: IMG.tg4,
    gallery: [IMG.tg1, IMG.tg2, IMG.tg3, IMG.tg4],
  },
  "zardozi-bloom": {
    id: "zardozi-bloom",
    name: "Zardozi Bloom",
    tagline: "Threads of Gold",
    category: "diwali",
    categoryLabel: "Diwali Luxury Gift Box",
    description:
      "An ivory box carved with fine jaali fretwork and crowned by a hand-embroidered paisley silk pillow-top, cinched in crystal-studded gold straps. Open its gilded clasp to a deep burgundy velvet interior, where a jaali-cut tray cradles amber glass jars, a coordinating embroidered keepsake box, and a gourmet chocolate mould tray — a heirloom-grade centrepiece for Diwali gifting.",
    whatsInside: [
      "Hand-Embroidered Paisley Silk Pillow-Top Lid",
      "Carved Ivory Jaali Fretwork Panels",
      "4 Amber Glass Floral-Lid Jars",
      "Gourmet Chocolate Mould Tray in Matching Embroidered Box",
      "Burgundy Velvet Lined Interior",
    ],
    closedImage: IMG.zb6,
    openImage: IMG.zb5,
    gallery: [IMG.zb6, IMG.zb1, IMG.zb5, IMG.zb2, IMG.zb3, IMG.zb4],
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
