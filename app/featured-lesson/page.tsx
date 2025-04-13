import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tutorial Video: Negative Doubles - Ace Bridge",
  description: "Watch Reese Koppel's tutorial on Negative Doubles from the ACBL's Endless Summer Event",
}

export default function FeaturedLessonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tutorial Video: Negative Doubles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reese made this video as a guest speaker for the ACBL's Endless Summer Event in late June. 
            He has now been featured four times as a Celebrity Speaker.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="aspect-video relative">
            <iframe 
              src="https://www.youtube.com/embed/tgbNymZ7vqY" 
              title="Negative Doubles Tutorial"
              className="absolute inset-0 w-full h-full" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Tutorial</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              In this video, Reese explains the concept of Negative Doubles, a crucial convention in modern bridge bidding. 
              You'll learn when and how to use negative doubles, common pitfalls to avoid, and see examples of hands where 
              this convention makes a significant difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#3b5998] hover:bg-[#2d4373]">
                <a href="https://www.youtube.com/channel/UCLDyvzVYXvJtqo_wmUktKCg" target="_blank" rel="noopener noreferrer">
                  View More Videos
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Ask Follow-Up Questions
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Additional Resources</h3>
            <p className="text-gray-700 mb-6">
              Looking for more bridge tutorials and resources? Check out these additional videos and articles to continue improving your bridge game.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#3b5998]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                <a href="#" className="hover:underline">Responding to 1NT Openings</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#3b5998]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                <a href="#" className="hover:underline">Defensive Signals and Discards</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#3b5998]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                <a href="#" className="hover:underline">Advanced Stayman Techniques</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#3b5998]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                <a href="#" className="hover:underline">Competing After Opponent's 1NT</a>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              Feel free to reach out with any questions about negative doubles or other bridge topics. Reese and the Ace Bridge team are always happy to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#3b5998] mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Email Reese directly</p>
                  <p className="text-gray-700">reese@acebridge.org</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#3b5998] mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Fill out our contact form</p>
                  <p className="text-gray-700">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild className="w-full bg-[#3b5998] hover:bg-[#2d4373]">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-[#3b5998]/5 rounded-xl p-8 border border-[#3b5998]/20">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready for personalized instruction?</h2>
          <p className="text-gray-700 mb-6">
            While these videos are a great resource, nothing beats personalized instruction tailored to your specific needs and level.
            Schedule a free introductory lesson with Ace Bridge to experience our teaching approach firsthand.
          </p>
          <Button asChild className="bg-[#3b5998] hover:bg-[#2d4373]">
            <Link href="/#free-lesson">
              Get Your Free Lesson
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
