import image1 from "../assets/images/gamepic1.jpg"
import image2 from "../assets/images/web1.jpg"
import image3 from "../assets/images/tronics1.jpg"
import { useState,useEffect } from 'react';
import image4 from "../assets/images/web2.jpg"
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your images from the image folder
// Replace these with your actual image filenames


const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Your slides data with imported images
  const slides = [
    {
      id: 1,
      image: image2,
      title: 'WEBSITES CREATIONS',
      description: 'We design amazing websites and mobile apps.'
    },
    {
      id: 2,
      image: image3,
      title: 'TECHTRONICS',
      description: 'We build and design perfect AI embedded Electronics.'
    },
    {
      id: 3,
      image: image1,
      title: 'GAME DEVELOPMENT',
      description: 'We design and build fantastic games.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-[url('./assets/images/web3.jpg')] flex items-center justify-center p-4  bg-repeat-x ">
      <div className="relative w-full max-w-4xl h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/20">
        
        {/* Main carousel container */}
        <div className="relative w-full h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content overlay */}
              <div className="relative z-10 flex items-center justify-center h-full p-8">
                <div className="text-center text-white max-w-2xl">
                  <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                index === currentSlide
                  ? 'bg-white border-white shadow-lg shadow-white/50 scale-125'
                  : 'bg-white/50 border-white/70 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm border border-white/20">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;