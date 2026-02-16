import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import StrategyAccordion from "../../digital-engineering/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-engineering/WhyChooseUsSlider";
import IndustriesExpandable from "../../digital-engineering/IndustriesExpandable";

export default function AiMlPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"AI"} title={"AI & ML"}/>
      <OverviewSection service={"AI"}/>
      <StrategyAccordion service={"AI"} />
      <IndustriesExpandable />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}