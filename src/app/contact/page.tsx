import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-xl text-center mb-6">
        Want a complimentary introductory lesson? Contact Reese directly to schedule your free demo.
      </p>
      <p className="text-lg text-center mb-12 text-gray-600">
        Please include your availability and time zone when you reach out.
      </p>

      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Email Reese Directly</h3>
          </div>
          <div className="p-6 pt-0">
            <p className="mb-4">The fastest way to schedule your free demo lesson:</p>
            <a
              href="mailto:reese@acebridge.org?subject=Free%20Demo%20Lesson%20Request&body=Hi%20Reese%2C%0A%0AI'm%20interested%20in%20scheduling%20a%20free%20demo%20lesson.%0A%0AMy%20availability%20is%3A%0A%5BPlease%20include%20days%20of%20the%20week%20and%20times%5D%0A%0AMy%20time%20zone%20is%3A%20%5BYour%20time%20zone%5D%0A%0AThank%20you!"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500"
            >
              Email reese@acebridge.org
            </a>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Phone</h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-lg">(415) 570-2971</p>
            <p className="text-sm text-gray-500 mt-1">Feel free to text to schedule a lesson</p>
          </div>
        </div>
      </div>
    </div>
  )
} 