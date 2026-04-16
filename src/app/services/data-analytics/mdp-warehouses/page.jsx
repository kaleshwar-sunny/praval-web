import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import StrategyAccordion from "../../digital-acceleration/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import BenefitsHoverSection from "../BenefitsHoverSection";
import EinsteinAccordionSection from "../../enterprise-platforms/EinsteinAccordionSection";

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
      <EinsteinAccordionSection service={"faq"} />
    </>
  );
}