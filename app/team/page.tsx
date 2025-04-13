import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function TeamPage() {
  const team = [
    {
      name: "John Smith",
      role: "Founder & Lead Instructor",
      bio: "John has been teaching bridge for over 20 years and is a Grand Life Master with multiple national championships.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      role: "Senior Instructor",
      bio: "Sarah specializes in teaching beginners and has developed many of our introductory curriculum materials.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Instructor",
      bio: "Michael is known for his patient approach and ability to break down complex concepts for students at all levels.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Meet the Team</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Our instructors are experienced players and dedicated teachers who are passionate about helping you improve your
        bridge game.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <Card key={member.name} className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
