import DigitalEngineeringHero from "../../../digital-engineering/DigitalEngineeringHero";
import ReadyToGetStartedSection from "../../../digital-engineering/ReadyToGetStartedSection";
import BenefitsHoverSection from "../../../data-analytics/BenefitsHoverSection";
import ServicesStack from "../../../digital-engineering/ServicesStack";
import ServicesGrid from "../../ServicesGrid";
import EinsteinFeatures from "../../EinsteinFeatures";

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
      <div className="my-6"></div>
    </>
  );
}