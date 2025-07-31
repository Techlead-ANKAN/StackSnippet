"use client"

import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Independent Artist",
    company: "Visual Arts Studio",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Motion Records transformed my artistic brand completely. My gallery sales increased by 300% within 6 months of working with them.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Real Estate Agent",
    company: "Premium Properties",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "The traction strategies they developed helped me become the #1 agent in my area. Their approach to personal branding is unmatched.",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "Fashion Designer",
    company: "Thompson Couture",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "From unknown designer to featured in Vogue - Motion Records made it happen. Their brand positioning strategy was game-changing.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped creative professionals and entrepreneurs achieve remarkable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
