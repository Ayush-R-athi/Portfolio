"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Trophy, Code, Star, Medal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const profiles = [
  {
    platform: "LeetCode",
    username: "ayushrathi21",
    stats: [
      { label: "Problems Solved", value: "148", icon: Code },
      { label: "Contest Rating", value: "1551", icon: Trophy },
    ],
    url: "https://leetcode.com/u/ayushrathi21/",
    logo: "/images/leetcode.png",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "group-hover:border-yellow-500/50",
  },
  {
    platform: "GeeksforGeeks",
    username: "ayushrathi21",
    stats: [
      { label: "Problems Solved", value: "88", icon: Code },
      { label: "Institutional Rank", value: "437", icon: Medal },
    ],
    url: "https://www.geeksforgeeks.org/profile/ayushrathi21",
    logo: "/images/GeeksforGeeks.png",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
  },
  {
    platform: "CodeChef",
    username: "ayushrathi21",
    stats: [
      { label: "Problems Solved", value: "491", icon: Code },
      { label: "Rating", value: "3 Star", icon: Star },
    ],
    url: "https://www.codechef.com/users/ayushrathi21",
    logo: "/images/codechef.png",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "group-hover:border-amber-500/50",
  },
]

export function CodingProfilesSection() {
  return (
    <section id="coding-profiles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground">Problem Solving & DSA</h2>
          <p className="text-lg text-muted-foreground">Competitive programming and algorithmic problem solving</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-full"
            >
              <Card className={`group h-full flex flex-col border-border bg-card transition-all hover:shadow-xl ${profile.border}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${profile.bg} flex items-center justify-center`}>
                      <Image src={profile.logo} alt={profile.platform} width={32} height={32} className="object-contain" />
                    </div>
                    <Button variant="ghost" size="icon" asChild className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={profile.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-2xl font-bold">{profile.platform}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground">@{profile.username}</p>
                </CardHeader>
                <CardContent className="mt-auto pt-4">
                  <div className="space-y-4">
                    {profile.stats.map((stat, idx) => {
                      const StatIcon = stat.icon;
                      return (
                        <div key={idx} className="flex items-center justify-between border-t border-border pt-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <StatIcon className="h-4 w-4" />
                            <span className="text-sm">{stat.label}</span>
                          </div>
                          <span className="font-bold text-foreground">{stat.value}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
