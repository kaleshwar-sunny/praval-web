import DigitalEngineeringHero from "../DigitalEngineeringHero";
import OverviewSection from "../OverviewSection";
import StrategyAccordion from "../StrategyAccordion";
import ReadyToGetStartedSection from "../ReadyToGetStartedSection";
import WhyChooseUsSlider from "../WhyChooseUsSlider";
import LeverageSection from "../LeverageSection";

export default function LowCodePage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"LC"} title={"Low Code No Code"}/>
      <OverviewSection service={"LC"}/>
      <StrategyAccordion service={"LC"} />
      <LeverageSection />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}