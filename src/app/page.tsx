import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Learn by Playing with Ace Bridge
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Try a Free, No-Commitment Demo Lesson
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/contact"
          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Schedule a Free Lesson
        </Link>
      </div>
    </div>
  )
} 