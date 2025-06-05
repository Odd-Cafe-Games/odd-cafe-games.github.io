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

const Profile: React.FC<ProfileProps> = ({isNight, person}) => {
  return (
    <section className={`min-h-[60vh] md:min-h-[20vh] w-full flex flex-wrap flex-row px-4 md:px-10 py-8 ${isNight ? 'dark-theme' : 'light-theme'}`}>
      {/*Profile Image*/}
      <div className="flex w-[35%] md:w-[25%] justify-center items-center flex-shrink-0 md:m-4 p-5">
        <img 
          src={person["image"]}
          className={`w-2xs h-2xs rounded-full outline-gray-500 outline-5`}
        />
      </div>

      {/* Text content */}
      <div className={`flex w-[60%] md:w-[70%] text-center justify-center items-center text-left p-4 md:p-8 md:my-4 ${isNight ? 'dark-highlight' : 'light-highlight'}`}>
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
    <div className={`grid grid-cols-1 md:grid-cols-2 md:gap-2 md:px-30 md:pb-20 overflow-visible ${isNight ? 'dark-theme' : 'light-theme'}`}>
      {Object.keys(INFO["people"]).map((key, index) => (
        <Profile isNight={isNight} person={INFO["people"][key]}/>
      ))}
    </div>
    </>
  );
};

export default PeopleSection;
