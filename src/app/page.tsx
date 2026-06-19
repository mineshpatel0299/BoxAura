import {
  HeroSection,
  CategoryCards,
  Philosophy,
  Collections,
  ClientExperiences,
  Catalog,
  GoldClubCTA,
  Stats,
} from "./components/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Philosophy />
      <Catalog />
      <Stats />
      {/* <CategoryCards /> */}
      {/* <Collections /> */}
      <ClientExperiences />
      <GoldClubCTA />
    </>
  );
}
