"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Zap, Target, Globe, Code, Camera, Megaphone } from "lucide-react"
import AnimatedButton from "./animated-button"

export default function ServicesPage() {
  const [selectedBudget, setSelectedBudget] = useState(10000)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      title: "Brand Strategy & Identity",
      description:
        "Complete brand development from concept to market-ready identity that resonates with your audience.",
      features: ["Logo & Visual Identity", "Brand Guidelines", "Market Positioning", "Brand Voice Development"],
      icon: <Target className="w-8 h-8" />,
      gradient: "from-purple-500/20 to-purple-600/10",
      price: "Starting at $2,500",
      color: "purple",
    },
    {
      title: "Digital Marketing Campaigns",
      description: "Data-driven campaigns across all platforms to maximize reach and conversion rates.",
      features: ["Social Media Marketing", "PPC Advertising", "Email Campaigns", "SEO Optimization"],
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-blue-500/20 to-blue-600/10",
      price: "Starting at $1,500/month",
      color: "blue",
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites optimized for conversion and user experience.",
      features: ["Custom Design", "E-commerce Solutions", "Mobile Optimization", "Performance Optimization"],
      icon: <Code className="w-8 h-8" />,
      gradient: "from-green-500/20 to-green-600/10",
      price: "Starting at $3,500",
      color: "green",
    },
    {
      title: "SEO & Analytics",
      description: "Comprehensive SEO strategy and performance tracking to drive organic growth.",
      features: ["Technical SEO", "Content Optimization", "Analytics Setup", "Performance Reporting"],
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-orange-500/20 to-orange-600/10",
      price: "Starting at $1,200/month",
      color: "orange",
    },
    {
      title: "Content Creation",
      description: "High-quality content that engages your audience and drives conversions.",
      features: ["Video Production", "Photography", "Copywriting", "Graphic Design"],
      icon: <Camera className="w-8 h-8" />,
      gradient: "from-pink-500/20 to-pink-600/10",
      price: "Starting at $2,000/month",
      color: "pink",
    },
    {
      title: "Public Relations",
      description: "Strategic PR campaigns and media outreach to build brand authority.",
      features: ["Media Relations", "Press Releases", "Influencer Partnerships", "Crisis Management"],
      icon: <Megaphone className="w-8 h-8" />,
      gradient: "from-indigo-500/20 to-indigo-600/10",
      price: "Starting at $2,500/month",
      color: "indigo",
    },
  ]

  const calculateROI = (budget: number) => {
    const baseMultiplier = 3.5
    const scaleFactor = budget / 10000
    return Math.round(budget * baseMultiplier * (1 + scaleFactor * 0.2))
  }

  const calculateMonthlyRevenue = (budget: number) => {
    return Math.round(calculateROI(budget) / 12)
  }

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        icon: "text-purple-400",
        border: "border-purple-500/30",
        bg: "bg-purple-500/10",
        hover: "hover:border-purple-400/50",
        glow: "shadow-purple-500/20",
      },
      blue: {
        icon: "text-blue-400",
        border: "border-blue-500/30",
        bg: "bg-blue-500/10",
        hover: "hover:border-blue-400/50",
        glow: "shadow-blue-500/20",
      },
      green: {
        icon: "text-green-400",
        border: "border-green-500/30",
        bg: "bg-green-500/10",
        hover: "hover:border-green-400/50",
        glow: "shadow-green-500/20",
      },
      orange: {
        icon: "text-orange-400",
        border: "border-orange-500/30",
        bg: "bg-orange-500/10",
        hover: "hover:border-orange-400/50",
        glow: "shadow-orange-500/20",
      },
      pink: {
        icon: "text-pink-400",
        border: "border-pink-500/30",
        bg: "bg-pink-500/10",
        hover: "hover:border-pink-400/50",
        glow: "shadow-pink-500/20",
      },
      indigo: {
        icon: "text-indigo-400",
        border: "border-indigo-500/30",
        bg: "bg-indigo-500/10",
        hover: "hover:border-indigo-400/50",
        glow: "shadow-indigo-500/20",
      },
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive marketing solutions designed to accelerate your business growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color)
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className={`relative bg-gray-900/50 border ${colorClasses.border} ${colorClasses.hover} rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 group overflow-hidden`}
                style={{
                  boxShadow: hoveredService === index ? `0 25px 50px -12px ${colorClasses.glow}` : "none",
                }}
              >
                {/* Animated background glow */}
                <motion.div
                  className={`absolute inset-0 ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  animate={
                    hoveredService === index
                      ? {
                          background: [
                            `radial-gradient(circle at 20% 50%, ${colorClasses.bg.replace("bg-", "rgba(").replace("/10", ", 0.1)")} 0%, transparent 50%)`,
                            `radial-gradient(circle at 80% 50%, ${colorClasses.bg.replace("bg-", "rgba(").replace("/10", ", 0.1)")} 0%, transparent 50%)`,
                            `radial-gradient(circle at 20% 50%, ${colorClasses.bg.replace("bg-", "rgba(").replace("/10", ", 0.1)")} 0%, transparent 50%)`,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="relative z-10">
                  <div className={`${colorClasses.icon} mb-6`}>{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <div className={`w-2 h-2 ${colorClasses.bg.replace("/10", "")} rounded-full mr-3`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-white">{service.price}</span>
                    <AnimatedButton className="bg-white text-black hover:bg-gray-100">
                      <span className="flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </AnimatedButton>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white rounded-lg p-4 flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="font-semibold text-gray-800">Google Partner</span>
            </div>
            <div className="bg-blue-600 rounded-lg p-4 text-white font-semibold">BBB Accredited A+</div>
            <div className="bg-gray-800 rounded-lg p-4 text-white font-semibold">Meta Business Partner</div>
            <div className="bg-green-600 rounded-lg p-4 text-white font-semibold">HubSpot Certified</div>
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden"
          id="web-development"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(147,51,234,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(34,197,94,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(249,115,22,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Investment Calculator</h2>
              <p className="text-xl text-gray-400">Calculate your potential return on marketing investment</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Budget Slider */}
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-medium text-white mb-4">Monthly Marketing Budget</label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      step="1000"
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(Number(e.target.value))}
                      className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((selectedBudget - 1000) / (50000 - 1000)) * 100}%, #374151 ${((selectedBudget - 1000) / (50000 - 1000)) * 100}%, #374151 100%)`,
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>$1K</span>
                      <span>$50K</span>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold text-white">${selectedBudget.toLocaleString()}</span>
                    <span className="text-gray-400 ml-2">per month</span>
                  </div>
                </div>

                {/* Flowchart */}
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4">Our Process</h3>
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Strategy Development", desc: "Custom plan for your business" },
                      { step: "2", title: "Campaign Launch", desc: "Multi-channel execution" },
                      { step: "3", title: "Optimization", desc: "Continuous improvement" },
                      { step: "4", title: "Scale & Grow", desc: "Expand successful campaigns" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {item.step}
                        </div>
                        <div>
                          <div className="text-white font-medium">{item.title}</div>
                          <div className="text-gray-400 text-sm">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-8">
                {/* Circle Chart */}
                <div className="relative w-64 h-64 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-700"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 251.2" }}
                      animate={{
                        strokeDasharray: `${(calculateROI(selectedBudget) / (selectedBudget * 10)) * 251.2} 251.2`,
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06d6a0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        key={selectedBudget}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-2xl font-bold text-white"
                      >
                        {Math.round((calculateROI(selectedBudget) / selectedBudget) * 100)}%
                      </motion.div>
                      <div className="text-gray-400 text-sm">ROI</div>
                    </div>
                  </div>
                </div>

                {/* Revenue Projections */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      ${calculateMonthlyRevenue(selectedBudget).toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">Monthly Revenue</div>
                  </div>

                  <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      ${calculateROI(selectedBudget).toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">Annual Revenue</div>
                  </div>
                </div>

                <div className="text-center">
                  <AnimatedButton className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
                    <span className="flex items-center">
                      Start Your Campaign
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
