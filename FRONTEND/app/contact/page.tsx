import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import ContactPage from "@/components/contact-page"
import BackgroundPaths from "@/components/background-paths"

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <ContactPage />
        <AnimatedFooter />
      </div>
    </div>
  )
}
