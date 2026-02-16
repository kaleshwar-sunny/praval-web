import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import StrategyAccordion from "../../digital-engineering/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-engineering/WhyChooseUsSlider";
import IndustriesExpandable from "../../digital-engineering/IndustriesExpandable";
import BenefitsHoverSection from "..//BenefitsHoverSection";

export default function StrategyConsultingPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SC"} title={"Strategy Consulting"}/>
      <OverviewSection service={"SC"}/>
      <StrategyAccordion service={"SC"} />
      <IndustriesExpandable />
      <BenefitsHoverSection />
      <div className="my-6"></div>
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}