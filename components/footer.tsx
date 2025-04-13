import Link from "next/link"
import { YoutubeIcon, LinkedinIcon, MailIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ace Bridge</h3>
            <p className="mb-4">Learn to play bridge confidently with less lectures and more playing.</p>
            <div className="flex space-x-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="mailto:team@acebridge.org" aria-label="Email">
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:underline">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:underline">
                  Student Testimonials
                </Link>
              </li>
              <li>
                <Link href="/featured-lesson" className="hover:underline">
                  ACBL Featured Lesson
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="mb-2">Email: team@acebridge.org</p>
            <p>Schedule a free demo lesson today!</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Ace Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
