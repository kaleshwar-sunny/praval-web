import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import StrategyAccordion from "../../digital-engineering/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-engineering/WhyChooseUsSlider";
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