import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import StrategyAccordion from "../../digital-acceleration/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";
import IndustriesExpandable from "../../digital-acceleration/IndustriesExpandable";

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