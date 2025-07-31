"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, Check, Briefcase, Home, Palette, Target, Globe, DollarSign } from "lucide-react"
import AnimatedButton from "./animated-button"

const businessTypes = [
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Online stores, physical retail, product sales",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: <Home className="w-8 h-8" />,
    description: "Agents, brokers, property management",
  },
  {
    id: "artist",
    name: "Artists & Creators",
    icon: <Palette className="w-8 h-8" />,
    description: "Musicians, content creators, influencers",
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: <Target className="w-8 h-8" />,
    description: "Consultants, lawyers, accountants",
  },
  { id: "tech", name: "Technology", icon: <Globe className="w-8 h-8" />, description: "SaaS, apps, tech startups" },
]

const budgetRanges = [
  { id: "1k-5k", name: "$1,000 - $5,000", value: 3000 },
  { id: "5k-10k", name: "$5,000 - $10,000", value: 7500 },
  { id: "10k-25k", name: "$10,000 - $25,000", value: 17500 },
  { id: "25k-plus", name: "$25,000+", value: 35000 },
]

const services = [
  { id: "seo", name: "SEO & Content Marketing", description: "Improve search rankings and organic traffic" },
  { id: "paid-ads", name: "Paid Advertising", description: "Google Ads, Facebook Ads, PPC campaigns" },
  { id: "social", name: "Social Media Marketing", description: "Content creation and community management" },
  { id: "web-dev", name: "Web Development", description: "Custom websites and e-commerce solutions" },
  { id: "branding", name: "Brand Strategy", description: "Logo design, brand guidelines, positioning" },
  { id: "email", name: "Email Marketing", description: "Automated campaigns and newsletters" },
]

const goals = [
  { id: "leads", name: "Generate More Leads", icon: <Target className="w-6 h-6" /> },
  { id: "sales", name: "Increase Sales", icon: <DollarSign className="w-6 h-6" /> },
  { id: "awareness", name: "Build Brand Awareness", icon: <Globe className="w-6 h-6" /> },
  { id: "traffic", name: "Drive Website Traffic", icon: <ArrowRight className="w-6 h-6" /> },
]

export default function GetStartedFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    businessType: "",
    budget: "",
    services: [] as string[],
    goals: [] as string[],
    name: "",
    email: "",
    company: "",
    phone: "",
  })

  const steps = ["Business Type", "Budget Range", "Services Needed", "Primary Goals", "Contact Information", "Complete"]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const toggleGoal = (goalId: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goalId) ? prev.goals.filter((id) => id !== goalId) : [...prev.goals, goalId],
    }))
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <section className="min-h-screen flex items-center justify-center py-32">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">Get Started</h1>
            <span className="text-sm text-gray-400">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-gray-900/50 border border-gray-800/50 rounded-3xl p-8 backdrop-blur-sm min-h-[500px] flex flex-col">
          <AnimatePresence mode="wait">
            {/* Step 0: Business Type */}
            {currentStep === 0 && (
              <motion.div
                key="business-type"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-bold text-white mb-4">What type of business do you have?</h2>
                <p className="text-gray-400 mb-8">This helps us customize our recommendations for your industry.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {businessTypes.map((business) => (
                    <motion.button
                      key={business.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData((prev) => ({ ...prev, businessType: business.id }))}
                      className={`p-6 rounded-xl border transition-all duration-200 text-left ${
                        formData.businessType === business.id
                          ? "bg-blue-500/20 border-blue-500/50 text-white"
                          : "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50"
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-3">
                        <div
                          className={`p-3 rounded-lg ${
                            formData.businessType === business.id ? "bg-blue-500/30" : "bg-gray-700/50"
                          }`}
                        >
                          {business.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-lg">{business.name}</div>
                          <div className="text-sm opacity-70">{business.description}</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 1: Budget */}
            {currentStep === 1 && (
              <motion.div
                key="budget"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-bold text-white mb-4">What's your monthly marketing budget?</h2>
                <p className="text-gray-400 mb-8">
                  This helps us recommend the right services and strategies for your investment level.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {budgetRanges.map((budget) => (
                    <motion.button
                      key={budget.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData((prev) => ({ ...prev, budget: budget.id }))}
                      className={`p-6 rounded-xl border transition-all duration-200 text-center ${
                        formData.budget === budget.id
                          ? "bg-blue-500/20 border-blue-500/50 text-white"
                          : "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50"
                      }`}
                    >
                      <div className="text-2xl font-bold mb-2">{budget.name}</div>
                      <div className="text-sm opacity-70">Monthly investment</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Services */}
            {currentStep === 2 && (
              <motion.div
                key="services"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Which services interest you most?</h2>
                <p className="text-gray-400 mb-8">
                  Select all that apply. We'll create a custom strategy around your needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services.map((service) => (
                    <motion.button
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleService(service.id)}
                      className={`p-6 rounded-xl border transition-all duration-200 text-left ${
                        formData.services.includes(service.id)
                          ? "bg-blue-500/20 border-blue-500/50 text-white"
                          : "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-lg">{service.name}</div>
                        {formData.services.includes(service.id) && <Check className="w-5 h-5 text-blue-400" />}
                      </div>
                      <div className="text-sm opacity-70">{service.description}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Goals */}
            {currentStep === 3 && (
              <motion.div
                key="goals"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-bold text-white mb-4">What are your primary goals?</h2>
                <p className="text-gray-400 mb-8">Help us understand what success looks like for your business.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {goals.map((goal) => (
                    <motion.button
                      key={goal.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleGoal(goal.id)}
                      className={`p-6 rounded-xl border transition-all duration-200 text-left ${
                        formData.goals.includes(goal.id)
                          ? "bg-blue-500/20 border-blue-500/50 text-white"
                          : "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-lg ${
                            formData.goals.includes(goal.id) ? "bg-blue-500/30" : "bg-gray-700/50"
                          }`}
                        >
                          {goal.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-lg">{goal.name}</div>
                        </div>
                        {formData.goals.includes(goal.id) && <Check className="w-5 h-5 text-blue-400" />}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Let's get in touch</h2>
                <p className="text-gray-400 mb-8">
                  We'll use this information to create your custom strategy and get back to you within 24 hours.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Complete */}
            {currentStep === 5 && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex-1 text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">You're all set!</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Thank you for choosing Motion Records. We'll create a custom strategy based on your responses and get
                  back to you within 24 hours.
                </p>
                <div className="bg-gray-800/50 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        1
                      </div>
                      <span className="text-gray-300">We'll analyze your responses and create a custom strategy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        2
                      </div>
                      <span className="text-gray-300">
                        Our team will reach out within 24 hours to schedule a consultation
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        3
                      </div>
                      <span className="text-gray-300">
                        We'll present your personalized marketing plan and next steps
                      </span>
                    </div>
                  </div>
                </div>
                <AnimatedButton
                  onClick={() => (window.location.href = "/")}
                  className="bg-white text-black hover:bg-gray-100"
                >
                  Return to Home
                </AnimatedButton>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {currentStep < 5 && (
            <div className="flex justify-between items-center mt-8">
              <div>
                {currentStep > 0 && (
                  <AnimatedButton
                    onClick={prevStep}
                    variant="outline"
                    className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </AnimatedButton>
                )}
              </div>

              <div>
                {currentStep < 4 && (
                  <AnimatedButton
                    onClick={nextStep}
                    disabled={
                      (currentStep === 0 && !formData.businessType) ||
                      (currentStep === 1 && !formData.budget) ||
                      (currentStep === 2 && formData.services.length === 0) ||
                      (currentStep === 3 && formData.goals.length === 0)
                    }
                    className="bg-white text-black hover:bg-gray-100"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                )}

                {currentStep === 4 && (
                  <AnimatedButton
                    onClick={nextStep}
                    disabled={!formData.name || !formData.email}
                    className="bg-white text-black hover:bg-gray-100"
                  >
                    Complete Setup
                    <Check className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
