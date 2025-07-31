"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Music, ShoppingBag, ChevronRight, BarChart3, Globe, ArrowLeft } from "lucide-react"
import GlowButton from "./glow-button"
import GlossyIcon from "./glossy-icon"

type BusinessType = "retail" | "real-estate" | "artist" | "startup" | "enterprise" | null
type Step = "select" | "strategy" | "email"

interface BusinessOption {
  id: BusinessType
  name: string
  icon: React.ReactNode
  description: string
  color: "blue" | "green" | "purple" | "pink" | "orange"
  platforms?: React.ReactNode[]
  strategy: {
    title: string
    steps: string[]
  }
}

const businessOptions: BusinessOption[] = [
  {
    id: "retail",
    name: "Retail",
    icon: <ShoppingBag className="h-6 w-6" />,
    description: "Physical or online stores selling products directly to consumers",
    color: "blue",
    strategy: {
      title: "Retail Marketing Strategy",
      steps: [
        "Local SEO optimization to drive foot traffic",
        "Social media campaigns featuring products",
        "Email marketing with personalized offers",
        "In-store experience enhancement",
      ],
    },
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: <Home className="h-6 w-6" />,
    description: "Agents, brokers, and property management companies",
    color: "green",
    strategy: {
      title: "Real Estate Marketing Strategy",
      steps: [
        "Property showcase videos and virtual tours",
        "Targeted local advertising campaigns",
        "Personal brand development for agents",
        "Lead generation through property valuation tools",
      ],
    },
  },
  {
    id: "artist",
    name: "Artist",
    icon: <Music className="h-6 w-6" />,
    description: "Musicians, content creators, and digital artists",
    color: "purple",
    platforms: [
      <div
        key="spotify"
        className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg"
      >
        S
      </div>,
      <div
        key="apple"
        className="w-6 h-6 bg-gray-900 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg border border-white/20"
      >
        ♪
      </div>,
      <div
        key="instagram"
        className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg"
      >
        IG
      </div>,
      <div
        key="snapchat"
        className="w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg"
      >
        👻
      </div>,
    ],
    strategy: {
      title: "Artist Marketing Strategy",
      steps: [
        "Multi-platform content distribution strategy",
        "Fan engagement and community building",
        "Streaming platform optimization",
        "Brand partnerships and collaborations",
      ],
    },
  },
  {
    id: "startup",
    name: "Startup",
    icon: <BarChart3 className="h-6 w-6" />,
    description: "New and emerging businesses looking to scale",
    color: "pink",
    strategy: {
      title: "Startup Growth Strategy",
      steps: [
        "Brand identity development",
        "Growth hacking techniques",
        "Content marketing for thought leadership",
        "Strategic PR for maximum visibility",
      ],
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: <Globe className="h-6 w-6" />,
    description: "Large established businesses with multiple departments",
    color: "orange",
    strategy: {
      title: "Enterprise Marketing Strategy",
      steps: [
        "Brand consistency across all channels",
        "Department-specific marketing campaigns",
        "Advanced analytics and reporting",
        "Market expansion and acquisition strategies",
      ],
    },
  },
]

export default function BusinessSelector() {
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessType>(null)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState<Step>("select")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setCurrentStep("select")
      setSelectedBusiness(null)
      setSubmitted(false)
      setEmail("")
    }, 3000)
  }

  const selectedOption = businessOptions.find((option) => option.id === selectedBusiness)

  const goBack = () => {
    if (currentStep === "strategy") {
      setSelectedBusiness(null)
      setCurrentStep("select")
    } else if (currentStep === "email") {
      setCurrentStep("strategy")
    }
  }

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Find Your Perfect Strategy</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select your business type to receive a customized marketing approach
          </p>
        </motion.div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden backdrop-blur-sm">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-800">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: "0%" }}
              animate={{
                width:
                  currentStep === "select"
                    ? "33%"
                    : currentStep === "strategy"
                      ? "66%"
                      : currentStep === "email" && !submitted
                        ? "90%"
                        : "100%",
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-6 border-b border-gray-800 flex items-center">
            {currentStep !== "select" && (
              <button
                onClick={goBack}
                className="mr-4 p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5 text-gray-400" />
              </button>
            )}
            <div>
              <h3 className="text-lg font-semibold text-white">
                {currentStep === "select"
                  ? "What type of business are you?"
                  : currentStep === "strategy"
                    ? selectedOption?.strategy.title
                    : "Get Your Strategy"}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {currentStep === "select"
                  ? "Select the option that best describes your business"
                  : currentStep === "strategy"
                    ? `Customized strategy for ${selectedOption?.name} businesses`
                    : "Enter your email to receive your personalized strategy"}
              </p>
            </div>
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Select Business Type */}
              {currentStep === "select" && (
                <motion.div
                  key="select"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {businessOptions.map((option, index) => (
                    <motion.button
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group w-full text-left p-6 rounded-2xl border transition-all duration-200 bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 hover:border-gray-700"
                      onClick={() => {
                        setSelectedBusiness(option.id)
                        setCurrentStep("strategy")
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <GlossyIcon color={option.color} size="md" className="mr-4">
                          {option.icon}
                        </GlossyIcon>
                        <div className="flex-1">
                          <h4 className="font-medium text-white text-lg">{option.name}</h4>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{option.description}</p>
                      {option.platforms && <div className="flex space-x-2 mb-4">{option.platforms}</div>}
                      <div className="flex items-center text-sm text-blue-400 group-hover:text-blue-300">
                        <span>View strategy</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {/* Step 2: Show Strategy */}
              {currentStep === "strategy" && selectedOption && (
                <motion.div
                  key="strategy"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <GlossyIcon color={selectedOption.color} size="lg" className="mb-6">
                        {selectedOption.icon}
                      </GlossyIcon>
                      <h3 className="text-2xl font-bold text-white mb-4">{selectedOption.name}</h3>
                      <p className="text-gray-400 mb-6">
                        Our tailored approach for {selectedOption.name.toLowerCase()} businesses focuses on driving
                        growth and maximizing your marketing ROI.
                      </p>
                    </div>

                    <div className="md:w-2/3">
                      <div className="mb-8">
                        <h4 className="font-semibold text-white mb-6 text-xl">Recommended Strategy:</h4>
                        <ul className="space-y-6">
                          {selectedOption.strategy.steps.map((step, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <GlossyIcon color={selectedOption.color} size="sm" className="mr-4 mt-0.5">
                                <span className="text-xs font-bold">{index + 1}</span>
                              </GlossyIcon>
                              <div>
                                <span className="text-gray-300 text-lg">{step}</span>
                                <p className="text-gray-500 text-sm mt-1">
                                  {
                                    [
                                      "Our experts will optimize your strategy for maximum impact and ROI.",
                                      "We use data-driven approaches to ensure measurable results.",
                                      "Custom solutions tailored to your specific business needs.",
                                      "Ongoing optimization based on performance metrics.",
                                    ][index]
                                  }
                                </p>
                              </div>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <GlowButton
                        onClick={() => setCurrentStep("email")}
                        className="w-full bg-white text-black hover:bg-gray-100"
                      >
                        Get This Strategy
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </GlowButton>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Email Form */}
              {currentStep === "email" && selectedOption && (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-md mx-auto"
                >
                  {!submitted ? (
                    <>
                      <div className="text-center mb-8">
                        <GlossyIcon color={selectedOption.color} size="lg" className="mx-auto mb-6">
                          {selectedOption.icon}
                        </GlossyIcon>
                        <h3 className="text-2xl font-bold text-white mb-2">{selectedOption.strategy.title}</h3>
                        <p className="text-gray-400">
                          Enter your email to receive your personalized {selectedOption.name.toLowerCase()} marketing
                          strategy.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                          />
                        </div>

                        <GlowButton type="submit" className="w-full bg-white text-black hover:bg-gray-100">
                          Send Me The Strategy
                        </GlowButton>

                        <p className="text-xs text-gray-500 text-center">
                          By submitting, you agree to receive marketing communications from us. You can unsubscribe at
                          any time.
                        </p>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center p-8"
                    >
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Strategy Sent!</h3>
                      <p className="text-gray-400 mb-6">
                        Your personalized {selectedOption.name.toLowerCase()} marketing strategy has been sent to{" "}
                        <span className="text-white">{email}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Check your inbox in the next few minutes. If you don't see it, please check your spam folder.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
