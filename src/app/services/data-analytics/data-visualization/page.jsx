import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import ServicesStack from "../../digital-engineering/ServicesStack";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-engineering/WhyChooseUsSlider";
import BenefitsHoverSection from "../BenefitsHoverSection";
import IndustriesExpandable from "../../digital-engineering/IndustriesExpandable";
import StrategyAccordion from "../../digital-engineering/StrategyAccordion";

export default function DataVisualizationPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"DV"} title={"Data Visualization"}/>
      <OverviewSection service={"DV"}/>
      <StrategyAccordion service={"DV"} />
      <IndustriesExpandable />
      <BenefitsHoverSection />
      <div className="my-6"></div>
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}