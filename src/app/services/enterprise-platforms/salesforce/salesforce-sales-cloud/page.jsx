import DigitalEngineeringHero from "../../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../../digital-acceleration/OverviewSection";
import ReadyToGetStartedSection from "../../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../../digital-acceleration/WhyChooseUsSlider";
import BenefitsHoverSection from "../../../data-analytics/BenefitsHoverSection";
import BusinessAdaptationSection from "../../BusinessAdaptationSection";
import PartnerWithPraval from "../../PartnerWithPraval";
import EinsteinAccordionSection from "../../EinsteinAccordionSection";

export default function SalesforceSalesCloudPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SSC"} title={"Salesforce Sales Cloud"}/>
      <OverviewSection service={"SSC"}/>
      <BusinessAdaptationSection />
      <PartnerWithPraval />
      <BenefitsHoverSection service={"SSC"} />
      <div className="my-6"></div>
      <WhyChooseUsSlider />
      <ReadyToGetStartedSection />
      <EinsteinAccordionSection service={"faq"} />
    </>
  );
}