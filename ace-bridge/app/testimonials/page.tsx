import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "David Wilson",
      location: "New York, NY",
      quote:
        "The Ace Bridge approach is refreshing. Instead of drowning in theory, I learned by actually playing hands with expert guidance. My game improved dramatically in just a few weeks.",
    },
    {
      name: "Jennifer Lee",
      location: "Chicago, IL",
      quote:
        "As a complete beginner, I was intimidated by bridge. The instructors at Ace Bridge made learning fun and accessible. Now I play weekly with friends!",
    },
    {
      name: "Robert Taylor",
      location: "San Francisco, CA",
      quote:
        "I've taken bridge lessons before, but none were as effective as Ace Bridge. The focus on playing rather than lecturing made all the difference.",
    },
    {
      name: "Patricia Garcia",
      location: "Miami, FL",
      quote:
        "The personalized attention from the instructors helped me identify and fix weaknesses in my game that I didn't even know I had.",
    },
    {
      name: "Thomas Brown",
      location: "Seattle, WA",
      quote:
        "Bridge is a complex game, but Ace Bridge breaks it down into manageable pieces. I appreciate their practical approach to teaching.",
    },
    {
      name: "Elizabeth Chen",
      location: "Boston, MA",
      quote:
        "I've recommended Ace Bridge to all my friends who want to learn. Their teaching method is simply the best I've experienced.",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Student Testimonials</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Don't just take our word for it. Here's what our students have to say about learning with Ace Bridge.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <div className="text-4xl text-gray-300">"</div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="italic">{testimonial.quote}</p>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
