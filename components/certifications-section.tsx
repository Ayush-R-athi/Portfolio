"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Shield, Database, Code, Layers, Cloud } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Recent",
    verificationId: "166994767a15493781e63ecc18595a8b",
    level: "Foundational",
    description: "Validated overall understanding of the AWS Cloud platform, covering basic cloud concepts, security, and AWS core services.",
    skills: [
      { icon: Cloud, name: "Cloud Concepts", desc: "Understanding of AWS Cloud economics and architecture principles" },
      { icon: Shield, name: "Security & Compliance", desc: "Knowledge of the AWS shared responsibility model and core security services" },
      { icon: Database, name: "Cloud Technology", desc: "Understanding of core AWS services (compute, network, databases, storage)" },
      { icon: Layers, name: "Billing & Pricing", desc: "Knowledge of AWS pricing models, billing practices, and cost management" }
    ],
    issuedBy: "AWS",
    color: "from-yellow-500 to-orange-500",
    link: "https://aws.amazon.com/verification",
    logo: "/images/aws-certified-cloud-practitioner.png"
  },
  {
    title: "Advanced Software Engineering Job Simulation",
    issuer: "Walmart Global Tech",
    date: "2025",
    verificationId: "gDo7Df8s3F4Ytvnun",
    level: "Advanced",
    description: "Completed intensive simulation mastering high-scale architecture, relational database design, and complex data structures",
    skills: [
      { icon: Code, name: "Advanced Data Structures", desc: "Optimized data retrieval and storage mechanisms" },
      { icon: Layers, name: "Software Architecture", desc: "Designed scalable system components and structural blueprints" },
      { icon: Database, name: "Database Design", desc: "Engineered relational schemas for complex data relationships" },
      { icon: Shield, name: "Data Munging", desc: "Cleaned and transformed raw datasets into high-quality engineering inputs" }
    ],
    issuedBy: "Suresh Kumar (Global CTO, Walmart) & Tom Brunskill (CEO, Forage)",
    color: "from-blue-500 to-blue-700",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_uhz9G8nzaZBxmwk4Y_1734970133990_completion_certificate.pdf"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia via Forage",
    date: "Feb 2026",
    verificationId: "gTa37oYG6xRjLjd2Z",
    level: "Intermediate",
    description: "Completed practical task modules in Data Analytics, advising a simulated client and delivering data-driven insights.",
    skills: [
      { icon: Database, name: "Data Analysis", desc: "Analyzed complex datasets to derive actionable business insights" },
      { icon: Layers, name: "Data Visualization", desc: "Created comprehensive dashboards and visual reports" },
      { icon: Award, name: "Client Advisory", desc: "Delivered strategic data-driven recommendations" },
      { icon: Shield, name: "Data Quality", desc: "Ensured data integrity and accuracy throughout the analysis process" }
    ],
    issuedBy: "Deloitte Australia & Forage",
    color: "from-blue-500 to-blue-700",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_uhz9G8nzaZBxmwk4Y_1770140317827_completion_certificate.pdf"
  }
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground">Professional Certifications</h2>
          <p className="text-lg text-muted-foreground">Industry-recognized credentials in advanced software engineering</p>
        </motion.div>

        <div className="mx-auto max-w-7xl relative px-12 sm:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-8">
              {certifications.map((cert, i) => (
                <CarouselItem key={i} className="pl-4 sm:pl-8 lg:basis-1/2">
                  <motion.div
                    className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-lg transition-all hover:shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5`} />
                    
                    {/* Header */}
                    <div className="relative mb-6 flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          {cert.logo ? (
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-white shadow-sm">
                              <Image src={cert.logo} alt={cert.title} fill className="object-contain p-1" />
                            </div>
                          ) : (
                            <Award className="h-6 w-6 text-primary" />
                          )}
                          <span className={`rounded-full bg-gradient-to-r ${cert.color} px-3 py-1 text-xs font-bold text-white`}>
                            {cert.level}
                          </span>
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-foreground">{cert.title}</h3>
                        <p className="mb-1 text-lg font-semibold text-primary">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground">{cert.issuedBy}</p>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-sm font-medium text-muted-foreground">{cert.date}</span>
                        <a 
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Verify Credential
                        </a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-muted-foreground">{cert.description}</p>

                    {/* Skills Grid */}
                    <div className="mb-6">
                      <h4 className="mb-4 text-lg font-semibold text-foreground">Key Engineering Competencies</h4>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            className="flex items-start gap-3 rounded-lg border border-border bg-background/50 p-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                          >
                            <skill.icon className="mt-1 h-5 w-5 text-primary" />
                            <div>
                              <h5 className="font-semibold text-foreground">{skill.name}</h5>
                              <p className="text-sm text-muted-foreground">{skill.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Verification ID */}
                    <div className="mt-auto flex items-center justify-between rounded-lg bg-muted/50 p-3">
                      <span className="text-sm text-muted-foreground">Verification ID:</span>
                      <code className="rounded bg-background px-2 py-1 text-sm font-mono text-foreground">
                        {cert.verificationId}
                      </code>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12" />
            <CarouselNext className="hidden sm:flex -right-12" />
            <div className="mt-8 flex justify-center gap-4 sm:hidden">
              <CarouselPrevious className="static translate-y-0 transform-none" />
              <CarouselNext className="static translate-y-0 transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}