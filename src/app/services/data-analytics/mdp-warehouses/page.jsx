import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import StrategyAccordion from "../../digital-engineering/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import BenefitsHoverSection from "..//BenefitsHoverSection";

export default function MDPPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"MDP"} title={"Modern Data Platforms"}/>
      <OverviewSection service={"MDP"}/>
      <StrategyAccordion service={"MDP"} />
      <div className="my-6"></div>
      <BenefitsHoverSection />
      <div className="my-6"></div>
      <ReadyToGetStartedSection />
      <div className="my-6"></div>
    </>
  );
}