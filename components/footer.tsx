"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col items-center justify-center gap-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            © 2025  All Rights Reserved. 
            
            
          </p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground"> Made with <Heart className="h-4 w-4 text-red-500" /> by Ayush Rathi.</p>
          
        </motion.div>
      </div>
    </footer>
  )
}
