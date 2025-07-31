"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Star, Quote } from "lucide-react"
import GlowButton from "./glow-button"

const successStories = [
  {
    name: "Elevate Fitness",
    industry: "Health & Fitness",
    logo: "/placeholder.svg?height=80&width=80",
    image: "/placeholder.svg?height=600&width=800",
    challenge:
      "Struggling to stand out in a crowded fitness market with limited brand recognition and inconsistent marketing.",
    solution:
      "Comprehensive brand refresh, targeted social media campaigns, and email marketing strategy focused on customer success stories.",
    results: [
      "300% increase in membership sign-ups",
      "5x social media engagement",
      "Featured in Men's Health magazine",
    ],
    testimonial:
      "Motion Records transformed our brand from just another local gym to a recognized fitness authority. Their marketing strategy helped us connect with our ideal audience and showcase what makes us different.",
    person: {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=60&width=60",
    },
  },
  {
    name: "Lunar Beats",
    industry: "Music Production",
    logo: "/placeholder.svg?height=80&width=80",
    image: "/placeholder.svg?height=600&width=800",
    challenge:
      "Independent artist struggling to gain traction on streaming platforms and build a sustainable fan base.",
    solution:
      "Artist development strategy, playlist pitching campaign, content calendar, and targeted advertising to core demographics.",
    results: ["1.2M+ Spotify streams in 6 months", "Featured on 5 editorial playlists", "Sold-out first headline show"],
    testimonial:
      "Before working with Motion Records, I was just another artist lost in the noise. Their team understood exactly what made my sound unique and how to get it in front of the right listeners. The growth has been incredible.",
    person: {
      name: "Marcus Webb",
      role: "Recording Artist",
      image: "/placeholder.svg?height=60&width=60",
    },
  },
  {
    name: "Coastal Properties",
    industry: "Real Estate",
    logo: "/placeholder.svg?height=80&width=80",
    image: "/placeholder.svg?height=600&width=800",
    challenge:
      "High-end real estate agency struggling with digital presence and lead generation in a competitive market.",
    solution:
      "Premium brand positioning, virtual tour technology implementation, targeted PPC campaigns, and agent personal branding.",
    results: [
      "43% increase in luxury property listings",
      "Average selling time reduced by 28 days",
      "$12M in sales attributed to digital marketing",
    ],
    testimonial:
      "Motion Records understood the luxury real estate market and helped us communicate our value proposition effectively. Their strategies have directly contributed to our most successful year in business.",
    person: {
      name: "David Chen",
      role: "Principal Broker",
      image: "/placeholder.svg?height=60&width=60",
    },
  },
]

export default function SuccessStories() {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Success Stories</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped our clients achieve remarkable growth.
          </p>
        </motion.div>

        <div className="space-y-32">
          {successStories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Section */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent z-10" />
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mr-4 border border-gray-800">
                    <Image
                      src={story.logo || "/placeholder.svg"}
                      alt={story.name}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{story.name}</h2>
                    <p className="text-gray-400">{story.industry}</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">The Challenge</h3>
                    <p className="text-gray-400">{story.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Our Solution</h3>
                    <p className="text-gray-400">{story.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">The Results</h3>
                    <ul className="space-y-2">
                      {story.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex mb-4">
                    <Quote className="h-8 w-8 text-blue-500 mr-2 flex-shrink-0" />
                    <p className="text-gray-300 italic">{story.testimonial}</p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={story.person.image || "/placeholder.svg"}
                      alt={story.person.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-white">{story.person.name}</p>
                      <p className="text-sm text-gray-400">{story.person.role}</p>
                    </div>
                  </div>
                </div>

                <GlowButton className="bg-white text-black hover:bg-gray-100">
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </GlowButton>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Let's create a marketing strategy that delivers real results for your business.
          </p>
          <GlowButton size="lg" className="px-10 py-6 text-lg bg-white text-black hover:bg-gray-100">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </GlowButton>
        </motion.div>
      </div>
    </section>
  )
}
