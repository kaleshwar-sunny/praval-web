import ScheduleCallForm from "../../components/ScheduleCallForm"
import ClientLogosGrid from "../../components/ClientLogosGrid"
import OfficeLocations from "../contact/OfficeLocations"
import ConnectWithUs from "../contact/ConnectWithUs"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with PRAVAL TECH.",
};

export default function Contact() {
  return (
    <>
      <ScheduleCallForm />
      <ClientLogosGrid />
      <OfficeLocations />
      <ConnectWithUs />
    </>
  );
}
