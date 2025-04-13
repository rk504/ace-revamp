"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Ace Bridge",
  description: "Get in touch with Ace Bridge to schedule a free demo lesson or ask questions about our bridge instruction.",
}

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Want a complimentary introductory lesson? Get in touch today to schedule a session. 
            Feel free to send some possible times for a demo lesson, or simply fill out this form with your email to learn more.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <Card className="shadow-lg border-0 overflow-hidden">
              <CardHeader className="bg-[#3b5998] text-white pb-6">
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
                <CardDescription className="text-white/80">
                  We'd love to hear from you
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 block">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 block">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="availability" className="text-sm font-medium text-gray-700 block">
                      Your Availability (for demo lessons)
                    </label>
                    <Textarea
                      id="availability"
                      placeholder="Please include some possible times and your time zone"
                      className="min-h-20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your bridge experience and what you're hoping to learn"
                      className="min-h-32"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full h-12 bg-[#3b5998] hover:bg-[#2d4373] transition-colors">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#3b5998]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#3b5998]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:reese@acebridge.org" className="text-[#3b5998] hover:underline">reese@acebridge.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#3b5998]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#3b5998]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+14155702971" className="text-[#3b5998] hover:underline">(415) 570-2971</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Lesson Information</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-medium text-gray-900">Individual Lessons:</span> Personalized instruction tailored to your level and goals.
                </p>
                <p>
                  <span className="font-medium text-gray-900">Partnership Lessons:</span> Improve your game with your regular partner.
                </p>
                <p>
                  <span className="font-medium text-gray-900">Group Sessions:</span> Learn with friends or join one of our existing groups.
                </p>
                <p className="text-sm text-gray-500 mt-6">
                  Contact us for current rates and scheduling options. Remember that your first lesson is complimentary!
                </p>
              </div>
            </div>
            
            <div className="bg-[#3b5998]/5 rounded-xl p-6 border border-[#3b5998]/20">
              <p className="text-gray-700 italic">
                "Bridge is a game that will provide a lifetime of enjoyment. Let us help you start or continue your journey!"
              </p>
              <p className="text-right font-medium text-gray-900 mt-3">
                — The Ace Bridge Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
