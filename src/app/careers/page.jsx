import CareersShowcase from "./CareersShowcase";
import HiringProcess from "./HiringProcess";

export const metadata = {
  title: "careers",
  description: "Fun, Well-Being, and Work-Life Harmony",
};

export default function CareersPage() {
  return (
    <>
      <CareersShowcase />
      <HiringProcess />
    </>
  );
}
