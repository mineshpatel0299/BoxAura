"use client";

import { getProductsByCategory } from "@/data/products";
import CategoryPage from "../../components/CategoryPage";

const HERO_IMAGE =
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781865563/box_F_sample-2.1_kofhcn.png";

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
