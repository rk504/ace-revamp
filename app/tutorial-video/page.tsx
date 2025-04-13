import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TutorialVideoPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tutorial Video: Negative Doubles</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Reese made this video as a guest speaker for the ACBL's Endless Summer Event in late June. He has now been
        featured four times as a Celebrity Speaker. Please enjoy this video and others, and feel free to ask any
        follow-up questions through the contact page or by sending him an email at{" "}
        <a href="mailto:reese@acebridge.org" className="underline">
          reese@acebridge.org
        </a>
        .
      </p>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Negative Doubles Tutorial</CardTitle>
            <CardDescription>Learn this essential convention for competitive bidding</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
            <iframe
              width="850"
              height="500"
              src="https://www.youtube.com/embed/YJftoVeAZFY?autoplay=1&mute=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe>
            </div>
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold">About This Video</h3>
              <p>
                In this tutorial, Reese explains the concept of negative doubles, a fundamental convention that allows
                you to show your major suit holdings after your partner opens and your right-hand opponent overcalls.
              </p>
              <p>
                You'll learn when to use negative doubles, how to respond to them, and common scenarios where they're
                particularly effective. This convention is essential for competitive bidding and will significantly
                improve your partnership's ability to find major suit fits after interference.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="https://www.youtube.com/channel/UCGpqgSoiMqMyhWcXxg-yHZA">View More Videos</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
          <p className="mb-4">
            If you enjoyed this tutorial and want to learn more about bridge conventions and techniques, consider
            scheduling a free demo lesson with one of our instructors.
          </p>
          <p>
            Our teaching approach focuses on practical application rather than memorization, helping you understand the
            logic behind each convention so you can apply it confidently at the table.
          </p>
          <div className="mt-6">
            <Button asChild className="bg-[#3b5998] hover:bg-[#2d4373]">
              <Link href="/contact">Schedule a Free Lesson</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
