"use client";

import { getProductsByCategory } from "@/data/products";
import CategoryPage from "../../components/CategoryPage";

const HERO_IMAGE =
  "https://pub-37c7085b3a964a70aee9d7586ef459c4.r2.dev/box_F_sample-2.1_kofhcn.png";

export default function DiwaliBoxesGifting() {
  const products = getProductsByCategory("diwali");

  return (
    <CategoryPage
      title="Diwali Boxes"
      titleItalic="& Gifting"
      subtitle="Festive Luxury"
      description="Celebrate the festival of lights with curated gift boxes — artisan sweets, premium dry fruits, handcrafted diyas, and luxurious presentation"
      products={products}
      heroImage={HERO_IMAGE}
    />
  );
}
