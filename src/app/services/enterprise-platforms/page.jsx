import DigitalEngineeringHero from "../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../digital-engineering/OverviewSection";
import ServicesStack from "../digital-engineering/ServicesStack";
import OurEnterpriseCapabilities from "./OurEnterpriseCapabilities";
import ReadyToGetStartedSection from "../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../digital-engineering/WhyChooseUsSlider";
import HowItWorksSlider from "../digital-engineering/HowItWorksSlider";
import IndustriesExpandable from "../digital-engineering/IndustriesExpandable";

export default function EnterprisePlatformsPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"EP"} title={"Enterprise Platforms"}/>
      <OverviewSection service={"EP"}/>
      <ServicesStack service={"EP"}/>
      <OurEnterpriseCapabilities />
      <HowItWorksSlider />
      <IndustriesExpandable />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}