import { useState, useEffect } from "react";

const images = [
  "/assets/kittyMaker/kittyHome.png",
  "/assets/kittyMaker/calendar.png",
  "/assets/kittyMaker/merlinVN.png",
  "/assets/kittyMaker/sistersVN.png",
];

const mission_statement = ""

type AboutProps = {
  isNight: boolean;
};
const AboutSection: React.FC<AboutProps> = ({isNight}) => {
  return (
    <section className={`min-h-[50vh] w-full flex flex-col md:flex-row items-center justify-center px-6 py-12 ${isNight ? 'dark-theme' : 'light-theme'}`}>
      {/* Text content */}
      <div className="max-w-[80vw] lg:w-full text-center items-center md:text-center space-y-4">
        <p className={`flex flex-row text-lg lg:text-lg ${isNight ? 'text-gray-400': 'text-neutral-600'}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
