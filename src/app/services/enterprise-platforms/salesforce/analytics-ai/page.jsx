import DigitalEngineeringHero from "../../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../../digital-engineering/OverviewSection";
import ReadyToGetStartedSection from "../../../digital-engineering/ReadyToGetStartedSection";
import OurEnterpriseCapabilities from "../../../enterprise-platforms/OurEnterpriseCapabilities";
import TechnologyFocusedExpertise from "../../../data-analytics/TechnologyFocusedExpertise";
import EinsteinAccordionSection from "../../EinsteinAccordionSection";

export default function AnalyticsAIPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"AA"} title={"Analytics & AI(Einstein)"}/>
      <OverviewSection service={"AA"}/>
      <OurEnterpriseCapabilities service={"AA"} />
      <TechnologyFocusedExpertise service={"AA"} />
      <EinsteinAccordionSection />
      <ReadyToGetStartedSection />
      <div className="my-6"></div>
    </>
  );
}