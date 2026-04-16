import DigitalEngineeringHero from "../DigitalEngineeringHero";
import QualityEngineeringServices from "../QualiyEngineeringServices";
import ReadyToGetStartedSection from "../ReadyToGetStartedSection";
import WhyChooseUsSlider from "../WhyChooseUsSlider";
import RealTimeAnalyticsSection from "../../data-analytics/RealTimeAnalyticsSection";

export default function ApplicationDevelopmentPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"QE"} title={"Quality Engineering"}/>
      <QualityEngineeringServices />
      <RealTimeAnalyticsSection service="QE" />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}