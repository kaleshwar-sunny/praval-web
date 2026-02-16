import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import StrategyAccordion from "../../digital-engineering/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-engineering/WhyChooseUsSlider";
import IndustriesExpandable from "../../digital-engineering/IndustriesExpandable";
import HowItWorksSlider from "../../digital-engineering/HowItWorksSlider";

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