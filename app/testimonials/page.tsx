import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Student Testimonials - Ace Bridge",
  description: "Hear what our students have to say about learning bridge with Ace Bridge.",
}

interface TestimonialProps {
  quote: string
  author: string
  instructor?: string
}

function Testimonial({ quote, author, instructor }: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="mb-6">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-10 h-10 text-[#3b5998]/20"
        >
          <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 006.75-6.75.75.75 0 011.5 0c0 .336-.022.671-.065 1A8.213 8.213 0 016 24a8.25 8.25 0 01-3.691-15.596.75.75 0 01.955.967c-.067.126-.127.25-.18.374-.748 1.76-.75 3.782-.002 5.542.72 1.167.14 2.189-.302 3.286-.192.596-.43 1.143-.712 1.646a6.293 6.293 0 00.894-1.954c.363-1.494.518-3.096.426-4.53-.085-1.323-.353-2.47-.587-3.354-.094-.352-.157-.703-.157-1.066 0-1.79 1.06-3.338 2.604-4.062a4.488 4.488 0 012.792-.493.75.75 0 010 1.5A2.989 2.989 0 007.902 7.902c.036.506.157.986.268 1.423.262 1.026.705 2.203.85 3.506.097.805.095 1.655-.025 2.464-.182 1.225-.579 2.267-1.128 3.11-.553.846-1.203 1.407-1.833 1.655-.45.18-.99.246-1.23.215z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.804 21.644A6.707 6.707 0 0014 21.75a6.721 6.721 0 006.75-6.75.75.75 0 011.5 0c0 .336-.022.671-.065 1A8.213 8.213 0 0114 24a8.25 8.25 0 01-3.691-15.596.75.75 0 01.955.967c-.067.126-.127.25-.18.374-.748 1.76-.75 3.782-.002 5.542.72 1.167.14 2.189-.302 3.286-.192.596-.43 1.143-.712 1.646a6.293 6.293 0 00.894-1.954c.363-1.494.518-3.096.426-4.53-.085-1.323-.353-2.47-.587-3.354-.094-.352-.157-.703-.157-1.066 0-1.79 1.06-3.338 2.604-4.062a4.488 4.488 0 012.792-.493.75.75 0 010 1.5A2.989 2.989 0 0015.902 7.902c.036.506.157.986.268 1.423.262 1.026.705 2.203.85 3.506.097.805.095 1.655-.025 2.464-.182 1.225-.579 2.267-1.128 3.11-.553.846-1.203 1.407-1.833 1.655-.45.18-.99.246-1.23.215z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">{quote}</p>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-gray-900">{author}</p>
        {instructor && (
          <p className="text-sm text-gray-500">Student of {instructor}</p>
        )}
      </div>
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Student Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from Ace Bridge's students! Our teaching methods have helped players of all levels
            improve their game and enjoy bridge more than ever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Testimonial
            quote="Reese is the best teacher that I have encountered. I have had other teachers, but Reese explains Bridge without being intimidating and makes me feel good about myself through his simple and logical approach and his entertaining manner...I recommend him highly."
            author="J.C."
            instructor="Reese"
          />
          
          <Testimonial
            quote="We've enjoyed our classes from Kunal and are learning a great deal. We've also referred him to other friends. We are quite impressed that he is able to critique our bidding and play in a way that comes out very positively. It's very obvious that he has an excellent understanding of the game, conventions and strategy of play."
            author="L.H."
            instructor="Kunal"
          />
          
          <Testimonial
            quote="Bridge is NOT an easy game. However, with Reese, you can grasp the game more easily than in classroom instruction. Reese is the type of instructor that allows you to play the hand and ask questions as you go along. He wants to understand how you are thinking and then guides you to the make decisions with confidence. This type of instruction helps me immensely as I can understand the concepts more clearly and quickly. I am no longer afraid of making mistakes in bridge. Instead, I am learning from those mistakes and making better decisions with Reese's instruction!"
            author="C.R."
            instructor="Reese"
          />
          
          <Testimonial
            quote="I have been reading the Audrey Grant series, signed up for BBO and ACBL and just started playing robots online, but wanted someone to teach me good fundamentals and basic strategy to build my confidence to play with real people. I did my research and came across Reese who has been extremely helpful. He is not only knowledgeable but flexible in his approach and availability. He is helping to build my confidence in the game."
            author="S.W."
            instructor="Reese"
          />
          
          <Testimonial
            quote="It is a pleasure to write this review of Reese who is an exceptional bridge coach! As I did my research, I quickly discovered he has a vibrant reputation in the Bridge community. He engaged my partner and me immediately when he said, 'I will teach y'all everything I know.' The connection was instant. His style is relaxed, interactive, and fun. We loved learning to play bridge as we played the game in real time. His knowledge of the game and ability to discuss it is brilliant. And, when something is an absolute 'yes, do that,' or 'no, don't do that,' his opinion is loud and clear. Taking lessons from Reese is truly worthwhile. My partner and I are enjoying his ongoing mentorship."
            author="S.B."
            instructor="Reese"
          />
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to experience the Ace Bridge difference?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our students who have discovered a fun and effective way to learn bridge.
            Schedule your free demo lesson today.
          </p>
          <Button asChild className="bg-[#3b5998] hover:bg-[#2d4373] px-8 py-3 h-auto">
            <Link href="/contact">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
