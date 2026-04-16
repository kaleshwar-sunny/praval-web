import DigitalEngineeringHero from "../../../digital-acceleration/DigitalEngineeringHero";
import ReadyToGetStartedSection from "../../../digital-acceleration/ReadyToGetStartedSection";
import BenefitsHoverSection from "../../../data-analytics/BenefitsHoverSection";
import ServicesStack from "../../../digital-acceleration/ServicesStack";
import ServicesGrid from "../../ServicesGrid";
import EinsteinFeatures from "../../EinsteinFeatures";
import EinsteinAccordionSection from "../../EinsteinAccordionSection";

export default function SalesforceServiceCloudPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SFSC"} title={"Salesforce Service Cloud"}/>
      <ServicesStack service={"SFSC"}/>
      <ServicesGrid service={"SFSC"} title={"Key Features Of Salesforce Service Cloud"} />
      <EinsteinFeatures />
      <BenefitsHoverSection service={"SFSC"} />
      <div className="my-6"></div>
      <ReadyToGetStartedSection />
      <EinsteinAccordionSection service={"faq"} />
    </>
  );
}