"use client";

import { getProductsByCategory } from "@/data/products";
import CategoryPage from "../../components/CategoryPage";

const HERO_IMAGE =
  "https://pub-37c7085b3a964a70aee9d7586ef459c4.r2.dev/WhatsApp_Image_2026-06-19_at_15.05.10_1_cythps.jpg";

export default function PremiumWeddingInvitation() {
  const products = getProductsByCategory("wedding");

  return (
    <CategoryPage
      title="Premium Wedding"
      titleItalic="Invitation"
      subtitle="Handcrafted Luxury"
      description="Transform your wedding invitation into an unforgettable experience — premium keepsakes, gourmet indulgence, and artisan craftsmanship in every box"
      products={products}
      heroImage={HERO_IMAGE}
    />
  );
}
