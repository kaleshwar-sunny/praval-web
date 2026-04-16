import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import StrategyAccordion from "../../digital-acceleration/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";
import CloudInfrastructureSection from "../CloudInfrastructureSection";

export default function CloudModernizationPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"CM"} title={"Cloud Modernization"}/>
      <OverviewSection service={"CM"}/>
      <StrategyAccordion service={"CM"} />
      <CloudInfrastructureSection />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}