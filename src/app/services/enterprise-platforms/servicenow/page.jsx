import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import ServicesStack from "../../digital-acceleration/ServicesStack";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";
import ServicesGrid from "../ServicesGrid";

export default function ServiceNowPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SN"} title={"ServiceNow"} desc={"Accelerate ServiceNow adoption by aligning workflows with business priorities—automating processes, improving visibility, and enabling smarter decisions across your enterprise."}/>
      <OverviewSection service={"SN"}/>
      <ServicesStack service={"SN"}/>
      <ServicesGrid service={"SN"} title={"Our Offerings"} />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}