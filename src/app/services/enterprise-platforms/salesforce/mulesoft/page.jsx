import DigitalEngineeringHero from "../../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../../digital-acceleration/OverviewSection";
import ReadyToGetStartedSection from "../../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../../digital-acceleration/WhyChooseUsSlider";
import TechnologyFocusedExpertise from "../../../data-analytics/TechnologyFocusedExpertise";
import EinsteinAccordionSection from "../../EinsteinAccordionSection";

export default function MulesoftPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"ML"} title={"Mulesoft"}/>
      <OverviewSection service={"ML"}/>
      <TechnologyFocusedExpertise service={"ML"} />
      <WhyChooseUsSlider />
      <ReadyToGetStartedSection />
      <EinsteinAccordionSection service={"faq"} />
    </>
  );
}