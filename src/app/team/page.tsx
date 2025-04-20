import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import Image from "next/image"

export default function TeamPage() {
  const team = [
    {
      name: "Reese Koppel",
      role: "Founder",
      bio: [
        "Reese Koppel founded the Yale Bridge Club, wrote for Audrey Grant's Interactive Daily Bridge Column, and serves on the board of the ACBL Educational Foundation.",
        "Reese won the 2018 King of Bridge award as well as the Baron Barclay National Youth Pairs that same year. He has been featured four times as an ACBL Celebrity Speaker.",
        "Hundreds of bridge students have benefited from his unique coaching method which emphasizes exciting cardplay techniques over rigorous bidding lectures.",
      ],
    },
    {
      name: "Castor Mann",
      role: "Instructor",
      bio: [
        "Castor Mann is a Swedish bridge player and bridge teacher, playing for the Swedish U26 national junior team.",
        "Castor won the U21 European Youth Bridge Championships in 2017 and the U21 World Youth Bridge Championships in 2018. He has played for the Swedish junior national team every year since 2015.",
        "Having worked as a bridge teacher at the bridge club in Stockholm since 2019, Castor knows how to teach students in a way that is easy and fun.",
      ],
    },
    {
      name: "Kunal Vohra",
      role: "Instructor",
      bio: [
        "Kunal Vohra is a Bernard Ramsey Scholar at the University of Georgia.",
        "He played on the United States under 16 team at the 2016 World Youth Teams Championship and won the 2018 Baron Barclay National Youth Pairs event.",
        "Having taught at senior living homes and youth bridge summer camps, Kunal has seen it all. His focus on understanding the logic behind bridge over memorizing countless conventions helps his students learn quicker and more effectively.",
      ],
    },
    {
      name: "Rohan Srivastava",
      role: "Instructor",
      bio: [
        "Rohan Srivastava is a Ph.D. student in mathematics at the University of North Texas.",
        "He recently graduated from Washington University in St. Louis, where he founded the WashU Bridge Club and grew it to be one of the largest collegiate bridge clubs in the nation. During his time at WashU, Rohan taught over 400 students the intricacies of the game of bridge and also led his team to a 2nd place finish in the 2022 Collegiate Bridge Bowl, winning a $5000 scholarship.",
        "Rohan is passionate about helping others take the leap to rapidly improve their bidding and cardplay.",
      ],
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Meet the Team</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        Our instructors are experienced players and dedicated teachers who are passionate about helping you improve your bridge game.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {team.map((member) => (
          <div key={member.name} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
            <div className="p-6 pt-0">
              {member.bio.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 