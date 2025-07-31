import BeamsBackground from "@/components/beams-background"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import BentoGrid from "@/components/bento-grid"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      <BeamsBackground className="fixed inset-0 z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <BentoGrid />
        <Footer />
      </div>
    </div>
  )
}
