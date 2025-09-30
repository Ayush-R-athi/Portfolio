"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Web Development Strategist",
    organization: "ACM VITC",
    period: "July 2025 - Present",
    description: "Part-time role leading web development strategy and building portals for the chapter",
  },
  {
    type: "work",
    title: "Research Intern",
    organization: "Taylor's University",
    period: "May 2025 - July 2025",
    description: "Remote research internship focusing on AI and machine learning applications",
  },
  {
    type: "work",
    title: "Project Intern",
    organization: "Ministry of Commerce & Industry, Govt. of India",
    period: "June 2025",
    description: "Contributed to government technology initiatives and digital transformation projects",
  },
  {
    type: "education",
    title: "Bachelor of Technology - Computer Science Engineering",
    organization: "Vellore Institute of Technology (VIT), Chennai",
    period: "Expected Graduation: 2027",
    description: "Specializing in AI, Machine Learning, and Full-Stack Development",
  },
]

const responsibilities = [
  "Core Member & Web Lead, ACM VIT Chennai: Lead web development strategy, building and optimizing portals for the chapter",
  "Competitive Coding Member, CodeChef Club VIT Chennai: Actively solve algorithmic problems and mentor junior members",
  "Technical Content Contributor: Author technical blogs and articles on AI, IoT, and networking",
  "Hackathon Participant: Regularly compete in national-level hackathons, applying problem-solving skills under pressure",
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground">Experience & Education</h2>
          <p className="text-lg text-muted-foreground">Building expertise through hands-on experience</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative mb-12 flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2">
                <div className="h-2 w-2 rounded-full bg-background" />
              </div>

              {/* Content */}
              <div className={`ml-20 w-full md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <div className="mb-3 flex items-center gap-2">
                    {exp.type === "work" ? (
                      <Briefcase className="h-5 w-5 text-primary" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-primary" />
                    )}
                    <span className="text-sm font-medium text-primary">{exp.period}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="mb-2 font-medium text-muted-foreground">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Positions of Responsibility */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-6 text-center text-2xl font-bold text-primary">Positions of Responsibility</h3>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {responsibilities.map((resp, i) => (
              <motion.div
                key={i}
                className="rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <p className="text-sm text-muted-foreground">{resp}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
