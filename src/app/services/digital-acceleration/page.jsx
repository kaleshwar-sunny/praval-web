import DigitalEngineeringHero from "./DigitalEngineeringHero";
import OverviewSection from "./OverviewSection";
import ServicesStack from "./ServicesStack";
import CapabilitiesTabs from "./CapabilitiesTabs";
import ReadyToGetStartedSection from "./ReadyToGetStartedSection";
import WhyChooseUsSlider from "./WhyChooseUsSlider";
import HowItWorksSlider from "./HowItWorksSlider";
import IndustriesExpandable from "./IndustriesExpandable";

export default function DigitalEngineeringPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"DE"} title={"Digital Acceleration"} desc={"Outcome-driven digital acceleration designed to modernize your core and deliver real business impact—without disruption."}/>
      <OverviewSection service={"DE"}/>
      <ServicesStack service={"DE"} />
      <CapabilitiesTabs />
      <HowItWorksSlider />
      <IndustriesExpandable />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}
