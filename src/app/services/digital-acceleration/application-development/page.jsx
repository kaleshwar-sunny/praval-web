import DigitalEngineeringHero from "../DigitalEngineeringHero";
import OverviewSection from "../OverviewSection";
import StrategyAccordion from "../StrategyAccordion";
import ReadyToGetStartedSection from "../ReadyToGetStartedSection";
import WhyChooseUsSlider from "../WhyChooseUsSlider";

export default function ApplicationDevelopmentPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"AD"} title={"Application Development"}/>
      <OverviewSection service={"AD"}/>
      <StrategyAccordion />
      <div className="my-6"></div>
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}