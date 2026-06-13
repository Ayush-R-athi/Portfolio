"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:ayushrathi2117@gmail.com",
      label: "ayushrathi2117@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/ayushrathi21",
      label: "linkedin.com/in/ayushrathi21",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Ayush-R-athi",
      label: "github.com/Ayush-R-athi",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">


        <div className="mx-auto max-w-4xl">
          <motion.div
            className="space-y-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Connect With Me</h3>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Feel free to reach out through any of these platforms. I'm always open to discussing new opportunities,
                collaborations, or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
              {socialLinks.map((link, i) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="font-semibold text-foreground text-lg">{link.name}</p>
                      <p className="text-sm text-muted-foreground group-hover:text-primary mt-1 break-all text-center">
                        {link.label}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
