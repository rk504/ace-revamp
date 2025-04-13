import Link from "next/link"
import Image from "next/image"
import { YoutubeIcon, LinkedinIcon } from "lucide-react"

export function Navbar() {
  return (
    <header className="w-full">
      <div className="bg-[#3b5998] text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="Ace Bridge Logo" width={100} height={100} className="object-contain" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Learn by Playing with Ace Bridge</h1>
              <p className="text-sm md:text-base">Try a Free, No-Commitment Demo Lesson</p>
              <p className="text-sm">
                Email:{" "}
                <a href="mailto:team@acebridge.org" className="underline">
                  team@acebridge.org
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YoutubeIcon className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <nav className="bg-gray-100 border-b">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center md:justify-start text-sm md:text-base">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-200">
                Ace Bridge Home
              </Link>
            </li>
            <li>
              <Link href="/team" className="block px-4 py-2 hover:bg-gray-200">
                Meet the Team
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="block px-4 py-2 hover:bg-gray-200">
                Student Testimonials
              </Link>
            </li>
            <li>
              <Link href="/featured-lesson" className="block px-4 py-2 hover:bg-gray-200">
                ACBL Featured Lesson
              </Link>
            </li>
            <li>
              <Link href="/pledge" className="block px-4 py-2 hover:bg-gray-200">
                Social Responsibility Pledge
              </Link>
            </li>
            <li>
              <Link href="/bookshelf" className="block px-4 py-2 hover:bg-gray-200">
                Bookshelf
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-4 py-2 hover:bg-gray-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
