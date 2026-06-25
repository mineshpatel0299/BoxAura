import {
  HeroSection,
  CategoryCards,
  Philosophy,
  Collections,
  ClientExperiences,
  Catalog,
  FeaturedProducts,
  GoldClubCTA,
  Stats,
} from "./components/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Philosophy />
      <Catalog />
      <FeaturedProducts />
      {/* <Stats /> */}
      {/* <CategoryCards /> */}
      {/* <Collections /> */}
      <ClientExperiences />
      <GoldClubCTA />
    </>
  );
}
