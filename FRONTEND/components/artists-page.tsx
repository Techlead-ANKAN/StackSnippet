"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Music, Users, TrendingUp, Play, Headphones, Mic, Radio, ExternalLink } from "lucide-react"
import AnimatedButton from "./animated-button"

const artistServices = [
  {
    title: "Streaming Platform Optimization",
    description: "Maximize your reach on Spotify, Apple Music, YouTube Music, and other platforms",
    features: ["Playlist Pitching", "Release Strategy", "Metadata Optimization", "Cross-Platform Promotion"],
    icon: <Headphones className="w-8 h-8" />,
    price: "Starting at $1,500/month",
  },
  {
    title: "Social Media Growth",
    description: "Build your fanbase across Instagram, TikTok, YouTube, and Twitter",
    features: ["Content Creation", "Community Management", "Viral Strategy", "Influencer Collaborations"],
    icon: <Users className="w-8 h-8" />,
    price: "Starting at $2,000/month",
  },
  {
    title: "Music Video Production",
    description: "Professional music videos that capture your artistic vision",
    features: ["Concept Development", "Professional Filming", "Post-Production", "Distribution Strategy"],
    icon: <Play className="w-8 h-8" />,
    price: "Starting at $5,000",
  },
  {
    title: "Radio & PR Campaigns",
    description: "Get your music heard on radio stations and featured in media outlets",
    features: ["Radio Promotion", "Press Release Distribution", "Media Outreach", "Interview Coordination"],
    icon: <Radio className="w-8 h-8" />,
    price: "Starting at $3,000/campaign",
  },
  {
    title: "Live Performance Marketing",
    description: "Promote your tours, concerts, and live performances effectively",
    features: ["Event Promotion", "Ticket Sales Strategy", "Venue Partnerships", "Fan Engagement"],
    icon: <Mic className="w-8 h-8" />,
    price: "Starting at $1,200/event",
  },
  {
    title: "Brand Partnerships",
    description: "Connect with brands for sponsorships and collaboration opportunities",
    features: ["Brand Matching", "Deal Negotiation", "Campaign Management", "Performance Tracking"],
    icon: <TrendingUp className="w-8 h-8" />,
    price: "15% commission",
  },
]

const successMetrics = [
  { value: "2.5M+", label: "Streams Generated", description: "For our artist clients" },
  { value: "150K+", label: "New Followers", description: "Gained across platforms" },
  { value: "50+", label: "Playlist Placements", description: "On major streaming platforms" },
  { value: "25+", label: "Radio Stations", description: "Playing our artists' music" },
]

const caseStudies = [
  {
    artist: "Luna Beats",
    genre: "Electronic/Pop",
    challenge: "Unknown artist with 500 monthly listeners",
    solution: "Comprehensive streaming strategy + social media growth",
    results: ["1.2M monthly listeners", "Featured on 15 major playlists", "50K Instagram followers"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    artist: "The Midnight Collective",
    genre: "Indie Rock",
    challenge: "Struggling to break into mainstream market",
    solution: "Radio campaign + music video production",
    results: ["Radio play on 20+ stations", "500K YouTube views", "Signed to major label"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ArtistsPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Artist Marketing Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized marketing strategies for established artists ready to take their career to the next level
          </p>

          {/* Instagram Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6"
          >
            <a
              href="https://www.instagram.com/motionrecordsofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-white hover:border-purple-400/50 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @motionrecordsofficial
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </motion.div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {successMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-3xl font-bold text-white mb-2"
                style={{
                  textShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                }}
              >
                {metric.value}
              </motion.div>
              <div className="text-sm font-medium text-gray-300 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Comprehensive Artist Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artistServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300 group"
                style={{
                  boxShadow: hoveredService === index ? "0 20px 40px rgba(147, 51, 234, 0.1)" : "none",
                }}
              >
                <div className="text-purple-400 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">{service.price}</span>
                  <AnimatedButton className="bg-white text-black hover:bg-gray-100 px-3 py-1.5 text-xs">
                    <span className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </AnimatedButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Artist Success Stories</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.artist}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900/50 border border-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <div className="aspect-video bg-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music className="w-16 h-16 text-white/50" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.artist}</h3>
                      <p className="text-purple-400">{study.genre}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-400 text-sm">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Our Solution:</h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="text-green-400 text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center bg-gray-900/50 border border-gray-800/50 rounded-3xl p-12 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Amplify Your Music Career?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Join the artists who've transformed their careers with our proven marketing strategies. Let's discuss your
            goals and create a custom plan for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
              <span className="flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </AnimatedButton>
            <AnimatedButton
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
            >
              View Portfolio
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
