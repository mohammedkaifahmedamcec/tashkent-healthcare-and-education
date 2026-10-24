import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PhysioHero from "@/components/physiotherapy/PhysioHero";
import CoursesGrid from "@/components/physiotherapy/CoursesGrid";
import PhysioForm from "@/components/physiotherapy/PhysioForm";

export default function PhysiotherapyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PhysioHero />
        <CoursesGrid />
        <PhysioForm />
      </main>
      <SiteFooter />
    </>
  );
}