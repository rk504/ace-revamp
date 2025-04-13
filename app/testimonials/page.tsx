import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "Reese is the best teacher that I have encountered. I have had other teachers, but Reese explains Bridge without being intimidating and makes me feel good about myself through his simple and logical approach and his entertaining manner...I recommend him highly.",
      name: "J.C.",
    },
    {
      quote:
        "We've enjoyed our classes from Kunal and are learning a great deal. We've also referred him to other friends. We are quite impressed that he is able to critique our bidding and play in a way that comes out very positively. It's very obvious that he has an excellent understanding of the game, conventions and strategy of play.",
      name: "L.H.",
    },
    {
      quote:
        "Bridge is NOT an easy game. However, with Reese, you can grasp the game more easily than in classroom instruction. Reese is the type of instructor that allows you to play the hand and ask questions as you go along. He wants to understand how you are thinking and then guides you to the make decisions with confidence. This type of instruction helps me immensely as I can understand the concepts more clearly and quickly. I am no longer afraid of making mistakes in bridge. Instead, I am learning from those mistakes and making better decisions with Reese's instruction!",
      name: "C.R.",
    },
    {
      quote:
        "I have been reading the Audrey Grant series, signed up for BBO and ACBL and just started playing robots online, but wanted someone to teach me good fundamentals and basic strategy to build my confidence to play with real people. I did my research and came across Reese who has been extremely helpful. He is not only knowledgeable but flexible in his approach and availability. He is helping to build my confidence in the game.",
      name: "S.W.",
    },
    {
      quote:
        'It is a pleasure to write this review of Reese who is an exceptional bridge coach! As I did my research, I quickly discovered he has a vibrant reputation in the Bridge community. He engaged my partner and me immediately when he said, "I will teach y\'all everything I know." The connection was instant. His style is relaxed, interactive, and fun. We loved learning to play bridge as we played the game in real time. His knowledge of the game and ability to discuss it is brilliant. And, when something is an absolute "yes, do that," or "no, don\'t do that," his opinion is loud and clear. Taking lessons from Reese is truly worthwhile. My partner and I are enjoying his ongoing mentorship.',
      name: "S.B.",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Student Testimonials</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">Hear Directly from Ace Bridge's Students!</p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
