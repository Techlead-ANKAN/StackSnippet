import GlowButton from "./glow-button"

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Brand?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of successful artists, real estate professionals, and entrepreneurs who've accelerated their
          growth with our proven strategies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <GlowButton size="lg" className="px-8 py-4 text-lg">
            Start Your Transformation
          </GlowButton>
          <button className="text-white hover:text-blue-400 transition-colors font-medium">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
