import HeroCarousel from "@/components/HeroCarousel";
import ServicesTabs from "@/components/ServicesTabs";
import ClientLogosGrid from "@/components/ClientLogosGrid";
import CustomerSuccess from "@/components/CustomerSuccess";
import LatestInsightsCarousel from "@/components/LatestInsightsCarousel";
import LatestBlogsGrid from "@/components/LatestBlogsGrid";
import ScheduleCallForm from "@/components/ScheduleCallForm";

export default function Home() {
  return (
    <>
      <section className="pb-4 md:pb-4 text-center">
        <HeroCarousel />
        <ServicesTabs />
        <ClientLogosGrid />
        <CustomerSuccess />
        <LatestInsightsCarousel />
        <LatestBlogsGrid />
        <ScheduleCallForm />
      </section>
    </>
  );
}
