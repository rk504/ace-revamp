import { Hero } from "@/components/hero"
import { DemoForm } from "@/components/demo-form"
import { IntroSection } from "@/components/intro-section"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="bg-white">
        <IntroSection />
        <DemoForm />
        <div className="py-12"></div>
        <CallToAction />
        <div className="py-12"></div>
      </div>
    </div>
  )
}
