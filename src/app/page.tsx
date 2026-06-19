import {
  HeroSection,
  CategoryCards,
  Philosophy,
  Collections,
  ClientExperiences,
  Catalog,
  GoldClubCTA,
} from "./components/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Catalog />
      <Philosophy />
      {/* <CategoryCards /> */}
      {/* <Collections /> */}
      <ClientExperiences />
      <GoldClubCTA />
    </>
  );
}
