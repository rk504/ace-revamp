import { Hero } from "@/components/hero"
import { DemoForm } from "@/components/demo-form"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <DemoForm />
      <CallToAction />
    </div>
  )
}
