import DigitalEngineeringHero from "../../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../../digital-acceleration/OverviewSection";
import ReadyToGetStartedSection from "../../../digital-acceleration/ReadyToGetStartedSection";
import ServicesStack from "../../../digital-acceleration/ServicesStack";
import ServicesGrid from "../../ServicesGrid";
import WhyChooseUsSlider from "../../../digital-acceleration/WhyChooseUsSlider";
import EinsteinAccordionSection from "../../EinsteinAccordionSection";

export default function SalesforceCommerceCloudPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SCC"} title={"Salesforce Commerce Cloud"}/>
      <OverviewSection service={"SCC"}/>
      <ServicesStack service={"SCC"}/>
      <ServicesGrid service={"SCC"} title={"Key Features Of Salesforce Commerce Cloud"} />
      <WhyChooseUsSlider />
      <ReadyToGetStartedSection />
      <EinsteinAccordionSection service={"faq"} />
    </>
  );
}