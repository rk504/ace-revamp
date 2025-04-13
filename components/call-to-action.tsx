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
          className="bg-yellow-400 hover:bg-yellow-500 py-3 px-6 text-lg text-black"
          asChild
        >
          <a href="mailto:reese@acebridge.org?subject=Free%20Demo%20Lesson%20Request&body=Hi%20Reese%2C%0A%0AI'm%20interested%20in%20scheduling%20a%20free%20demo%20lesson.%20Here%20are%20some%20times%20that%20work%20best%20for%20me%3A%0A%0A[Please%20include%20your%20availability%20and%20time%20zone]%0A%0AThank%20you!">
            Email reese@acebridge.org
          </a>
        </Button>
      </div>
    </section>
  )
}
