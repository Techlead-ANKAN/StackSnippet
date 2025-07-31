"use client"

import { Palette, Target, Camera, BarChart3, Zap } from "lucide-react"
import GlossyIcon from "./glossy-icon"

export default function BrandStrategy() {
  return (
    <section className="py-24 bg-gray-900/50 relative backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Our Expertise</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Featured Card */}
          <div className="col-span-1 lg:col-span-2 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-4 right-4">
              <div className="flex items-center px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full shadow-lg">
                ✨ FEATURED
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <GlossyIcon color="purple" size="lg" className="mb-6">
                  <Palette className="w-8 h-8" />
                </GlossyIcon>
                <h3 className="text-2xl font-bold text-white mb-4">Brand Strategy & Identity</h3>
                <p className="text-gray-300 mb-6">
                  Complete brand development from concept to market-ready identity that resonates with your audience. We
                  create compelling brand stories that connect with customers and drive business growth.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                    Logo & Visual Identity
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                    Brand Guidelines
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                    Market Positioning
                  </li>
                  <li className="text-sm text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                    Brand Voice Development
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 h-64 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl border border-purple-500/20"></div>
            </div>
          </div>

          {/* Digital Marketing Card */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-sm">
            <GlossyIcon color="blue" className="mb-4">
              <Target className="w-6 h-6" />
            </GlossyIcon>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Marketing Campaigns</h3>
              <p className="text-gray-300 mb-6">
                Data-driven digital campaigns across all platforms to maximize reach and conversion rates.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-400 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                  Social Media Marketing
                </li>
                <li className="text-sm text-gray-400 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                  PPC Advertising
                </li>
              </ul>
            </div>
          </div>

          {/* Content Creation Card */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-sm">
            <GlossyIcon color="green" className="mb-4">
              <Camera className="w-6 h-6" />
            </GlossyIcon>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Content Creation & Production</h3>
              <p className="text-gray-300 mb-6">
                High-quality content that tells your story and engages your audience across all touchpoints.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-400 flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3" />
                  Video Production
                </li>
                <li className="text-sm text-gray-400 flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3" />
                  Photography & Design
                </li>
              </ul>
            </div>
          </div>

          {/* Analytics Card */}
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-sm">
            <GlossyIcon color="orange" className="mb-4">
              <BarChart3 className="w-6 h-6" />
            </GlossyIcon>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Analytics & Performance</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive tracking and optimization to ensure maximum ROI from every marketing dollar spent.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-400 flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3" />
                  Performance Tracking
                </li>
                <li className="text-sm text-gray-400 flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3" />
                  ROI Analysis
                </li>
              </ul>
            </div>
          </div>

          {/* Growth Strategy Card */}
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-sm">
            <GlossyIcon color="pink" className="mb-4">
              <Zap className="w-6 h-6" />
            </GlossyIcon>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Growth Strategy</h3>
              <p className="text-gray-300 mb-6">
                Strategic planning and execution to accelerate your business growth and market presence.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-400 flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3" />
                  Market Expansion
                </li>
                <li className="text-sm text-gray-400 flex items-center">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3" />
                  Customer Acquisition
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
