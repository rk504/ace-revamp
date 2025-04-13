"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CallToAction() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#3b5998]/95 backdrop-blur-sm"></div>
        <Image 
          src="/images/playing-cards.jpg"
          alt="Bridge cards background"
          fill
          className="object-cover w-full h-full opacity-20"
        />
      </div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-3/5 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Want a Complimentary Introductory Lesson?</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Take the first step toward improving your bridge game with our no-commitment demo lesson. Experience our teaching style firsthand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-[#3b5998] hover:bg-white/90 transition-colors text-base py-6 px-8"
                onClick={() => {
                  // Scroll to the form section
                  const form = document.querySelector("#demo-form")
                  form?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Schedule Your Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-colors text-base py-6 px-8"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
          <div className="lg:w-2/5 relative">
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute w-full h-full rounded-full bg-white/10 animate-ping-slow opacity-70"></div>
              <div className="absolute inset-6 rounded-full bg-white/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes ping-slow {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.8;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  )
}
