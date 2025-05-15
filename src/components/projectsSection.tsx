import {useState, useEffect} from 'react';

const images = [
  '/assets/kittyMaker/kittyHome.png',
  '/assets/kittyMaker/calendar.png',
  '/assets/kittyMaker/merlinVN.png',
  '/assets/kittyMaker/sistersVN.png',
];

const ProjectsSection: React.FC = () => {

  // Preload images on mount
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 py-12">
      {/* Image and controls */}
      <div id="Projects" className="relative w-full max-w-[800px] mb-10 md:mb-0 md:mr-12 flex flex-col items-center">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-0 top-1/2 -translate-y-1/2 bg-gray-800/25 text-white text-3xl px-3 py-2 rounded-full hover:bg-opacity-70 transition"
            aria-label="Previous"
          >
            &lt;
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-0 top-1/2 -translate-y-1/2 bg-gray-800/25 text-white text-3xl px-3 py-2 rounded-full hover:bg-opacity-70 transition"
            aria-label="Next"
          >
            &gt;
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? 'bg-gray-800'
                  : 'bg-gray-400 hover:bg-gray-600'
              } transition`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>


      {/* Text content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-500">Kitty Maker</h1>
        <p className="text-lg md:text-xl text-gray-400">
          Through various circumstances, you've adopted a strange white kitten, and are in charge of raising her.<br/><br/>

          Teach the small cat how to work, play, and build relationships with other cats to uncover more about her mysterious past.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;