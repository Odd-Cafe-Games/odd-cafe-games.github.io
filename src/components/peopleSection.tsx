import { useState, useEffect } from "react";
import INFO from "../data/peopleData"

type PeopleProps = {
  isNight: boolean;
};

type ProfileProps = {
  isNight: boolean;
  person: object;
  reverse: boolean;
}

const Profile: React.FC<ProfileProps> = ({isNight, person, reverse}) => {
  return (
    <section className={`w-full flex flex-wrap flex-col md:flex-row md:px-40 md:py-12 ${isNight ? 'dark-theme' : 'light-theme'} ${reverse ? 'md:flex-row-reverse': ''}`}>
      {/*Profile Image*/}
      <div className="flex w-full md:w-1/3 justify-center items-center flex-shrink-0 p-5">
        <img 
          src={person["image"]}
          className={`w-2xs h-2xs rounded-full outline-gray-500 outline-5`}
        />
      </div>

      {/* Text content */}
      <div className={`flex w-full md:w-2/3 text-center justify-center items-center md:text-left space-y-10 p-4 md:p-8 md:my-8 ${isNight ? 'dark-highlight' : 'light-highlight'}`}>
        <p className={`text-lg md ${isNight ? 'text-gray-400': 'text-neutral-600'}`}>
          {person["description"]}
        </p>
      </div>
    </section>
  );
};


const PeopleSection: React.FC<PeopleProps> = ({isNight}) => {
  return (
    <>
      {Object.keys(INFO["people"]).map((key, index) => (
        <Profile isNight={isNight} person={INFO["people"][key]} reverse={index % 2}/>
      ))}
    </>
  );
};

export default PeopleSection;
