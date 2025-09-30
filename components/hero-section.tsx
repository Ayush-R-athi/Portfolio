"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NeuralNetwork3D } from "./neural-network-3d"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Neural Network */}
      <div className="absolute inset-0 opacity-20">
        <NeuralNetwork3D />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-balance">
                Hi, I'm <span className="text-primary">Ayush Rathi</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                AI Enthusiast & Full-Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Computer Science student at VIT Chennai specializing in Artificial Intelligence and Machine Learning.
                Passionate about building innovative solutions that leverage cutting-edge AI technologies to solve
                real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <Button size="icon" variant="ghost" asChild>
                <a href="https://github.com/Ayush-R-athi" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="https://www.linkedin.com/in/ayushrathi21/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="mailto:ayushrathi2117@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ayush_Rathi%28Profile%29-8OBnbr23PXrKPr2LTw3PwvAt3cf7LY.jpg"
                  alt="Ayush Rathi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating elements - 8 symmetric emojis around image */}
              {/* Top */}
              <motion.div
                animate={{ y: [-5, -15, -5] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 bg-primary/10 backdrop-blur-sm rounded-lg p-3 border border-primary/20"
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              {/* Bottom */}
              <motion.div
                animate={{ y: [5, 15, 5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-accent/10 backdrop-blur-sm rounded-lg p-3 border border-accent/20"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
              {/* Left */}
              <motion.div
                animate={{ x: [-5, -15, -5] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 6 }}
                className="absolute -left-16 top-1/2 -translate-y-1/2 bg-secondary/10 backdrop-blur-sm rounded-lg p-3 border border-secondary/20"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              {/* Right */}
              <motion.div
                animate={{ x: [5, 15, 5] }}
                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                className="absolute -right-16 top-1/2 -translate-y-1/2 bg-primary/10 backdrop-blur-sm rounded-lg p-3 border border-primary/20"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              {/* Top-Right */}
              <motion.div
                animate={{ y: [-4, -12, -4], x: [4, 12, 4] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute -top-12 -right-12 bg-accent/10 backdrop-blur-sm rounded-lg p-3 border border-accent/20"
              >
                <span className="text-2xl">🧠</span>
              </motion.div>
              {/* Top-Left */}
              <motion.div
                animate={{ y: [-4, -12, -4], x: [-4, -12, -4] }}
                transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
                className="absolute -top-12 -left-12 bg-primary/10 backdrop-blur-sm rounded-lg p-3 border border-primary/20"
              >
                <span className="text-2xl">🔥</span>
              </motion.div>
              {/* Bottom-Right */}
              <motion.div
                animate={{ y: [4, 12, 4], x: [4, 12, 4] }}
                transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
                className="absolute -bottom-12 -right-12 bg-secondary/10 backdrop-blur-sm rounded-lg p-3 border border-secondary/20"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
              {/* Bottom-Left */}
              <motion.div
                animate={{ y: [4, 12, 4], x: [-4, -12, -4] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 7 }}
                className="absolute -bottom-12 -left-12 bg-accent/10 backdrop-blur-sm rounded-lg p-3 border border-accent/20"
              >
                <span className="text-2xl">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
