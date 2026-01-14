import AboutPage from "@/components/(about)/about";
import ProjectsPage from "@/components/(projects)/projects";
import BackToTopButton from "@/components/back-to-top-button";
import PortfolioDescription from "@/components/hero/portfolio-description";
import DarkVeilWrapper from "@/components/hero/dark-veil-wrapper";

export default function Page() {
  return (
    <>
      <div className="relative h-screen w-full">
        <DarkVeilWrapper />
        <PortfolioDescription />
        <BackToTopButton />
      </div>
      <AboutPage />
      <ProjectsPage />
    </>
  );
}
