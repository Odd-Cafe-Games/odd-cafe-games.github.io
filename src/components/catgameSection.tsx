import { useState, useEffect } from "react";
import ImageCarousel from "./imageCarousel"
import InlaidImage from "./inlaidImageElement"

type CatProps = {
  isNight: boolean;
};

const CatGame: React.FC<CatProps> = ({isNight}) => {
	return (<section className={`min-h-[90vh] w-full flex flex-col items-center justify-center space-y-5 md:space-y-15 py-20 ${isNight ? 'dark-projects' : 'light-projects'}`}>
      {/* Image and controls */}

        <h1 className={`text-4xl md:text-6xl font-bold`}>
          Kitty Maker
        </h1>
        <ImageCarousel/>
      {/* Text content */}
      <div className={`w-[90%] md:w-[40%] p-8 lg:p-20 text-center justify-center md:text-left space-y-4`}>
        <p className={`text-xl text-center md:text-3xl`}>
          Through various circumstances, you've adopted a strange white kitten,
          and are in charge of raising her.
          <br />
        </p>
      </div>
      <InlaidImage imageRef="/assets/kittyMaker/rest_image.png" reverse={false}>
        <div className="flex-col items-justify items-center">
          <h1 className={`text-4xl md:text-6xl font-playfair font-semibold`}>
            The Kitty Digest
          </h1>
          <p className="text-lg md:text-2xl font-inter font-medium">
            <br />
            Teach the small cat how to work, play, and build relationships with
            other cats to uncover more about her mysterious past.
          </p>
        </div>
      </InlaidImage>
      <InlaidImage imageRef="/assets/kittyMaker/cafe_image.png" reverse={true}>
        <div className="flex-col items-justify items-center">
          <h1 className={`text-4xl md:text-6xl font-playfair font-semibold`}>
            A Busy Kitty About Town!
          </h1>
          <p className="text-lg md:text-2xl font-inter font-medium">
            <br />
            Plan a schedule and level up skills to become the greatest cat around! Meet new friends and help them grow together.
          </p>
        </div>
      </InlaidImage>
    </section>
	);
};

export default CatGame