"use client"

import { Palette, Target, Camera, BarChart3, Megaphone, Globe } from "lucide-react"

const services = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Brand Strategy & Identity",
    description: "Complete brand development from concept to market-ready identity that resonates with your audience.",
    features: ["Logo & Visual Identity", "Brand Guidelines", "Market Positioning", "Brand Voice Development"],
    gradient: "from-purple-100 to-purple-200",
    iconBg: "bg-purple-600",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Digital Marketing Campaigns",
    description: "Data-driven digital campaigns across all platforms to maximize reach and conversion rates.",
    features: ["Social Media Marketing", "PPC Advertising", "Email Campaigns", "SEO Optimization"],
    gradient: "from-blue-100 to-blue-200",
    iconBg: "bg-blue-600",
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: "Content Creation & Production",
    description: "High-quality content that tells your story and engages your audience across all touchpoints.",
    features: ["Video Production", "Photography", "Graphic Design", "Copywriting"],
    gradient: "from-green-100 to-green-200",
    iconBg: "bg-green-600",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analytics & Performance",
    description: "Comprehensive tracking and optimization to ensure maximum ROI from every marketing dollar spent.",
    features: ["Performance Tracking", "ROI Analysis", "A/B Testing", "Growth Metrics"],
    gradient: "from-orange-100 to-orange-200",
    iconBg: "bg-orange-600",
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: "Public Relations & Outreach",
    description: "Strategic PR campaigns and media outreach to build brand authority and market presence.",
    features: ["Media Relations", "Press Releases", "Influencer Partnerships", "Crisis Management"],
    gradient: "from-pink-100 to-pink-200",
    iconBg: "bg-pink-600",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Development & Design",
    description: "Modern, responsive websites and digital experiences that convert visitors into customers.",
    features: ["Website Design", "E-commerce Development", "UX/UI Design", "Mobile Optimization"],
    gradient: "from-indigo-100 to-indigo-200",
    iconBg: "bg-indigo-600",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything your business needs to succeed in today's competitive market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-8 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`${service.iconBg} text-white mb-6 p-3 rounded-2xl w-fit`}>{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
