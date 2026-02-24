import AboutSection from "./AboutSection";
import MissionVisionPurpose from "./MissionVisionPurpose";
import CareerSection from "./CareerSection";
import StatsShowcase from "./StatsShowcase";


export const metadata = {
  title: "About Us | PRAVAL TECH",
  description: "Learn more about PRAVAL TECH and our values.",
};

export default function About() {
  return (
    <>
      <AboutSection />
      <MissionVisionPurpose />
      <CareerSection />
      <StatsShowcase />
    </>
  );
}
