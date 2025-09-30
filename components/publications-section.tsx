"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Award, ExternalLink } from "lucide-react"

const publications = [
  {
    title: "SHERA: SHAP-Enhanced Resource Allocation for VM Scheduling and Efficient Cloud Computing",
    publisher: "IEEE",
    description:
      "This paper explores how explainable AI (XAI) techniques like SHAP can be used to improve virtual machine scheduling in cloud environments. The research aims to make resource allocation more efficient, transparent, and interpretable for smarter cloud computing infrastructure.",
    url: "https://ieeexplore.ieee.org/document/11000120",
  },
  {
    title:
      "CHASHNIt for enhancing skin disease classification using GAN augmented hybrid model with LIME and SHAP based XAI heatmaps",
    publisher: "Nature",
    description:
      "This work proposes a novel hybrid deep learning model (CHASHNIt) that achieves 97.8% accuracy in classifying 23 types of skin diseases. It leverages GAN-based data augmentation and uses XAI methods to provide transparent, visual explanations for its diagnoses.",
    url: "https://www.nature.com/articles/s41598-025-13647-3",
  },
]

const patents = [
  {
    title: "A System to Predict Flood and Generate Early Warning",
    applicationNo: "202541061633",
    issued: "July 11, 2025",
    description:
      "This patented system utilizes a network of IoT sensors to collect real-time environmental data. An integrated AI model analyzes this data to predict potential floods and autonomously issue early warnings, significantly enhancing disaster preparedness and safety.",
  },
  {
    title: "Device for Triggering Automated Safety Functions by Monitoring and Detecting Emergency Events",
    applicationNo: "202441037146",
    issued: "May 17, 2024",
    description:
      "This patent covers an IoT-based smart helmet designed to improve road safety. The device features integrated sensors for real-time environmental monitoring and automatic collision detection, triggering safety functions in an emergency.",
  },
]

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground">Publications & Patents</h2>
          <p className="text-lg text-muted-foreground">Contributing to the advancement of AI and IoT research</p>
        </motion.div>

        {/* Research Papers */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-primary">Research Papers</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2 text-lg leading-tight">{pub.title}</CardTitle>
                        <p className="text-sm font-medium text-primary">Published in {pub.publisher}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{pub.description}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      asChild
                    >
                      <a href={pub.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Publication
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Patents */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-primary">Patents</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {patents.map((patent, i) => (
              <motion.div
                key={patent.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mb-2 flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2 text-lg leading-tight">{patent.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">Application No: {patent.applicationNo}</p>
                        <p className="text-sm font-medium text-primary">Issued: {patent.issued}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{patent.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
