import DigitalEngineeringHero from "../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../digital-engineering/OverviewSection";
import ServicesStack from "../digital-engineering/ServicesStack";
import TechnologyFocusedExpertise from "./TechnologyFocusedExpertise";
import ReadyToGetStartedSection from "../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../digital-engineering/WhyChooseUsSlider";
import HowItWorksSlider from "../digital-engineering/HowItWorksSlider";
import IndustriesExpandable from "../digital-engineering/IndustriesExpandable";

export default function DataAnalyticsPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"DA"} title={"Data Analytics"}/>
      <OverviewSection service={"DA"}/>
      <ServicesStack service={"DA"}/>
      <TechnologyFocusedExpertise />
      <HowItWorksSlider />
      <IndustriesExpandable />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}