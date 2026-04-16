import DigitalEngineeringHero from "../../../digital-acceleration/DigitalEngineeringHero";
import ReadyToGetStartedSection from "../../../digital-acceleration/ReadyToGetStartedSection";
import ServicesStack from "../../../digital-acceleration/ServicesStack";
import ServicesGrid from "../../ServicesGrid";
import WhyChooseUsSlider from "../../../digital-acceleration/WhyChooseUsSlider";
import TechnologyFocusedExpertise from "../../../data-analytics/TechnologyFocusedExpertise";
import OurEnterpriseCapabilities from "../../OurEnterpriseCapabilities";
import EinsteinAccordionSection from "../../EinsteinAccordionSection";

export default function SalesforceMarketingCloudPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SMC"} title={"Salesforce Marketing Cloud"}/>
      <ServicesStack service={"SMC"}/>
      <ServicesGrid service={"SMC"} title={"Key Features Of Salesforce Marketing Cloud"} />
      <OurEnterpriseCapabilities service={"SMC"} />
      <TechnologyFocusedExpertise service={"SMC"} />
      <WhyChooseUsSlider />
      <ReadyToGetStartedSection />
      <EinsteinAccordionSection service={"faq"} />
    </>
  );
}