"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MailIcon, PhoneIcon } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    availability: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "", availability: "" })
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Want a Complimentary Introductory Lesson? Get in touch today to schedule a session. Feel free to send some
        possible times for a demo lesson, or simply fill out this form with your email to learn more.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Thank you for your message!</h3>
                  <p>We'll be in touch with you shortly to schedule your free lesson.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="availability" className="text-sm font-medium">
                      Your Availability
                    </label>
                    <Textarea
                      id="availability"
                      name="availability"
                      placeholder="Please include your time zone"
                      rows={3}
                      value={formData.availability}
                      onChange={handleChange}
                    />
                    <p className="text-sm text-gray-500">
                      Please include possible times for a demo lesson and your time zone.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message (Optional)
                    </label>
                    <Textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} />
                  </div>
                  <Button type="submit" className="w-full bg-[#3b5998] hover:bg-[#2d4373]">
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <MailIcon className="h-6 w-6 text-[#3b5998] mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">reese@acebridge.org</p>
                  <p className="text-sm text-gray-500 mt-1">For general inquiries: team@acebridge.org</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <PhoneIcon className="h-6 w-6 text-[#3b5998] mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">(415) 570-2971</p>
                  <p className="text-sm text-gray-500 mt-1">Feel free to call or text to schedule a lesson</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">Alternative Contact Methods</h3>
              <p className="mb-2">You can also reach us through:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Submit the form on this page</li>
                <li>Send a text to (415) 570-2971</li>
                <li>Email reese@acebridge.org</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Please include your availability and time zone when contacting us for scheduling.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
