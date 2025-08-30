"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { LanguagesSection } from "@/components/languages-section"
import { ContactSection } from "@/components/contact-section"

export default function Portfolio() {
  return (
    <motion.div
      className="min-h-screen bg-gray-950 text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <LanguagesSection />
        <ContactSection />
      </div>
    </motion.div>
  )
}
