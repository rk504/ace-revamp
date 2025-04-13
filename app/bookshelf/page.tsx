import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BookshelfPage() {
  const books = [
    {
      title: "Bridge Basics",
      author: "Audrey Grant",
      description: "A perfect introduction for beginners, covering the fundamentals of bridge bidding and play.",
      image: "/placeholder.svg?height=300&width=200",
      link: "#",
    },
    {
      title: "25 Bridge Conventions You Should Know",
      author: "Barbara Seagram & Marc Smith",
      description: "Essential conventions for improving players, clearly explained with example hands.",
      image: "/placeholder.svg?height=300&width=200",
      link: "#",
    },
    {
      title: "Card Play Technique",
      author: "Victor Mollo & Nico Gardener",
      description: "A classic text on declarer play and defense, with numerous instructive examples.",
      image: "/placeholder.svg?height=300&width=200",
      link: "#",
    },
    {
      title: "Bridge with the Experts",
      author: "Hugh Kelsey",
      description: "Learn from the thought processes of expert players as they navigate challenging hands.",
      image: "/placeholder.svg?height=300&width=200",
      link: "#",
    },
    {
      title: "Defensive Bridge Play Complete",
      author: "Eddie Kantar",
      description: "Comprehensive guide to defensive play from one of bridge's greatest teachers.",
      image: "/placeholder.svg?height=300&width=200",
      link: "#",
    },
    {
      title: "Modern Bridge Conventions",
      author: "William S. Root & Richard Pavlicek",
      description: "A thorough reference for intermediate and advanced players on modern bidding methods.",
      image: "/placeholder.svg?height=300&width=200",
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Bookshelf</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Our recommended reading list for bridge players looking to improve their game. These books complement our
        hands-on teaching approach.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <Card key={index} className="flex flex-col h-full">
            <div className="relative h-64 w-full">
              <Image src={book.image || "/placeholder.svg"} alt={book.title} fill className="object-contain" />
            </div>
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
              <CardDescription>{book.author}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{book.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Our Teaching Philosophy</h2>
        <p className="mb-4">
          While books are valuable resources, we believe that the most effective way to learn bridge is through guided
          play. Our lessons incorporate concepts from these recommended books but focus on practical application.
        </p>
        <p>
          We encourage our students to supplement their learning with these texts, but remember: there's no substitute
          for actually playing hands with expert guidance!
        </p>
      </div>
    </div>
  )
}
