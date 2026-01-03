"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";
/*import { Footer } from "@/components/Footer";*/
import { IntroScreen } from "@/components/IntroScreen";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroScreen onComplete={() => setShowIntro(false)} />;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-y-auto snap-y snap-mandatory">
        <HeroSection />
        <ProjectsSection />
        <ResearchSection />
        <ExperienceSection />
        <ResumeSection />
        <ContactSection />
        {/* <Footer /> */}
      </main>
    </>
  );
}
