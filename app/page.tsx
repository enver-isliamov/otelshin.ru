import HeroSection from "@/components/hero-section"
import TargetAudience from "@/components/target-audience"
import WhyChooseUs from "@/components/why-choose-us"
import AboutCompany from "@/components/about-company"
import PricingSection from "@/components/pricing-section"
import AdditionalInfo from "@/components/additional-info"
import Testimonials from "@/components/testimonials"
import ContactCTA from "@/components/contact-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TargetAudience />
      <WhyChooseUs />
      <AboutCompany />
      <PricingSection />
      <AdditionalInfo />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
