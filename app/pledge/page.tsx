import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PledgePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Social Responsibility Pledge</h1>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
        At Ace Bridge, we believe that bridge is more than just a card game—it's a community. Our social responsibility
        pledge outlines our commitment to fostering an inclusive, respectful environment for all players.
      </p>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Pledge to the Bridge Community</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
              <p>
                We welcome players of all backgrounds, ages, and skill levels. Bridge is a game for everyone, and we are
                committed to making our lessons accessible and enjoyable for all.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Respect</h3>
              <p>
                We promote respectful behavior at the table and beyond. Our instructors model and teach bridge
                etiquette, ensuring that all players feel valued and comfortable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Patience</h3>
              <p>
                Learning bridge takes time. We pledge to be patient with our students, meeting them where they are and
                helping them progress at their own pace.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Ethical Play</h3>
              <p>
                We teach and uphold the highest standards of ethical play. Integrity at the bridge table is
                non-negotiable, and we instill these values in all our students.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p>
                We are committed to supporting the broader bridge community through participation in local clubs,
                tournaments, and outreach programs to introduce new players to the game.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
              <p>
                We pledge to continuously improve our teaching methods and materials, staying current with developments
                in bridge education to provide the best possible experience for our students.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Join Us in Our Commitment</h2>
          <p className="mb-4">
            We invite all our students to join us in upholding these principles. Together, we can ensure that bridge
            remains a game that brings people together, fosters mental acuity, and provides enjoyment for generations to
            come.
          </p>
          <p>
            If you have suggestions on how we can better fulfill our social responsibility pledge, we welcome your
            feedback.
          </p>
        </div>
      </div>
    </div>
  )
}
