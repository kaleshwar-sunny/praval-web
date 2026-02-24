import DigitalEngineeringHero from "../../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../../digital-engineering/OverviewSection";
import ReadyToGetStartedSection from "../../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../../digital-engineering/WhyChooseUsSlider";
import TechnologyFocusedExpertise from "../../../data-analytics/TechnologyFocusedExpertise";

export default function MulesoftPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"ML"} title={"Mulesoft"}/>
      <OverviewSection service={"ML"}/>
      <TechnologyFocusedExpertise service={"ML"} />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}