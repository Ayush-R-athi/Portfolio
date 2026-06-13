"use client"

import { useState, useEffect } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { CodingProfilesSection } from "@/components/coding-profiles-section"
import { ProjectsSection } from "@/components/projects-section"
import { PublicationsSection } from "@/components/publications-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ExperienceSection } from "@/components/experience-section"
import { CertificationsSection } from "@/components/certifications-section"
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
          <CodingProfilesSection />
          <ProjectsSection />
          <PublicationsSection />
          <AchievementsSection />
          <ExperienceSection />
          <CertificationsSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  )
}
