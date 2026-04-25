import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import ServicesStack from "../../digital-acceleration/ServicesStack";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";
import BenefitsHoverSection from "../BenefitsHoverSection";
import IndustriesExpandable from "../../digital-acceleration/IndustriesExpandable";
import StrategyAccordion from "../../digital-acceleration/StrategyAccordion";
import EinsteinAccordionSection from "../../enterprise-platforms/EinsteinAccordionSection";

export default function DataVisualizationPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"DV"} title={"Data Visualization"}/>
      <OverviewSection service={"DV"}/>
      <StrategyAccordion service={"DV"} />
      <IndustriesExpandable />
      <BenefitsHoverSection />
      <WhyChooseUsSlider />
      <ReadyToGetStartedSection />
      <EinsteinAccordionSection service={"faq"} category="Data Visualization" />
    </>
  );
}