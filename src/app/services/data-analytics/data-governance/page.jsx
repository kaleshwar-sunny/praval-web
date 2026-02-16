import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import StrategyAccordion from "../../digital-engineering/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-engineering/WhyChooseUsSlider";
import IndustriesExpandable from "../../digital-engineering/IndustriesExpandable";
import BenefitsHoverSection from "../BenefitsHoverSection";
import HowItWorksSlider from "../../digital-engineering/HowItWorksSlider";

export default function dataGovernancePage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"DG"} title={"Data Governance"}/>
      <OverviewSection service={"DG"}/>
      <StrategyAccordion service={"DG"} />
      <div className="my-6"></div>
      <BenefitsHoverSection />
      <div className="my-6"></div>
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}