"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ChevronDown, Loader2 } from "lucide-react"
import GlowButton from "./glow-button"

const services = [
  { id: "web-dev", name: "Web Development" },
  { id: "paid-social", name: "Paid Social" },
  { id: "google-ads", name: "Google Ads" },
  { id: "email-sms", name: "Email / SMS" },
  { id: "seo", name: "SEO" },
  { id: "analytics", name: "Analytics" },
  { id: "branding", name: "Branding" },
  { id: "content", name: "Content Creation" },
]

const budgetRanges = [
  { id: "1k-5k", name: "$1,000 - $5,000" },
  { id: "5k-10k", name: "$5,000 - $10,000" },
  { id: "10k-25k", name: "$10,000 - $25,000" },
  { id: "25k-plus", name: "$25,000+" },
]

export default function CustomerInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: [] as string[],
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const selectBudget = (budgetId: string) => {
    setFormData((prev) => ({ ...prev, budget: budgetId }))
    setBudgetDropdownOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Get Started</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your company"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Services Interested In</label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-left text-white flex justify-between items-center focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  >
                    <span>
                      {formData.services.length > 0
                        ? `${formData.services.length} service${formData.services.length > 1 ? "s" : ""} selected`
                        : "Select services"}
                    </span>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </button>

                  {servicesDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                      <div className="p-2 max-h-60 overflow-auto">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            className="flex items-center px-3 py-2 hover:bg-gray-700 rounded-md cursor-pointer"
                            onClick={() => toggleService(service.id)}
                          >
                            <div
                              className={`w-5 h-5 mr-3 flex-shrink-0 rounded border ${
                                formData.services.includes(service.id)
                                  ? "bg-blue-500 border-blue-500"
                                  : "border-gray-600"
                              } flex items-center justify-center`}
                            >
                              {formData.services.includes(service.id) && <Check className="h-3 w-3 text-white" />}
                            </div>
                            <span className="text-white">{service.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-left text-white flex justify-between items-center focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    onClick={() => setBudgetDropdownOpen(!budgetDropdownOpen)}
                  >
                    <span>
                      {formData.budget
                        ? budgetRanges.find((b) => b.id === formData.budget)?.name
                        : "Select budget range"}
                    </span>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </button>

                  {budgetDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                      <div className="p-2">
                        {budgetRanges.map((budget) => (
                          <div
                            key={budget.id}
                            className="px-3 py-2 hover:bg-gray-700 rounded-md cursor-pointer"
                            onClick={() => selectBudget(budget.id)}
                          >
                            <span className="text-white">{budget.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Tell us about your project and goals..."
                ></textarea>
              </div>

              <GlowButton
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Inquiry"
                )}
              </GlowButton>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 border border-gray-800 rounded-3xl p-12 backdrop-blur-sm text-center"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-xl text-gray-300 mb-6">Your inquiry has been submitted successfully.</p>
            <p className="text-gray-400 mb-8">
              Our team will review your project details and get back to you within 24 hours at{" "}
              <span className="text-white">{formData.email}</span>.
            </p>
            <GlowButton
              onClick={() => {
                window.location.href = "/"
              }}
              className="bg-white text-black hover:bg-gray-100"
            >
              Return to Home
            </GlowButton>
          </motion.div>
        )}
      </div>
    </section>
  )
}
