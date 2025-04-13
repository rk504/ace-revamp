"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DemoForm() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Free Demo Lesson</CardTitle>
            <CardDescription className="text-center">
              Interested in a complimentary first lesson? Contact us directly!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-6">
            <p className="mb-6">
              Click below to email Reese and schedule your free demo lesson.
              Please include a time that works best for your free demo.
            </p>
            <Button 
              className="bg-[#3b5998] hover:bg-[#2d4373] py-3 px-6 text-lg"
              asChild
            >
              <a href="mailto:reese@acebridge.org?subject=Free%20Demo%20Lesson%20Request&body=Hi%20Reese%2C%0A%0AI'm%20interested%20in%20scheduling%20a%20free%20demo%20lesson.%20Here%20are%20some%20times%20that%20work%20best%20for%20me%3A%0A%0A[Please%20include%20your%20availability%20and%20time%20zone]%0A%0AThank%20you!">
                Email reese@acebridge.org
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
