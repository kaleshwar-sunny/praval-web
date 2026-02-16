import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import StrategyAccordion from "../../digital-engineering/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-engineering/WhyChooseUsSlider";
import IndustriesExpandable from "../../digital-engineering/IndustriesExpandable";
import RealTimeAnalyticsSection from "../RealTimeAnalyticsSection";

export default function RealtimeAnalyticsPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"RT"} title={"Real-Time Analytics"}/>
      <OverviewSection service={"RT"}/>
      <StrategyAccordion service={"RT"} />
      <IndustriesExpandable />
      <RealTimeAnalyticsSection />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}