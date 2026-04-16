import DigitalEngineeringHero from "../services/digital-acceleration/DigitalEngineeringHero";
import GenAISection from "./GenAISection";
import ReadyToGetStartedSection from "../services/digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../services/digital-acceleration/WhyChooseUsSlider";

export default function GenAIPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"GAI"} title={"Gen AI"}/>
      <GenAISection />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}