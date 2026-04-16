import DigitalEngineeringHero from "../DigitalEngineeringHero";
import OverviewSection from "../OverviewSection";
import StrategyAccordion from "../StrategyAccordion";
import ReadyToGetStartedSection from "../ReadyToGetStartedSection";
import WhyChooseUsSlider from "../WhyChooseUsSlider";
import LeverageSection from "../LeverageSection";

export default function LowCodePage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"AZ"} title={"Azure"}/>
      <OverviewSection service={"AZ"}/>
      <StrategyAccordion service={"AZ"} />
      <div className="my-6"></div>
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}