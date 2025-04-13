"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Have questions about our bridge lessons? We're here to help. Reach out to us using the form below.
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
                  <p>We'll be in touch with you shortly.</p>
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
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
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
                  <p className="text-gray-600">team@acebridge.org</p>
                  <p className="text-sm text-gray-500 mt-1">We aim to respond within 24 hours</p>
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
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-1">Available Monday-Friday, 9am-5pm EST</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="h-6 w-6 text-[#3b5998] mt-1" />
                <div>
                  <h3 className="font-semibold">Virtual Lessons</h3>
                  <p className="text-gray-600">All lessons are conducted online</p>
                  <p className="text-sm text-gray-500 mt-1">Learn from the comfort of your home</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
