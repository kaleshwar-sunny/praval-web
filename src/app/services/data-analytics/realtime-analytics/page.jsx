import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import StrategyAccordion from "../../digital-acceleration/StrategyAccordion";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";
import IndustriesExpandable from "../../digital-acceleration/IndustriesExpandable";
import RealTimeAnalyticsSection from "../RealTimeAnalyticsSection";
import EinsteinAccordionSection from "../../enterprise-platforms/EinsteinAccordionSection";


export default function RealtimeAnalyticsPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"RT"} title={"Real-Time Analytics"}/>
      <OverviewSection service={"RT"}/>
      <StrategyAccordion service={"RT"} />
      <IndustriesExpandable />
      <RealTimeAnalyticsSection />
      <WhyChooseUsSlider />
      <ReadyToGetStartedSection />
      <EinsteinAccordionSection service={"faq"} />
    </>
  );
}