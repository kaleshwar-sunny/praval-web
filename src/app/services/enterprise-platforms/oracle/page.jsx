import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import StrategyAccordion from "../../digital-acceleration/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";

export default function OraclePage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"OR"} title={"Oracle"} desc={"Modernize core systems with a pragmatic, scalable approach designed for speed, stability, and long-term growth."}/>
      <OverviewSection service={"OR"}/>
      <StrategyAccordion service={"OR"} />
      <div className="my-6"></div>
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}