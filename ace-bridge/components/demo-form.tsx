"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function DemoForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this to your backend
    console.log("Email submitted:", email)
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white" id="demo-form">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to improve your bridge skills?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Enter your email for a complimentary first lesson and discover why our students love learning with us.
            </p>
            <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </span>
                <span className="text-gray-700">Expert instructors with decades of experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </span>
                <span className="text-gray-700">Hands-on approach with actual gameplay</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </span>
                <span className="text-gray-700">Small groups for personalized attention</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full max-w-md">
            <Card className="shadow-lg border-0 overflow-hidden">
              <CardHeader className="bg-[#3b5998] text-white pb-6">
                <CardTitle className="text-2xl">Free Demo Lesson</CardTitle>
                <CardDescription className="text-white/80">
                  No commitment required
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {submitted ? (
                  <div className="text-center py-8 px-4">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h3>
                    <p className="text-gray-600">We'll be in touch soon to schedule your free demo lesson.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                        Email address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 bg-[#3b5998] hover:bg-[#2d4373] transition-colors">
                      Get Your Free Demo
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By submitting, you agree to our terms of service and privacy policy.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
