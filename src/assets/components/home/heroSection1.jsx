import { useState, useEffect } from "react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2026-09-28T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Conference images
  const images = [
    "/images/carousel/111.webp",
    "/images/carousel/112.webp",
    "/images/carousel/113.webp",
    "/images/carousel/114.webp",
    "/images/carousel/115.webp",
    "/images/carousel/116.webp",
    "/images/carousel/117.webp",
    "/images/carousel/118.webp",
    "/images/carousel/119.webp",
    "/images/carousel/120.webp",
    "/images/carousel/121.webp",
    "/images/carousel/122.webp",
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Diagonal Accent Stripes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-amber-400 to-transparent transform skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-blue-800 to-transparent transform -skew-x-12"></div>
      </div>

      <div className="relative z-10 w-full px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 py-4 lg:py-8">
            {/* Main Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900">
              2<sup>nd</sup> Asia Pacific Conference on Engineering, Education, Social Science and Humanities 
              <span className="text-lg sm:text-xl lg:text-3xl mt-2">
                {" "}
                (APCEESH-2026)
              </span>
            </h1>

            {/* Theme */}
            <div className="flex flex-col space-y-2">
              <p className="text-base sm:text-lg">
                <span className="font-bold text-blue-900">Theme: </span>
                <span className="font-semibold">
                  "Redefining Futures through Education, Technology and Social Progress for Global Sustainability"
                </span>
              </p>
              <p className="text-base sm:text-lg font-bold text-amber-600 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                Hybrid Conference: In Person + Online
              </p>
              <p className="text-base sm:text-lg">
                <span className="font-bold text-blue-900">Organized by: </span>
                <span className="font-semibold">
                  Confworld Educational Research and Development Association
                </span>
              </p>
              <p className="text-base sm:text-lg">
                <span className="font-bold text-blue-900">Academic Partner: </span>
                <span className="font-semibold">
                  Edulogic International Academic Research Education, India 
                </span>
              </p>
              <p className="text-base sm:text-lg font-bold text-gray-900">
                <span className="font-bold text-blue-900">ISBN: </span>
                <span className="font-semibold">978-57-440408-5-7</span>
              </p>
            </div>

            {/* Conference Details - Modern Cards */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4">
              {/* Date Card */}
              <div className="flex items-center gap-3 bg-gradient-to-br from-blue-800 to-blue-900 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-amber-400 p-2 rounded-lg shadow-md">
                  <svg
                    className="w-5 h-5 text-blue-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-amber-300 font-medium block">
                    Date
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white">
                    28–29 Sep, 2026
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 bg-gradient-to-br from-amber-400 to-amber-500 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-800 p-2 rounded-lg shadow-md">
                  <svg
                    className="w-5 h-5 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-blue-900 font-medium block">
                    Location
                  </span>
                  <p className="text-sm sm:text-base font-bold text-blue-900">
                    Bangkok, Thailand
                  </p>
                </div>
              </div>
            </div>

            {/* Modern Countdown Timer */}
            <div className="flex justify-center md:justify-start">
              <div className="px-4">
                <div className="flex gap-4 sm:gap-6">
                  {[
                    { label: "Days", value: timeLeft.days, gradient: "from-blue-800 to-blue-900" },
                    { label: "Hours", value: timeLeft.hours, gradient: "from-blue-700 to-blue-800" },
                    { label: "Minutes", value: timeLeft.minutes, gradient: "from-amber-400 to-amber-500" },
                    { label: "Seconds", value: timeLeft.seconds, gradient: "from-amber-500 to-amber-600" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className={`bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg p-2 sm:p-3 min-w-[50px] sm:min-w-[70px]`}>
                        <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                          {item.value.toString().padStart(2, "0")}
                        </div>
                      </div>
                      <span className={`text-xs font-medium uppercase tracking-wide mt-1 block ${
                        item.label === "Days" || item.label === "Hours" ? "text-blue-800" : "text-amber-600"
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="flex justify-center lg:justify-end py-6 lg:py-0">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Mobile Carousel */}
              <div className="lg:hidden w-full">
                <div className="relative w-full aspect-video overflow-hidden rounded-xl border-4 border-blue-800 shadow-2xl">
                  {images.map((src, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={src}
                        alt={`Conference scene ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                    </div>
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-800/80 hover:bg-blue-900 text-white p-2 rounded-full transition-all duration-300 shadow-lg"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-800/80 hover:bg-blue-900 text-white p-2 rounded-full transition-all duration-300 shadow-lg"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex 
                            ? 'bg-amber-400 w-6' 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Carousel */}
              <div className="hidden lg:block w-full py-12">
                <div className="w-full h-[500px] mx-auto bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl shadow-2xl p-1">
                  <div className="relative w-full h-full overflow-hidden rounded-xl ring-4 ring-amber-400 ring-offset-2 ring-offset-blue-800">
                    {images.map((src, idx) => (
                      <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <img 
                          src={src}
                          alt={`Conference scene ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                      </div>
                    ))}
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-800/80 hover:bg-blue-900 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-800/80 hover:bg-blue-900 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToSlide(idx)}
                          className={`transition-all duration-300 rounded-full ${
                            idx === currentImageIndex 
                              ? 'bg-amber-400 w-8 h-3' 
                              : 'bg-white/60 hover:bg-white/80 w-3 h-3'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}