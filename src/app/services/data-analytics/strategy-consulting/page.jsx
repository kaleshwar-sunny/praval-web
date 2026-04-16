import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import StrategyAccordion from "../../digital-acceleration/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";
import IndustriesExpandable from "../../digital-acceleration/IndustriesExpandable";
import BenefitsHoverSection from "../BenefitsHoverSection";
import EinsteinAccordionSection from "../../enterprise-platforms/EinsteinAccordionSection"

export default function StrategyConsultingPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SC"} title={"Strategy Consulting"}/>
      <OverviewSection service={"SC"}/>
      <StrategyAccordion service={"SC"} />
      <IndustriesExpandable />
      <BenefitsHoverSection />
      <WhyChooseUsSlider />
      <ReadyToGetStartedSection />
      <EinsteinAccordionSection service={"faq"} />
    </>
  );
}