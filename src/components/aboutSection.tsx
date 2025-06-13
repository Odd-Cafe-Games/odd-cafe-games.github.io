import { useState, useEffect } from "react";

const images = [
  "/assets/kittyMaker/kittyHome.png",
  "/assets/kittyMaker/calendar.png",
  "/assets/kittyMaker/merlinVN.png",
  "/assets/kittyMaker/sistersVN.png",
];

const aboutStatement = <>Meowdy! <br/> <b>Odd Cafe Games</b> is an ongoing project to create games that can capture the tiny moments in life that make us happy. 
                        We're hoping to share the many things that warm our hearts, and beyond that, tell an interesting story. 
                        The games we make are meant to be easy to pick up, fun, and feel just right to play. If our work has caught your eye, 
                        we hope you'll be willing to join us in playing the games that we really want to make.
                        </>

type AboutProps = {
  isNight: boolean;
};
const AboutSection: React.FC<AboutProps> = ({isNight}) => {
  return (
    <section className={`min-h-[30vh]  mx-auto flex md:flex-row items-center justify-center px-6 py-12 ${isNight ? 'dark-theme' : 'light-theme'}`}>
      {/* Text content */}
      <div className={`w-full flex-row md:w-[60%] text-center items-center md:text-center space-y-4 p-6 md:p-20`}>
        <h1 className="mx-auto text-4xl md:text-6xl font-playfair font-semibold pb-15">
          About Us
        </h1>
        <h3 className={`mx-auto font-medium text-md md:text-2xl`}>
          {aboutStatement}
        </h3>
        <img src="/assets/icons/coffeecup.png" alt="Coffee Image" className="w-[70px] h-[70px] mx-auto "></img>
      </div>
    </section>
  );
};

export default AboutSection;
