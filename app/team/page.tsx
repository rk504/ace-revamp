import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Meet the Team - Ace Bridge",
  description: "Meet our experienced bridge instructors who will help you learn and improve your game.",
}

interface TeamMemberProps {
  name: string
  image: string
  bio: string[]
}

function TeamMember({ name, image, bio }: TeamMemberProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
      <div className="md:w-1/3 flex justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#3b5998]/20">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:w-2/3">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>
        {bio.map((paragraph, index) => (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of expert bridge instructors brings decades of experience and a passion for teaching.
            Learn from championship winners who know how to make learning fun and effective.
          </p>
        </div>

        <div className="space-y-12">
          <TeamMember
            name="Reese Koppel"
            image="/images/reese-koppel.jpg"
            bio={[
              "Reese Koppel founded the Yale Bridge Club, wrote for Audrey Grant's Interactive Daily Bridge Column, and serves on the board of the ACBL Educational Foundation.",
              "Reese won the 2018 King of Bridge award as well as the Baron Barclay National Youth Pairs that same year. He has been featured three times as an ACBL Celebrity Speaker.",
              "Hundreds of bridge students have benefited from his unique coaching method which emphasizes exciting cardplay techniques over rigorous bidding lectures."
            ]}
          />

          <TeamMember
            name="Castor Mann"
            image="/images/castor-mann.jpg"
            bio={[
              "Castor Mann is a Swedish bridge player and bridge teacher, playing for the Swedish U26 national junior team.",
              "Castor won the U21 European Youth Bridge Championships in 2017 and the U21 World Youth Bridge Championships in 2018. He has played for the Swedish junior national team every year since 2015.",
              "Having worked as a bridge teacher at the bridge club in Stockholm since 2019, Castor knows how to teach students in a way that is easy and fun."
            ]}
          />

          <TeamMember
            name="Kunal Vohra"
            image="/images/kunal-vohra.jpg"
            bio={[
              "Kunal Vohra is a Bernard Ramsey Scholar at the University of Georgia.",
              "He played on the United States under 16 team at the 2016 World Youth Teams Championship and won the 2018 Baron Barclay National Youth Pairs event.",
              "Having taught at senior living homes and youth bridge summer camps, Kunal has seen it all. His focus on understanding the logic behind bridge over memorizing countless conventions helps his students learn quicker and more effectively."
            ]}
          />

          <TeamMember
            name="Rohan Srivastava"
            image="/images/rohan-srivastava.jpg"
            bio={[
              "Rohan Srivastava is a Ph.D. student in mathematics at the University of North Texas.",
              "He recently graduated from Washington University in St. Louis, where he founded the WashU Bridge Club and grew it to be one of the largest collegiate bridge clubs in the nation. During his time at WashU, Rohan taught over 400 students the intricacies of the game of bridge and also led his team to a 2nd place finish in the 2022 Collegiate Bridge Bowl, winning a $5000 scholarship.",
              "Rohan is passionate about helping others take the leap to rapidly improve their bidding and cardplay."
            ]}
          />
        </div>
      </div>
    </div>
  )
}
