import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedLessonPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">ACBL Featured Lesson</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Explore our featured bridge lesson, developed in collaboration with the American Contract Bridge League.
      </p>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <div className="relative w-full h-[300px]">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Bridge lesson"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardHeader>
            <CardTitle>Mastering Defensive Play</CardTitle>
            <CardDescription>A comprehensive guide to improving your defensive strategies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Defensive play is often considered the most challenging aspect of bridge. In this featured lesson, we
                break down the key principles that will help you and your partner work together effectively to defeat
                contracts.
              </p>
              <h3 className="text-lg font-semibold">What You'll Learn:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Opening lead selection against various contract types</li>
                <li>Defensive signaling methods and when to use them</li>
                <li>Counting techniques to track the distribution</li>
                <li>When to be aggressive vs. passive in your defense</li>
                <li>Partnership communication during defensive play</li>
              </ul>
              <p>
                This lesson includes interactive practice hands where you'll apply these concepts in real gameplay
                situations with immediate feedback.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Watch Preview</Button>
            <Button className="bg-[#3b5998] hover:bg-[#2d4373]">
              <Link href="/contact">Request Full Lesson</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About Our ACBL Partnership</h2>
          <p className="mb-4">
            Ace Bridge is proud to partner with the American Contract Bridge League to develop high-quality educational
            content for bridge players of all levels. Our featured lessons incorporate ACBL best practices and teaching
            methodologies.
          </p>
          <p>
            As an ACBL-affiliated teaching program, we're committed to promoting the game of bridge and helping players
            improve their skills through engaging, interactive lessons.
          </p>
        </div>
      </div>
    </div>
  )
}
