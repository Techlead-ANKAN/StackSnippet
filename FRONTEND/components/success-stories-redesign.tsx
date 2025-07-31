"use client"

import { motion } from "framer-motion"
import { Star, ArrowRight, TrendingUp } from "lucide-react"
import { useState } from "react"

const stories = [
  {
    company: "TechFlow Solutions",
    industry: "SaaS",
    results: {
      revenue: "+340%",
      leads: "+280%",
      conversion: "+150%",
    },
    quote:
      "Motion transformed our entire marketing strategy. We went from struggling to get leads to having a consistent pipeline of qualified prospects.",
    author: "Sarah Chen",
    position: "CEO",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "Monthly Revenue", before: "$45K", after: "$198K" },
      { label: "Lead Generation", before: "120/month", after: "456/month" },
      { label: "Conversion Rate", before: "2.1%", after: "5.3%" },
    ],
  },
  {
    company: "Urban Fitness Co.",
    industry: "Fitness",
    results: {
      revenue: "+220%",
      leads: "+190%",
      conversion: "+85%",
    },
    quote:
      "The ROI we've seen from Motion's campaigns is incredible. Our gym memberships have tripled in just 8 months.",
    author: "Marcus Rodriguez",
    position: "Founder",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "Monthly Revenue", before: "$28K", after: "$89K" },
      { label: "New Members", before: "45/month", after: "131/month" },
      { label: "Retention Rate", before: "68%", after: "89%" },
    ],
  },
  {
    company: "Artisan Coffee Co.",
    industry: "E-commerce",
    results: {
      revenue: "+410%",
      leads: "+320%",
      conversion: "+180%",
    },
    quote: "Motion didn't just increase our sales - they helped us build a brand that customers love and trust.",
    author: "Emma Thompson",
    position: "Co-Founder",
    image: "/placeholder.svg?height=400&width=600",
    metrics: [
      { label: "Monthly Revenue", before: "$12K", after: "$61K" },
      { label: "Online Orders", before: "89/month", after: "374/month" },
      { label: "Customer LTV", before: "$45", after: "$126" },
    ],
  },
]

export default function SuccessStoriesRedesign() {
  const [activeStory, setActiveStory] = useState(0)

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
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400 font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Real Results from Real Clients
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Success Stories That Speak Volumes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth and success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveStory(index)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                activeStory === index
                  ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30"
                  : "bg-gray-900/30 border-gray-800 hover:border-gray-700"
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {story.company.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">{story.company}</h3>
                  <p className="text-sm text-gray-400">{story.industry}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{story.results.revenue}</div>
                  <div className="text-xs text-gray-400">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{story.results.leads}</div>
                  <div className="text-xs text-gray-400">Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{story.results.conversion}</div>
                  <div className="text-xs text-gray-400">Conversion</div>
                </div>
              </div>

              <div className="flex items-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">"{story.quote}"</p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-sm">{story.author}</p>
                  <p className="text-gray-400 text-xs">{story.position}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed View */}
        <motion.div
          key={activeStory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl p-8 border border-gray-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">{stories[activeStory].company} Case Study</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">"{stories[activeStory].quote}"</p>

              <div className="space-y-4">
                {stories[activeStory].metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-gray-400">{metric.label}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-red-400">{metric.before}</span>
                      <ArrowRight className="w-4 h-4 text-gray-500" />
                      <span className="text-green-400 font-bold">{metric.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden">
                <img
                  src={stories[activeStory].image || "/placeholder.svg"}
                  alt={`${stories[activeStory].company} results`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
