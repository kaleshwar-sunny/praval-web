import DigitalEngineeringHero from "../../../digital-engineering/DigitalEngineeringHero";
import ReadyToGetStartedSection from "../../../digital-engineering/ReadyToGetStartedSection";
import ServicesStack from "../../../digital-engineering/ServicesStack";
import ServicesGrid from "../../ServicesGrid";
import WhyChooseUsSlider from "../../../digital-engineering/WhyChooseUsSlider";
import TechnologyFocusedExpertise from "../../../data-analytics/TechnologyFocusedExpertise";
import OurEnterpriseCapabilities from "../../../enterprise-platforms/OurEnterpriseCapabilities";

export default function SalesforceMarketingCloudPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SMC"} title={"Salesforce Marketing Cloud"}/>
      <ServicesStack service={"SMC"}/>
      <ServicesGrid service={"SMC"} title={"Key Features Of Salesforce Marketing Cloud"} />
      <OurEnterpriseCapabilities service={"SMC"} />
      <TechnologyFocusedExpertise service={"SMC"} />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}