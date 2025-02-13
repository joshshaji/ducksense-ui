import Hero from "./components/Hero"
import Features from "./components/Features"
import CTA from "./components/CTA"
import Testimonial from "./components/Testimonial"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Testimonial />
      <Footer />
    </div>
  )
}

