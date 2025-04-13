import Image from "next/image"

export function Hero() {
  return (
    <div className="relative bg-[#3b5998] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="/images/playing-cards.jpg"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto py-20 px-4 md:py-32 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Learn bridge by <span className="text-yellow-300">actually playing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-lg">
            Less lectures, more playing. The Ace Bridge Way to learn confidently and have fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-white text-[#3b5998] font-medium rounded-lg hover:bg-white/90 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform md:translate-y-4 md:translate-x-4">
            <Image
              src="/images/playing-cards.jpg"
              alt="Bridge playing cards"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
