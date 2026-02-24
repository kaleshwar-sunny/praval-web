import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import StrategyAccordion from "../../digital-engineering/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-engineering/WhyChooseUsSlider";

export default function OraclePage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"OR"} title={"Oracle"}/>
      <OverviewSection service={"OR"}/>
      <StrategyAccordion service={"OR"} />
      <div className="my-6"></div>
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}