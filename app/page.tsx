import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Ace Bridge - Learn Bridge by Playing",
  description: "Learn to play bridge confidently with less lectures and more playing."
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#3b5998] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/images/cards-background.jpg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto py-20 px-4 md:py-32 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              At Ace Bridge, you'll sharpen your bridge skills while having fun.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-lg">
              Learn to play more confidently the Ace Bridge Way: Less Lectures, More Playing Bridge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild className="px-6 py-3 h-auto bg-white text-[#3b5998] font-medium rounded-lg hover:bg-white/90 transition-colors">
                <Link href="#free-lesson">
                  Get Free Lesson
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-6 py-3 h-auto bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                <Link href="/team">
                  Meet The Team
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform md:translate-y-4 md:translate-x-4">
              <Image
                src="/images/bridge-playing.jpg"
                alt="Bridge playing cards"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Form Section */}
      <section id="free-lesson" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Want a Complimentary Introductory Lesson?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Share your email below to learn more about lessons with Ace Bridge. Please include your availabilities and time zone for a free trial lesson.
              </p>
              <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-700">Expert instructors with years of experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-700">Hands-on approach with actual gameplay</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-700">Personalized attention for faster improvement</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full max-w-md">
              <Card className="shadow-lg border-0 overflow-hidden">
                <CardHeader className="bg-[#3b5998] text-white pb-6">
                  <CardTitle className="text-2xl">Free Demo Lesson</CardTitle>
                  <CardDescription className="text-white/80">
                    No commitment required
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                        Email address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="availability" className="text-sm font-medium text-gray-700 block">
                        Your availability (include your time zone)
                      </label>
                      <Textarea
                        id="availability"
                        placeholder="e.g., Weekdays after 5pm EST, or weekends mornings PT"
                        className="min-h-24"
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 bg-[#3b5998] hover:bg-[#2d4373] transition-colors">
                      Request Free Demo
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      Alternatively, email team@acebridge.org with your information
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Ace Bridge Way</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Ace Bridge, we believe that the best way to learn is by doing. Our approach focuses on actual gameplay with
              expert guidance, rather than lengthy theoretical lectures.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Interactive Learning</h3>
              <p className="text-gray-600">Learn through guided play sessions with immediate feedback from experienced instructors.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Personalized Approach</h3>
              <p className="text-gray-600">Lessons tailored to your skill level, whether you're a beginner or looking to improve your game.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Supportive Community</h3>
              <p className="text-gray-600">Join a friendly community of bridge enthusiasts who share your passion for the game.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#3b5998]/95 backdrop-blur-sm"></div>
          <Image 
            src="/images/cards-pattern.jpg"
            alt="Bridge cards background"
            fill
            className="object-cover w-full h-full opacity-20"
          />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-3/5 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Want to see our teaching in action?</h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Check out our tutorial videos, meet our team, or read testimonials from students who have improved their game with Ace Bridge.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  className="bg-white text-[#3b5998] hover:bg-white/90 transition-colors text-base py-6 px-8 h-auto"
                >
                  <Link href="/featured-lesson">
                    Watch Tutorial Videos
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-colors text-base py-6 px-8 h-auto"
                >
                  <Link href="/testimonials">
                    Read Testimonials
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-2/5 relative">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute w-full h-full rounded-full bg-white/10 animate-ping-slow opacity-70"></div>
                <div className="absolute inset-6 rounded-full bg-white/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx global>{`
          @keyframes ping-slow {
            0% {
              transform: scale(0.95);
              opacity: 0.8;
            }
            70% {
              transform: scale(1.1);
              opacity: 0.4;
            }
            100% {
              transform: scale(0.95);
              opacity: 0.8;
            }
          }
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}</style>
      </section>
    </div>
  )
}
