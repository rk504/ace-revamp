"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DemoForm() {
  const [email, setEmail] = useState("")
  const [availability, setAvailability] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this to your backend
    console.log("Form submitted:", { email, availability })
    setSubmitted(true)
    setEmail("")
    setAvailability("")
  }

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Free Demo Lesson</CardTitle>
            <CardDescription className="text-center">
              Please enter your email below for a complimentary first lesson, or explore our site to learn about us.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-4">
                <h3 className="text-xl font-semibold text-green-600 mb-2">Thank you!</h3>
                <p>We'll be in touch soon to schedule your free demo lesson.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Please include your availability and time zone"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    rows={3}
                  />
                  <p className="text-sm text-gray-500">
                    Please include your availability and time zone for scheduling your free trial lesson.
                  </p>
                </div>
                <Button type="submit" className="w-full bg-[#3b5998] hover:bg-[#2d4373]">
                  Get Your Free Demo
                </Button>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Or email{" "}
                  <a href="mailto:team@acebridge.org" className="underline">
                    team@acebridge.org
                  </a>{" "}
                  with your availability.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
