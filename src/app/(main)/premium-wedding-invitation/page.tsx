"use client";

import { getProductsByCategory } from "@/data/products";
import CategoryPage from "../../components/CategoryPage";

const HERO_IMAGE =
  "https://res.cloudinary.com/de4pazo51/image/upload/v1781861915/WhatsApp_Image_2026-06-19_at_15.05.10_1_cythps.jpg";

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
