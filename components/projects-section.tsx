"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AttendSense",
    description: "AI-Powered Face & Voice Recognition SaaS",
    fullDescription: "An end-to-end AI SaaS application featuring face recognition (ResNet + SVM), voice biometrics, and a full-stack dashboard for analytics.",
    tech: ["Streamlit", "Flask", "Supabase", "dlib", "ResNet", "Resemblyzer"],
    liveUrl: "https://attend-sense-landing-page.vercel.app",
    repoUrl: "",
    tags: ["AI/ML", "Full Stack"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Zero-Trust Transaction System",
    description: "Secure Online Transaction Architecture",
    fullDescription: "A security engineering project implementing RSA-4096, AES-256 encryption, anti-replay protection, and a Redis security layer.",
    tech: ["FastAPI", "PyCryptodome", "Redis", "HTML/CSS/JS"],
    liveUrl: "",
    repoUrl: "https://github.com/Ayush-R-athi/Secure-Transaction-System/tree/main",
    tags: ["Cybersecurity", "Full Stack"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "AI Real-time GYM Coach",
    description: "Computer Vision & LLM Fitness Coach",
    fullDescription: "Real-time exercise detection and rep counting using MediaPipe, paired with an LLM-based voice coach (Groq) for form feedback.",
    tech: ["Streamlit", "MediaPipe", "Groq LLM", "OpenCV", "SQLite"],
    liveUrl: "https://ai-gym-trainer-landing-page.vercel.app",
    repoUrl: "",
    tags: ["AI/ML", "Full Stack"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Project Sentinel",
    description: "DoS Attack & Defense Visualizer",
    fullDescription: "Security simulation platform featuring network virtualization (Mininet), rate-limiting defenses, and a real-time WebSocket dashboard.",
    tech: ["React", "Flask", "WebSockets", "Mininet", "iptables"],
    liveUrl: "",
    repoUrl: "https://github.com/Ayush-R-athi/Project-Sentinel",
    tags: ["Cybersecurity", "Full Stack"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "AI Internship Recommender",
    description: "Automated Scraping & Ranking Engine",
    fullDescription: "A full-stack application providing personalized internship recommendations using a custom AI ranking model and automated web scraping.",
    tech: ["React", "FastAPI", "Tailwind", "Supabase", "Python"],
    liveUrl: "https://ai-internship-recommender-gamma.vercel.app",
    repoUrl: "",
    tags: ["AI/ML", "Full Stack"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "PulmoScan",
    description: "Medical Image Analysis Platform",
    fullDescription: "A healthcare web platform using machine learning for preliminary lung X-ray analysis and disease prediction.",
    tech: ["Streamlit", "HTML/CSS/JS", "Python", "Medical AI"],
    liveUrl: "https://pulmoscan.netlify.app",
    repoUrl: "",
    tags: ["AI/ML"],
    gradient: "from-teal-500/20 to-emerald-500/20",
  },
  {
    title: "Game Platform",
    description: "Tic-Tac-Toe & Connect 4 with AI",
    fullDescription: "A cross-platform gaming experience featuring multiple game modes and a challenging Minimax + Alpha-Beta Pruning AI opponent.",
    tech: ["HTML/CSS/JS", "Python", "Tkinter", "Minimax Algorithm"],
    liveUrl: "https://game-platform-ivory.vercel.app",
    repoUrl: "",
    tags: ["AI/ML", "Full Stack"],
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
]

const filters = ["All", "AI/ML", "Cybersecurity", "Full Stack"]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.tags.includes(activeFilter)
  )

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

        {/* Filters */}
        <motion.div 
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group relative flex h-full flex-col overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <CardContent className="relative flex flex-grow flex-col p-6">
                    <div className="mb-4">
                      <h3 className="mb-2 text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-sm font-medium text-primary">{project.description}</p>
                    </div>

                    <p className="mb-6 text-sm text-muted-foreground flex-grow">{project.fullDescription}</p>

                    <div className="mb-6 flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-2 flex gap-3">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="group/btn w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          asChild
                        >
                          <a href={project.liveUrl.startsWith('http') ? project.liveUrl : `https://${project.liveUrl}`} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.repoUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="group/btn w-full border-primary/50 hover:bg-primary/10"
                          asChild
                        >
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
