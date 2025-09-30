"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Brain, Globe, Wrench, Users } from "lucide-react"

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "C++", "Java", "SQL"],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    items: ["Deep Learning", "TensorFlow", "Scikit-learn", "Computer Vision", "YOLOv7", "XAI (SHAP, LIME)"],
  },
  {
    category: "Web Development",
    icon: Globe,
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "FastAPI", "Streamlit", "MySQL"],
  },
  {
    category: "Developer Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Professional",
    icon: Users,
    items: ["Leadership", "Teamwork", "Research & Technical Writing", "Public Speaking"],
  },
]

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">A comprehensive toolkit for building intelligent systems</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="group h-full border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{skill.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground transition-colors group-hover:bg-primary/20 group-hover:text-primary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
