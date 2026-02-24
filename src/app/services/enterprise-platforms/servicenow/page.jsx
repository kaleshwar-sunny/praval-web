import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import ServicesStack from "../../digital-engineering/ServicesStack";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-engineering/WhyChooseUsSlider";
import ServicesGrid from "../ServicesGrid";

export default function ServiceNowPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SN"} title={"ServiceNow"}/>
      <OverviewSection service={"SN"}/>
      <ServicesStack service={"SN"}/>
      <ServicesGrid service={"SN"} title={"Our Offerings"} />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}