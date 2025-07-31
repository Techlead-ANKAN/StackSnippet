"use client"

import type React from "react"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import GlowButton from "./glow-button"

export default function InteractiveCTA() {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(event.clientX - centerX)
    mouseY.set(event.clientY - centerY)
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-3xl p-12 backdrop-blur-sm"
              style={{
                boxShadow: isHovered
                  ? "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <motion.div
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-8"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Transform
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Your Brand?
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of successful businesses who've accelerated their growth with our proven strategies. Let's
                build something extraordinary together.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <GlowButton size="lg" className="px-10 py-6 text-lg">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </GlowButton>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white transition-colors font-medium flex items-center"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-8 right-8 w-4 h-4 bg-blue-500/30 rounded-full"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-8 left-8 w-6 h-6 bg-purple-500/30 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
