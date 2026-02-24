import DigitalEngineeringHero from "../../../digital-engineering/DigitalEngineeringHero";
import OverviewSection from "../../../digital-engineering/OverviewSection";
import ReadyToGetStartedSection from "../../../digital-engineering/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../../digital-engineering/WhyChooseUsSlider";
import BenefitsHoverSection from "../../../data-analytics/BenefitsHoverSection";
import BusinessAdaptationSection from "../../BusinessAdaptationSection";
import PartnerWithPraval from "../../PartnerWithPraval";

export default function SalesforceSalesCloudPage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SSC"} title={"Salesforce Sales Cloud"}/>
      <OverviewSection service={"SSC"}/>
      <BusinessAdaptationSection />
      <PartnerWithPraval />
      <BenefitsHoverSection service={"SSC"} />
      <div className="my-6"></div>
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}