"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isLaunching, setIsLaunching] = useState(false)
  const text = "AYUSH RATHI"

  useEffect(() => {
    const duration = 3000
    const interval = 50
    const steps = duration / interval
    const increment = 100 / steps

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setIsLaunching(true)
          setTimeout(onComplete, 1500)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Wireframe Rocket */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-15"
          animate={isLaunching ? { y: -2000, scale: 0.2, opacity: 0 } : { y: [0, -20, 0] }}
          transition={isLaunching ? { duration: 2, ease: "easeIn" } : { duration: 4, repeat: Infinity }}
          style={{ perspective: "1500px" }}
        >
          <div className="scale-[4]">
            <motion.div 
              className="relative"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Nose Cone Wireframe */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2" style={{ transformStyle: "preserve-3d" }}>
                {/* Nose edges */}
                <div className="absolute w-0 h-3 border-l border-primary" style={{ transform: "translateX(-6px) translateZ(6px) rotateZ(60deg)" }} />
                <div className="absolute w-0 h-3 border-l border-primary" style={{ transform: "translateX(6px) translateZ(6px) rotateZ(-60deg)" }} />
                <div className="absolute w-0 h-3 border-l border-primary" style={{ transform: "translateX(-6px) translateZ(-6px) rotateZ(60deg)" }} />
                <div className="absolute w-0 h-3 border-l border-primary" style={{ transform: "translateX(6px) translateZ(-6px) rotateZ(-60deg)" }} />
                {/* Nose base */}
                <div className="absolute w-3 h-0 border-t border-primary" style={{ transform: "translateX(-6px) translateZ(6px)" }} />
                <div className="absolute w-3 h-0 border-t border-primary" style={{ transform: "translateX(-6px) translateZ(-6px)" }} />
                <div className="absolute w-0 h-3 border-l border-primary" style={{ transform: "translateZ(6px) rotateY(90deg)" }} />
                <div className="absolute w-0 h-3 border-l border-primary" style={{ transform: "translateZ(-6px) rotateY(90deg)" }} />
              </div>
              
              {/* Main Body Wireframe */}
              <div className="relative" style={{ transformStyle: "preserve-3d" }}>
                {/* Vertical edges */}
                <div className="absolute w-0 h-20 border-l-2 border-primary" style={{ transform: "translateX(-6px) translateZ(6px)" }} />
                <div className="absolute w-0 h-20 border-l-2 border-primary" style={{ transform: "translateX(6px) translateZ(6px)" }} />
                <div className="absolute w-0 h-20 border-l-2 border-primary" style={{ transform: "translateX(-6px) translateZ(-6px)" }} />
                <div className="absolute w-0 h-20 border-l-2 border-primary" style={{ transform: "translateX(6px) translateZ(-6px)" }} />
                
                {/* Horizontal rings */}
                <div className="absolute w-3 h-0 border-t border-primary" style={{ transform: "translateX(-6px) translateZ(6px)" }} />
                <div className="absolute w-3 h-0 border-t border-primary" style={{ transform: "translateX(-6px) translateZ(-6px)" }} />
                <div className="absolute w-0 h-3 border-l border-primary" style={{ transform: "translateZ(6px) rotateY(90deg)" }} />
                <div className="absolute w-0 h-3 border-l border-primary" style={{ transform: "translateZ(-6px) rotateY(90deg)" }} />
                
                {/* Mid section rings */}
                <div className="absolute w-3 h-0 border-t border-secondary top-8" style={{ transform: "translateX(-6px) translateZ(6px)" }} />
                <div className="absolute w-3 h-0 border-t border-secondary top-8" style={{ transform: "translateX(-6px) translateZ(-6px)" }} />
                <div className="absolute w-0 h-3 border-l border-secondary top-8" style={{ transform: "translateZ(6px) rotateY(90deg)" }} />
                <div className="absolute w-0 h-3 border-l border-secondary top-8" style={{ transform: "translateZ(-6px) rotateY(90deg)" }} />
                
                {/* Bottom rings */}
                <div className="absolute w-3 h-0 border-t border-accent bottom-0" style={{ transform: "translateX(-6px) translateZ(6px)" }} />
                <div className="absolute w-3 h-0 border-t border-accent bottom-0" style={{ transform: "translateX(-6px) translateZ(-6px)" }} />
                <div className="absolute w-0 h-3 border-l border-accent bottom-0" style={{ transform: "translateZ(6px) rotateY(90deg)" }} />
                <div className="absolute w-0 h-3 border-l border-accent bottom-0" style={{ transform: "translateZ(-6px) rotateY(90deg)" }} />
                
                {/* Window outline */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-blue-400 rounded-full" style={{ transform: "translateZ(7px)" }} />
                
                {/* Detail lines */}
                <div className="absolute top-12 left-0 w-3 h-0 border-t border-white/50" style={{ transform: "translateZ(7px)" }} />
                <div className="absolute top-16 left-1 w-2 h-0 border-t-2 border-red-400" style={{ transform: "translateZ(7px)" }} />
              </div>
              
              {/* Fin Wireframes */}
              <div className="absolute bottom-0 -left-4" style={{ transformStyle: "preserve-3d" }}>
                <div className="w-0 h-2 border-l-2 border-secondary" style={{ transform: "rotateZ(45deg)" }} />
                <div className="absolute w-2 h-0 border-t border-secondary" style={{ transform: "translateY(-8px)" }} />
                <div className="absolute w-0 h-2 border-l border-secondary" style={{ transform: "translateX(6px) rotateZ(-30deg)" }} />
              </div>
              
              <div className="absolute bottom-0 -right-4" style={{ transformStyle: "preserve-3d" }}>
                <div className="w-0 h-2 border-l-2 border-secondary" style={{ transform: "rotateZ(-45deg)" }} />
                <div className="absolute w-2 h-0 border-t border-secondary" style={{ transform: "translateY(-8px) translateX(-8px)" }} />
                <div className="absolute w-0 h-2 border-l border-secondary" style={{ transform: "translateX(-6px) rotateZ(30deg)" }} />
              </div>
              
              {/* Engine Nozzle Wireframes */}
              <div className="absolute -bottom-4 left-2 w-0 h-4 border-l border-gray-400" />
              <div className="absolute -bottom-4 right-2 w-0 h-4 border-l border-gray-400" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-5 border-l-2 border-gray-300" />
              <div className="absolute -bottom-1 left-2 w-2 h-0 border-t border-gray-400" />
              <div className="absolute -bottom-1 right-2 w-2 h-0 border-t border-gray-400" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0 border-t-2 border-gray-300" />
              
              {/* Wireframe Exhaust */}
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2"
                animate={{
                  scaleY: isLaunching ? [1, 4, 6] : [0.6, 1.8, 0.6],
                  opacity: isLaunching ? [1, 0.9, 0] : [0.8, 1, 0.8]
                }}
                transition={{
                  duration: isLaunching ? 1.5 : 0.3,
                  repeat: isLaunching ? 0 : Infinity
                }}
              >
                {/* Flame outline */}
                <div className="relative">
                  {/* Outer flame border */}
                  <div className="w-8 h-12 border-2 border-red-400 rounded-b-full bg-transparent" />
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-10 border border-orange-400 rounded-b-full bg-transparent" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-8 border border-yellow-400 rounded-b-full bg-transparent" />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-6 border border-white rounded-b-full bg-transparent" />
                  
                  {/* Flame grid lines */}
                  <div className="absolute top-3 left-1 right-1 h-0 border-t border-orange-300/50" />
                  <div className="absolute top-6 left-1.5 right-1.5 h-0 border-t border-yellow-300/50" />
                  <div className="absolute top-9 left-2 right-2 h-0 border-t border-white/50" />
                </div>
              </motion.div>
              
              {/* Launch Effects */}
              {isLaunching && (
                <motion.div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                  {/* Wireframe Smoke Rings */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={`smoke-${i}`}
                      className="absolute w-16 h-16 border border-gray-400/40 rounded-full bg-transparent"
                      initial={{ opacity: 0.8, scale: 0.5 }}
                      animate={{ 
                        opacity: [0.8, 0.3, 0], 
                        scale: [0.5, 2, 3],
                        y: [0, -20, -40]
                      }}
                      transition={{ duration: 2, delay: i * 0.2 }}
                    />
                  ))}
                  
                  {/* Energy Lines */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`line-${i}`}
                      className="absolute w-0 h-8 border-l border-primary"
                      initial={{ opacity: 1, scaleY: 0 }}
                      animate={{ 
                        opacity: [1, 0.5, 0], 
                        scaleY: [0, 1, 0], 
                        x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 60],
                        y: [0, Math.random() * 50 + 20],
                        rotate: [0, Math.random() * 360]
                      }}
                      transition={{ duration: 1.2, delay: i * 0.1 }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>

        <div className="relative flex flex-col items-center gap-8 z-10">
          {/* Animated Text */}
          <motion.div 
            className="flex gap-1"
            animate={isLaunching ? { y: -50, opacity: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                className="font-mono text-2xl font-bold text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.1,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Progress Bar */}
          <motion.div 
            className="w-64"
            animate={isLaunching ? { y: -30, opacity: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.p
              className="mt-2 text-center font-mono text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {progress >= 100 ? "LAUNCHING..." : `${Math.round(progress)}%`}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
