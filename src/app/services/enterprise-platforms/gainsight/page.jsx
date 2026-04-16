import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import ServicesStack from "../../digital-acceleration/ServicesStack";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";

export default function GainsightPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"GS"} title={"Gainsight"}/>
      <OverviewSection service={"GS"}/>
      <ServicesStack service={"GS"}/>
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}