import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import StrategyAccordion from "../../digital-acceleration/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";
import IndustriesExpandable from "../../digital-acceleration/IndustriesExpandable";
import HowItWorksSlider from "../../digital-acceleration/HowItWorksSlider";

export default function ImplementationPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"IM"} title={"Implementation"}/>
      <OverviewSection service={"IM"}/>
      <StrategyAccordion service={"IM"} />
      <HowItWorksSlider />
      <IndustriesExpandable />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}