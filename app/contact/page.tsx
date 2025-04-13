"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MailIcon, PhoneIcon, CalendarIcon, ClockIcon } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-6">
        Want a complimentary introductory lesson? Contact Reese directly to schedule your free demo.
      </p>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-600">
        Please include your availability and time zone when you reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Email Reese Directly</CardTitle>
              <CardDescription>The fastest way to schedule your free demo lesson</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="bg-gray-50 p-6 rounded-lg mb-6 w-full text-center">
                <p className="mb-4 text-lg">
                  Click below to email Reese and schedule your free demo lesson:
                </p>
                <Button 
                  className="w-full bg-[#3b5998] hover:bg-[#2d4373] py-3 text-lg mb-4"
                  asChild
                >
                  <a href="mailto:reese@acebridge.org?subject=Free%20Demo%20Lesson%20Request&body=Hi%20Reese%2C%0A%0AI'm%20interested%20in%20scheduling%20a%20free%20demo%20lesson.%0A%0AMy%20availability%20is%3A%0A%5BPlease%20include%20days%20of%20the%20week%20and%20times%5D%0A%0AMy%20time%20zone%20is%3A%20%5BYour%20time%20zone%5D%0A%0AThank%20you!">
                    Email reese@acebridge.org
                  </a>
                </Button>
                <p className="text-gray-600">
                  When emailing, please include:
                </p>
                <ul className="text-left list-none space-y-3 mt-3">
                  <li className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-[#3b5998] flex-shrink-0" />
                    <span>Days of the week that work for you</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-[#3b5998] flex-shrink-0" />
                    <span>Best times during those days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-[#3b5998] flex-shrink-0" />
                    <span>Your time zone</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <MailIcon className="h-6 w-6 text-[#3b5998] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:reese@acebridge.org" className="text-[#3b5998] hover:underline">
                      reese@acebridge.org
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <PhoneIcon className="h-6 w-6 text-[#3b5998] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">(415) 570-2971</p>
                  <p className="text-sm text-gray-500 mt-1">Feel free to text to schedule a lesson</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
