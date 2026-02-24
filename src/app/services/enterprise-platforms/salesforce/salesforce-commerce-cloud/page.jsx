import DigitalEngineeringHero from "../../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../../digital-engineering/OverviewSection";
import ReadyToGetStartedSection from "../../../digital-engineering/ReadyToGetStartedSection";
import ServicesStack from "../../../digital-engineering/ServicesStack";
import ServicesGrid from "../../ServicesGrid";
import WhyChooseUsSlider from "../../../digital-engineering/WhyChooseUsSlider";

export default function SalesforceCommerceCloudPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SCC"} title={"Salesforce Commerce Cloud"}/>
      <OverviewSection service={"SCC"}/>
      <ServicesStack service={"SCC"}/>
      <ServicesGrid service={"SCC"} title={"Key Features Of Salesforce Commerce Cloud"} />
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}