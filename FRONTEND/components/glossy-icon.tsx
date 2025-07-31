"use client"

import type React from "react"

interface GlossyIconProps {
  children: React.ReactNode
  color: "purple" | "blue" | "green" | "orange" | "pink" | "indigo"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function GlossyIcon({ children, color, size = "md", className = "" }: GlossyIconProps) {
  const colorClasses = {
    purple: {
      bg: "bg-gradient-to-br from-purple-400 to-purple-600",
      glow: "shadow-purple-500/25",
      outerGlow: "shadow-[0_0_20px_rgba(147,51,234,0.15)]",
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-400 to-blue-600",
      glow: "shadow-blue-500/25",
      outerGlow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    },
    green: {
      bg: "bg-gradient-to-br from-green-400 to-green-600",
      glow: "shadow-green-500/25",
      outerGlow: "shadow-[0_0_20px_rgba(34,197,94,0.15)]",
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-400 to-orange-600",
      glow: "shadow-orange-500/25",
      outerGlow: "shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    },
    pink: {
      bg: "bg-gradient-to-br from-pink-400 to-pink-600",
      glow: "shadow-pink-500/25",
      outerGlow: "shadow-[0_0_20px_rgba(236,72,153,0.15)]",
    },
    indigo: {
      bg: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      glow: "shadow-indigo-500/25",
      outerGlow: "shadow-[0_0_20px_rgba(99,102,241,0.15)]",
    },
  }

  const sizeClasses = {
    sm: "w-10 h-10 p-2",
    md: "w-12 h-12 p-3",
    lg: "w-16 h-16 p-4",
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  return (
    <div
      className={`
        relative ${sizeClasses[size]} ${colorClasses[color].bg} ${colorClasses[color].outerGlow}
        rounded-2xl flex items-center justify-center text-white
        shadow-lg ${colorClasses[color].glow} hover:shadow-xl
        transition-all duration-300 hover:scale-105
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent
        before:opacity-80 hover:before:opacity-100
        ${className}
      `}
    >
      <div className={`relative z-10 ${iconSizes[size]}`}>{children}</div>
    </div>
  )
}
