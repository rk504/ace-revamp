import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function TeamPage() {
  // Standardized dimensions for all photos
  const photoHeight = 600;
  const photoWidth = 450;

  const team = [
    {
      name: "Reese Koppel",
      role: "Founder",
      bio: [
        "Reese Koppel founded the Yale Bridge Club, wrote for Audrey Grant's Interactive Daily Bridge Column, and serves on the board of the ACBL Educational Foundation.",
        "Reese won the 2018 King of Bridge award as well as the Baron Barclay National Youth Pairs that same year. He has been featured four times as an ACBL Celebrity Speaker.",
        "Hundreds of bridge students have benefited from his unique coaching method which emphasizes exciting cardplay techniques over rigorous bidding lectures.",
      ],
      image: "/images/reese-koppel.jpg",
      imagePosition: "center top",
      imageScale: "scale-50",
    },
    {
      name: "Castor Mann",
      role: "Instructor",
      bio: [
        "Castor Mann is a Swedish bridge player and bridge teacher, playing for the Swedish U26 national junior team.",
        "Castor won the U21 European Youth Bridge Championships in 2017 and the U21 World Youth Bridge Championships in 2018. He has played for the Swedish junior national team every year since 2015.",
        "Having worked as a bridge teacher at the bridge club in Stockholm since 2019, Castor knows how to teach students in a way that is easy and fun.",
      ],
      image: "/images/castor-mann.jpg",
      imagePosition: "center top",
      imageScale: "scale-50",
    },
    {
      name: "Kunal Vohra",
      role: "Instructor",
      bio: [
        "Kunal Vohra is a Bernard Ramsey Scholar at the University of Georgia.",
        "He played on the United States under 16 team at the 2016 World Youth Teams Championship and won the 2018 Baron Barclay National Youth Pairs event.",
        "Having taught at senior living homes and youth bridge summer camps, Kunal has seen it all. His focus on understanding the logic behind bridge over memorizing countless conventions helps his students learn quicker and more effectively.",
      ],
      image: "/images/kunal-vohra.jpg",
      imagePosition: "center top",
      imageScale: "scale-50",
    },
    {
      name: "Rohan Srivastava",
      role: "Instructor",
      bio: [
        "Rohan Srivastava is a Ph.D. student in mathematics at the University of North Texas.",
        "He recently graduated from Washington University in St. Louis, where he founded the WashU Bridge Club and grew it to be one of the largest collegiate bridge clubs in the nation. During his time at WashU, Rohan taught over 400 students the intricacies of the game of bridge and also led his team to a 2nd place finish in the 2022 Collegiate Bridge Bowl, winning a $5000 scholarship.",
        "Rohan is passionate about helping others take the leap to rapidly improve their bidding and cardplay.",
      ],
      image: "/images/rohan-srivastava.jpg",
      imagePosition: "top center",
      imageScale: "scale-50",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Meet the Team</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Our instructors are experienced players and dedicated teachers who are passionate about helping you improve your
        bridge game.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {team.map((member) => (
          <Card key={member.name} className="overflow-hidden flex flex-col">
            {/* Standardized photo container with fixed dimensions */}
            <div className="w-full relative overflow-hidden" style={{ height: `${photoHeight}px` }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="relative" 
                  style={{ 
                    width: `${photoWidth}px`, 
                    height: `${photoHeight}px`,
                    margin: '0 auto'
                  }}
                >
                  <Image
                    src={member.image || "/placeholder.svg?height=300&width=300"}
                    alt={member.name}
                    fill
                    sizes="300px"
                    className={`object-cover ${member.imageScale || ''}`}
                    style={{ objectPosition: member.imagePosition || "center" }}
                    priority
                  />
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <p className="text-gray-500">{member.role}</p>
            </CardHeader>
            <CardContent>
              {member.bio.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
