import DigitalEngineeringHero from "../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../digital-acceleration/OverviewSection";
import ServicesStack from "../digital-acceleration/ServicesStack";
import TechnologyFocusedExpertise from "./TechnologyFocusedExpertise";
import ReadyToGetStartedSection from "../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../digital-acceleration/WhyChooseUsSlider";
import HowItWorksSlider from "../digital-acceleration/HowItWorksSlider";
import IndustriesExpandable from "../digital-acceleration/IndustriesExpandable";

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