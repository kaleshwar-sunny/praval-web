import DigitalEngineeringHero from "../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../digital-engineering/OverviewSection";
import ServicesStack from "../../digital-engineering/ServicesStack";
import ReadyToGetStartedSection from "../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-engineering/WhyChooseUsSlider";

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