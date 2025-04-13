"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
                <Button type="submit" className="w-full bg-[#3b5998] hover:bg-[#2d4373]">
                  Get Your Free Demo
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
