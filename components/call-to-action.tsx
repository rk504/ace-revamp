"use client"

import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="py-16 px-4 bg-[#3b5998] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Want a Complimentary Introductory Lesson?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Share your email below to learn more about lessons with Ace Bridge.
        </p>
        <Button
          size="lg"
          className="bg-white text-[#3b5998] hover:bg-gray-100"
          onClick={() => {
            // Scroll to the form section
            const form = document.querySelector("form")
            form?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Schedule Your Free Demo
        </Button>
      </div>
    </section>
  )
}
