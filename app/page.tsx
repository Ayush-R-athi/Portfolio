"use client"

import { useState, useEffect } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { PublicationsSection } from "@/components/publications-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Prevent scroll during loading
    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [loading])

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <main className="min-h-screen">
          <Navigation />
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <PublicationsSection />
          <AchievementsSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  )
}
