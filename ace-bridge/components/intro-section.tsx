export function IntroSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Learn Bridge the Fun Way</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Ace Bridge, we believe that the best way to learn is by doing. Our approach focuses on actual gameplay with
            expert guidance, rather than lengthy theoretical lectures.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Interactive Learning</h3>
            <p className="text-gray-600">Learn through guided play sessions with immediate feedback from experienced instructors.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Personalized Approach</h3>
            <p className="text-gray-600">Lessons tailored to your skill level, whether you're a beginner or looking to improve your game.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Supportive Community</h3>
            <p className="text-gray-600">Join a friendly community of bridge enthusiasts who share your passion for the game.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
