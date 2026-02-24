import DigitalEngineeringHero from "../../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../../digital-engineering/OverviewSection";
import ReadyToGetStartedSection from "../../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../../digital-engineering/WhyChooseUsSlider";
import OurEnterpriseCapabilities from "../../../enterprise-platforms/OurEnterpriseCapabilities";
import BenefitsHoverSection from "../../../data-analytics/BenefitsHoverSection";

export default function SalesforceDataCloudPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SDC"} title={"Salesforce Data Cloud"}/>
      <OverviewSection service={"SDC"}/>
      <OurEnterpriseCapabilities service={"SDC"} />
      <BenefitsHoverSection service={"SDC"} />
      <div className="my-6"></div>
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}