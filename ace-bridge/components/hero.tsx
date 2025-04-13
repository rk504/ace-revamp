import Image from "next/image"

export function Hero() {
  return (
    <div className="relative bg-[#3b5998] text-white">
      <div className="container mx-auto py-12 px-4 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            At Ace Bridge, you'll sharpen your bridge skills while having fun.
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Learn to play more confidently the Ace Bridge Way: Less Lectures, More Playing Bridge.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/images/playing-cards.jpg"
              alt="Bridge playing cards"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
