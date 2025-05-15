import { useState, useEffect } from "react";

const images = [
  "/assets/kittyMaker/kittyHome.png",
  "/assets/kittyMaker/calendar.png",
  "/assets/kittyMaker/merlinVN.png",
  "/assets/kittyMaker/sistersVN.png",
];

const ImageCarousel: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return <>
  <div className="relative md:mb-0 w-full max-w-[640px] aspect-[16/9]">
    <div className="relative w-full h-full overflow-visible">
      {images.map((src, index) => {
        const total = images.length;
        const relativeIndex = (index - currentIndex + total) % total;

        let transform = "";
        let zIndex = 10;
        let opacity = "opacity-0";

        if (relativeIndex === 0) {
          transform = "translate-x-0 scale-100 rotate-0";
          zIndex = 30;
          opacity = "opacity-100";
        } else if (relativeIndex === 1) {
          transform = "translate-x-[10%] scale-[0.9] rotate-6";
          zIndex = 20;
          opacity = "opacity-30";
        } else if (relativeIndex === total - 1) {
          transform = "-translate-x-[10%] scale-[0.9] -rotate-4";
          zIndex = 20;
          opacity = "opacity-30";
        }

        return (
        <div
          key={index}
          className={`
            absolute top-0 left-0 right-0 mx-auto w-[80%] h-full flex items-center justify-center
            transition-all duration-500 ease-in-out
            ${transform} ${opacity}
          `}
          style={{ zIndex }}
        >
          <div className="bg-white p-2 shadow-md w-full h-full flex items-center justify-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        );
      })}

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/50 text-white text-2xl px-2 py-1 rounded-full z-50"
        aria-label="Previous"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/50 text-white text-2xl px-2 py-1 rounded-full z-50"
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  </div>
  </>
};

const ProjectsSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 py-12">
      {/* Image and controls */}
      <div
        id="Projects"
        className="relative w-full max-w-[800px] mb-10 md:mb-0 md:mr-12 flex flex-col items-center"
      >
        <ImageCarousel/>
      </div>

      {/* Text content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-500">
          Kitty Maker
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Through various circumstances, you've adopted a strange white kitten,
          and are in charge of raising her.
          <br />
          <br />
          Teach the small cat how to work, play, and build relationships with
          other cats to uncover more about her mysterious past.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
