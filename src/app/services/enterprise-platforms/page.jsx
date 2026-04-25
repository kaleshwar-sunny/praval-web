import DigitalEngineeringHero from "../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../digital-acceleration/OverviewSection";
import ServicesStack from "../digital-acceleration/ServicesStack";
import OurEnterpriseCapabilities from "./OurEnterpriseCapabilities";
import ReadyToGetStartedSection from "../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../digital-acceleration/WhyChooseUsSlider";
import HowItWorksSlider from "../digital-acceleration/HowItWorksSlider";
import IndustriesExpandable from "../digital-acceleration/IndustriesExpandable";

export default function EnterprisePlatformsPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"EP"} title={"Platforms"} desc={"We enable organizations to optimize and extend their platform investments — improving efficiency, enhancing user experience, and delivering consistent performance at scale."}/>
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