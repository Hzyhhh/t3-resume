import FullPageScroll from "~/components/full-page-scroll";
import ThemeToggle from "~/components/theme-toggle";
import AboutSection from "~/components/sections/about-section";
import ProjectsSection from "~/components/sections/projects-section";
import ExperienceSection from "~/components/sections/experience-section";
import PortfolioSection from "~/components/sections/portfolio-section";
import HobbiesSection from "~/components/sections/hobbies-section";
import AnimatedBackground from "~/components/animated-background";
import VisitorCounter from "~/components/visitor-counter";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />

      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <FullPageScroll>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <PortfolioSection />
        <HobbiesSection />
      </FullPageScroll>

      <VisitorCounter />
    </main>
  );
}
