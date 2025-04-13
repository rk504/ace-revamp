export function IntroSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Learn Bridge the Fun Way</h2>
        <p className="text-lg mb-8">
          At Ace Bridge, we believe that the best way to learn is by doing. Our approach focuses on actual gameplay with
          expert guidance, rather than lengthy theoretical lectures.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
            <p>Learn through guided play sessions with immediate feedback from experienced instructors.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
            <p>Lessons tailored to your skill level, whether you're a beginner or looking to improve your game.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Supportive Community</h3>
            <p>Join a friendly community of bridge enthusiasts who share your passion for the game.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
