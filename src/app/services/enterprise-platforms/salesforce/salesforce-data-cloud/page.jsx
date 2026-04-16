import DigitalEngineeringHero from "../../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../../digital-acceleration/OverviewSection";
import ReadyToGetStartedSection from "../../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../../digital-acceleration/WhyChooseUsSlider";
import OurEnterpriseCapabilities from "../../../enterprise-platforms/OurEnterpriseCapabilities";
import BenefitsHoverSection from "../../../data-analytics/BenefitsHoverSection";
import EinsteinAccordionSection from "../../EinsteinAccordionSection";

export default function SalesforceDataCloudPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SDC"} title={"Salesforce Data Cloud"}/>
      <OverviewSection service={"SDC"}/>
      <OurEnterpriseCapabilities service={"SDC"} />
      <BenefitsHoverSection service={"SDC"} />
      <WhyChooseUsSlider />
      <ReadyToGetStartedSection />
      <EinsteinAccordionSection service={"faq"} />
    </>
  );
}