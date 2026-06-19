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
      <Philosophy />
      <Catalog />
      {/* <CategoryCards /> */}
      {/* <Collections /> */}
      <ClientExperiences />
      <GoldClubCTA />
    </>
  );
}
