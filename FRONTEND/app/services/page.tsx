"use client"

import { useEffect } from "react"
import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import ServicesPage from "@/components/services-page"
import BackgroundPaths from "@/components/background-paths"

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <ServicesPage />
        <AnimatedFooter />
      </div>
    </div>
  )
}
