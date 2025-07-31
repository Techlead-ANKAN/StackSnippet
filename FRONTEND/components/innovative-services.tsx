"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Instagram, Youtube, Shield, CheckCircle, DollarSign } from "lucide-react"
import AnimatedButton from "./animated-button"
import Link from "next/link"

const services = [
  {
    title: "Paid Social",
    description:
      "Drive growth and engagement with data-driven paid social media ads, using targeted strategies to elevate your brand.",
    mockup: "social",
  },
  {
    title: "Google Ads",
    description:
      "Reach customers at the right moment with Google Ads, driving traffic and sales through targeted online ads.",
    mockup: "google-ads",
  },
  {
    title: "Email / SMS",
    description: "Reach customers with targeted email and SMS marketing that drives sales, growth, and loyalty.",
    mockup: "email",
  },
  {
    title: "SEO",
    description:
      "Enhance your search engine visibility with SEO services, including audits, keyword analysis, and optimization.",
    mockup: "seo",
  },
  {
    title: "Analytics",
    description:
      "Track performance and gain insights with comprehensive analytics and reporting solutions for data-driven decisions.",
    mockup: "analytics",
  },
  {
    title: "Web Development",
    description:
      "We create everything from simple to complex websites, with flexible plans and custom solutions tailored to your needs.",
    mockup: "web-dev",
    badges: [
      { icon: <Shield className="w-4 h-4" />, text: "SSL Secured" },
      { icon: <DollarSign className="w-4 h-4" />, text: "No Monthly Fees" },
      { icon: <CheckCircle className="w-4 h-4" />, text: "99.9% Uptime" },
    ],
  },
]

export default function InnovativeServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Innovative services for growth</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Custom-tailored solutions to streamline, innovate, and grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Top row - Paid Social and Google Ads */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                    {/* Paid Social Mockup */}
                    {service.mockup === "social" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="flex justify-between items-center mb-3">
                            <div className="text-xs text-gray-400">Platforms</div>
                            <div className="flex space-x-2">
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center"
                              >
                                <Instagram className="w-3 h-3 text-white" />
                              </motion.div>
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="w-5 h-5 bg-red-600 rounded-md flex items-center justify-center"
                              >
                                <Youtube className="w-3 h-3 text-white" />
                              </motion.div>
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="w-5 h-5 bg-yellow-400 rounded-md flex items-center justify-center text-black text-xs"
                              >
                                👻
                              </motion.div>
                            </div>
                          </div>
                          <div className="space-y-1 mb-3">
                            <motion.div
                              className="text-white text-xs px-2 py-1 rounded bg-blue-600"
                              initial={{ width: "0%" }}
                              whileInView={{ width: "85%" }}
                              transition={{ duration: 1, delay: 0.8 }}
                              viewport={{ once: true }}
                            >
                              Facebook
                            </motion.div>
                            <motion.div
                              className="text-white text-xs px-2 py-1 rounded bg-pink-600"
                              initial={{ width: "0%" }}
                              whileInView={{ width: "92%" }}
                              transition={{ duration: 1, delay: 1 }}
                              viewport={{ once: true }}
                            >
                              Instagram
                            </motion.div>
                            <motion.div
                              className="text-white text-xs px-2 py-1 rounded bg-black"
                              initial={{ width: "0%" }}
                              whileInView={{ width: "78%" }}
                              transition={{ duration: 1, delay: 1.2 }}
                              viewport={{ once: true }}
                            >
                              TikTok
                            </motion.div>
                            <motion.div
                              className="text-black text-xs px-2 py-1 rounded bg-yellow-400"
                              initial={{ width: "0%" }}
                              whileInView={{ width: "65%" }}
                              transition={{ duration: 1, delay: 1.4 }}
                              viewport={{ once: true }}
                            >
                              Snapchat
                            </motion.div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-xs text-gray-400 mb-1">Growth</div>
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                className="text-lg font-bold text-green-400"
                              >
                                +23%
                              </motion.div>
                            </div>
                            <div className="flex items-end space-x-1 h-8">
                              {[4, 6, 3, 8, 5, 7].map((height, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ height: "4px" }}
                                  whileInView={{ height: `${height * 4}px` }}
                                  transition={{ duration: 0.8, delay: 1.6 + i * 0.1 }}
                                  viewport={{ once: true }}
                                  className="bg-blue-500 w-1 rounded-t"
                                ></motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Google Ads Mockup */}
                    {service.mockup === "google-ads" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="flex items-center space-x-2 mb-4">
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                            >
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
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
                            </motion.div>
                            <div>
                              <div className="text-xs text-white">Google Ads</div>
                              <div className="text-xs text-gray-400">Campaign Dashboard</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Impressions</span>
                              <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                className="text-green-400"
                              >
                                +15.2K
                              </motion.span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Clicks</span>
                              <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                                className="text-blue-400"
                              >
                                1,247
                              </motion.span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">CTR</span>
                              <span className="text-gray-300">8.2%</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Quality Score</span>
                              <span className="text-green-400">9/10</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-between h-auto">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle row - Email/SMS, SEO, Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(2, 5).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                    {/* Email/SMS Mockup */}
                    {service.mockup === "email" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: (index + 2) * 0.2 }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="space-y-2 mb-3">
                            <motion.div
                              animate={{ width: ["100%", "90%", "100%"] }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                              className="bg-gray-700 h-2 rounded"
                            ></motion.div>
                            <motion.div
                              animate={{ width: ["75%", "85%", "75%"] }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                              className="bg-gray-700 h-2 rounded"
                            ></motion.div>
                          </div>
                          <div className="space-y-1 mb-3">
                            <div className="bg-gray-700 h-1 w-full rounded"></div>
                            <div className="bg-gray-700 h-1 w-full rounded"></div>
                            <div className="bg-gray-700 h-1 w-2/3 rounded"></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="bg-gray-700 h-6 w-20 rounded"></div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="bg-blue-600 h-8 w-24 rounded text-xs flex items-center justify-center text-white cursor-pointer"
                            >
                              Send
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* SEO Mockup */}
                    {service.mockup === "seo" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: (index + 2) * 0.2 }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="text-xs text-gray-400 mb-2">SEO Report</div>
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Traffic</div>
                              <motion.div
                                animate={{ width: ["60%", "80%", "60%"] }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                                className="bg-gray-600 h-1 rounded mt-1"
                              ></motion.div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Ranking</div>
                              <motion.div
                                animate={{ width: ["75%", "90%", "75%"] }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                                className="bg-green-600 h-1 rounded mt-1"
                              ></motion.div>
                            </div>
                          </div>
                          <div className="bg-gray-700 rounded p-2">
                            <div className="text-xs text-gray-400">Site Audit</div>
                            <div className="space-y-1 mt-1">
                              <div className="bg-gray-600 h-1 w-full rounded"></div>
                              <div className="bg-gray-600 h-1 w-2/3 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Analytics Mockup */}
                    {service.mockup === "analytics" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: (index + 2) * 0.2 }}
                        className="w-full h-full p-2"
                      >
                        <div className="bg-gray-800 rounded-lg p-3 h-full">
                          <div className="text-xs text-gray-400 mb-2">Performance</div>
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Ranking</div>
                              <motion.div
                                animate={{ color: ["#10b981", "#3b82f6", "#10b981"] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                className="text-xs font-bold mt-1"
                              >
                                #1
                              </motion.div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Impressions</div>
                              <div className="text-xs text-white mt-1">12.5K</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Clicks</div>
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                className="text-xs text-white mt-1"
                              >
                                2.1K
                              </motion.div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Visitors</div>
                              <div className="text-xs text-white mt-1">1.8K</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-between h-auto">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - Web Development (full width) */}
          {services.slice(5).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm mb-6">{service.description}</p>

                    {/* Trust Badges */}
                    {service.badges && (
                      <div className="flex flex-wrap gap-3 mb-6">
                        {service.badges.map((badge, badgeIndex) => (
                          <div
                            key={badgeIndex}
                            className="flex items-center space-x-2 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-700/50"
                          >
                            <div className="text-green-400">{badge.icon}</div>
                            <span className="text-xs text-gray-300">{badge.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end items-center">
                    <Link href="/services#web-development">
                      <AnimatedButton className="bg-white text-black hover:bg-gray-100 px-6 py-2">
                        <span className="flex items-center">Learn More</span>
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden relative border border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                      {/* Web Development Mockup */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-full h-full"
                      >
                        {/* Browser Chrome */}
                        <div className="bg-gray-700 rounded-t-lg p-2 mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded flex-1 text-center">
                              www.motionmedia.com
                            </div>
                          </div>
                        </div>
                        {/* Website Content */}
                        <div className="bg-gray-800 rounded-b-lg p-3 h-[calc(100%-36px)] grid grid-cols-3 gap-3">
                          <div className="col-span-3 flex justify-between items-center mb-2">
                            <motion.div
                              animate={{ width: ["60px", "80px", "60px"] }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                              className="bg-gray-700 h-4 rounded"
                            ></motion.div>
                            <div className="flex space-x-2">
                              <div className="bg-gray-700 h-3 w-12 rounded"></div>
                              <div className="bg-gray-700 h-3 w-12 rounded"></div>
                              <div className="bg-gray-700 h-3 w-12 rounded"></div>
                            </div>
                          </div>
                          <motion.div
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            className="col-span-3 h-20 bg-gray-700 rounded mb-3"
                          ></motion.div>
                          <div className="bg-gray-700 h-24 rounded"></div>
                          <div className="bg-gray-700 h-24 rounded"></div>
                          <div className="bg-gray-700 h-24 rounded"></div>
                          <div className="col-span-3 grid grid-cols-4 gap-2">
                            <div className="bg-gray-700 h-8 rounded"></div>
                            <div className="bg-gray-700 h-8 rounded"></div>
                            <div className="bg-gray-700 h-8 rounded"></div>
                            <div className="bg-gray-700 h-8 rounded"></div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
