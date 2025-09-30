"use client"

import { motion } from "framer-motion"
import { Trophy, Medal, Award } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    place: "1st Place",
    title: "Scientific Abstract Presentation",
    description:
      "Won the Junior Category at the International Conference on Innovations in Biomechanics and Footwear Development (2025)",
    color: "text-yellow-500",
  },
  {
    icon: Trophy,
    place: "1st Place",
    title: "Glitchcon 2025 Hackathon (AI Driven)",
    description: "Secured first place and a prize of ₹10,000",
    color: "text-yellow-500",
  },
  {
    icon: Medal,
    place: "2nd Place",
    title: "Dataquest'24 Hackathon",
    description: "Achieved second place in a competitive data-science-focused hackathon",
    color: "text-gray-400",
  },
  {
    icon: Award,
    place: "3rd Place",
    title: "Dataset National Level Hackathon 2024",
    description: "Won an internship opportunity with Nokia",
    color: "text-orange-600",
  },
  {
    icon: Award,
    place: "7th Place",
    title: "National Level 'Level Supermind Hackathon'",
    description: "Ranked 7th out of 400 participating teams",
    color: "text-primary",
  },
]

export function AchievementsSection() {
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
          <h2 className="mb-4 text-4xl font-bold text-foreground">Achievements</h2>
          <p className="text-lg text-muted-foreground">Recognition for innovation and excellence</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, i) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <Icon className={`h-8 w-8 ${achievement.color}`} />
                  <span className={`text-xl font-bold ${achievement.color}`}>{achievement.place}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>

                {/* Decorative gradient */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
