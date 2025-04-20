import { Card, CardContent } from "../../components/ui/card"

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Reese's teaching style is unique and effective. He focuses on practical play rather than memorizing conventions, which made learning bridge much more enjoyable.",
      author: "Sarah M.",
    },
    {
      quote: "The instructors at Ace Bridge are exceptional. They make complex concepts easy to understand and always keep the lessons engaging.",
      author: "John D.",
    },
    {
      quote: "I've improved my game significantly since starting lessons with Ace Bridge. The focus on cardplay techniques has been particularly helpful.",
      author: "Michael R.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Student Testimonials</h1>
      
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <blockquote className="text-lg italic text-gray-600">
                "{testimonial.quote}"
              </blockquote>
              <p className="mt-4 font-semibold text-gray-900">
                — {testimonial.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 