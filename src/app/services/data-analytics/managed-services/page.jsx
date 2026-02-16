import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import StrategyAccordion from "../../digital-engineering/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-engineering/WhyChooseUsSlider";
import IndustriesExpandable from "../../digital-engineering/IndustriesExpandable";
import BenefitsHoverSection from "../BenefitsHoverSection";
import HowItWorksSlider from "../../digital-engineering/HowItWorksSlider";

export default function ManagedServicesPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"MS"} title={"Managed Services"}/>
      <OverviewSection service={"MS"}/>
      <StrategyAccordion service={"MS"} />
      <IndustriesExpandable />
      <BenefitsHoverSection />
      <HowItWorksSlider />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}