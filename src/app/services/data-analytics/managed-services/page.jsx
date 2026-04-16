import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import StrategyAccordion from "../../digital-acceleration/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";
import IndustriesExpandable from "../../digital-acceleration/IndustriesExpandable";
import BenefitsHoverSection from "../BenefitsHoverSection";
import HowItWorksSlider from "../../digital-acceleration/HowItWorksSlider";

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