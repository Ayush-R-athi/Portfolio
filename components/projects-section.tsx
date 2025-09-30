"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "PulmoScan",
    description: "AI-Powered Lung X-Ray Analysis",
    fullDescription:
      "A web platform using machine learning for preliminary lung X-ray analysis and disease prediction.",
    tech: ["Streamlit", "Python", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://pulmoscan.netlify.app",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "AI Internship Recommender",
    description: "Personalized AI Internship Recommendations",
    fullDescription:
      "A full-stack application that provides personalized internship recommendations using a custom AI model and automated web scraping.",
    tech: ["React", "Tailwind CSS", "FastAPI", "Python", "Supabase"],
    liveUrl: "https://ai-internship-recommender-gamma.vercel.app",
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    title: "Ocean Hazard Monitor",
    description: "Real-time Ocean Hazard Monitoring",
    fullDescription:
      "A comprehensive web app for real-time monitoring and reporting of ocean hazards with an interactive map and user dashboards.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet", "Recharts","MongoDB"],
    liveUrl: "https://varuna001.vercel.app",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Game Platform",
    description: "Tic-Tac-Toe & Connect 4 with AI",
    fullDescription:
      "A dual-game platform (web and desktop) featuring multiple game modes and a challenging Minimax AI opponent.",
    tech: ["HTML/CSS/JS", "Python", "Tkinter", "Minimax Algorithm"],
    liveUrl: "https://game-platform-ivory.vercel.app",
    gradient: "from-primary/20 via-secondary/20 to-accent/20",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">Building intelligent systems that solve real-world problems</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="group relative h-full overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <CardContent className="relative p-6">
                  <div className="mb-4">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm font-medium text-primary">{project.description}</p>
                  </div>

                  <p className="mb-4 text-muted-foreground">{project.fullDescription}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="group/btn bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
