import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import StrategyAccordion from "../../digital-acceleration/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";
import BenefitsHoverSection from "../BenefitsHoverSection";
import EinsteinAccordionSection from "../../enterprise-platforms/EinsteinAccordionSection";

export default function dataGovernancePage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"DG"} title={"Data Governance"}/>
      <OverviewSection service={"DG"}/>
      <StrategyAccordion service={"DG"} />
      <div className="my-6"></div>
      <BenefitsHoverSection />
      <WhyChooseUsSlider />
      <ReadyToGetStartedSection />
      <EinsteinAccordionSection service={"faq"} category={"Data Governance"} />
    </>
  );
}