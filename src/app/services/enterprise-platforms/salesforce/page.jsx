import DigitalEngineeringHero from "../../digital-acceleration/DigitalEngineeringHero";
import OverviewSection from "../../digital-acceleration/OverviewSection";
import ServicesStack from "../../digital-acceleration/ServicesStack";
import ReadyToGetStartedSection from "../../digital-acceleration/ReadyToGetStartedSection";
import WhyChooseUsSlider from "../../digital-acceleration/WhyChooseUsSlider";

export default function SalesforcePage() {
  return (
    <>
      <DigitalEngineeringHero bgImage={"SF"} title={"Salesforce"} desc={"Unify customer data and unlock AI-driven insights to deliver personalized experiences at scale."}/>
      <OverviewSection service={"SF"}/>
      <ServicesStack service={"SF"}/>
      <ReadyToGetStartedSection />
      <WhyChooseUsSlider />
    </>
  );
}