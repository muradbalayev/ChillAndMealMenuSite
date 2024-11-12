import heroImage from '../../../assets/hero-slider-3.jpg'
const Hero = () => {
    return (
      <div className="relative min-h-[750px] w-full flex items-center bg-black">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
  
        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center text-white">
          <div className="mb-16 space-y-6">
            <div className="text-center">
              <span className="mb-4 inline-block text-sm uppercase tracking-wider text-[#C8A97E]">
                DELIGHTFUL EXPERIENCE
              </span>
              <div className="mx-auto h-[2px] w-20 bg-[#7FC380]" />
            </div>
            <h1 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Flavors Inspired by<br />the Seasons
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Come with family & feel the joy of mouthwatering food
            </p>
            <button className="mt-8 border-2 border-[#7FC380] px-8 py-3 text-sm font-medium text-[#7FC380] transition-colors hover:bg-[#7FC380] hover:text-white">
              VIEW OUR MENU
            </button>
          </div>
        </div>
  
        {/* Navigation Arrows */}
        {/* <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white">
          <ChevronLeft size={40} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white">
          <ChevronRight size={40} />
        </button> */}
  
        {/* Book a Table Button */}
        <button className="absolute bottom-8 right-8 flex flex-col items-center justify-center bg-[#C8A97E] p-4 text-white">
          <svg
            className="mb-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="text-xs">BOOK A<br />TABLE</span>
        </button>
      </div>
    )
  }

export default Hero
