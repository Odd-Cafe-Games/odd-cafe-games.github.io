import { useState, useEffect } from "react";
import INFO from "../data/peopleData"

type PeopleProps = {
  isNight: boolean;
};

type ProfileProps = {
  isNight: boolean;
  person: object;
}

const LeftPhoto: React.FC<ProfileProps> = ({isNight, person}) => {
  return (
    <section className={`w-full flex flex-wrap flex-col md:flex-row px-40 py-12 ${isNight ? 'dark-theme' : 'light-theme'}`}>
      {/*Profile Image*/}
      <div className="flex w-full md:w-1/4 justify-center items-center flex-shrink-0">
        <img 
          src={person["image"]}
          className={`w-50 h-50 rounded-full outline-gray-500 outline-5`}
        />
      </div>

      {/* Text content */}
      <div className="flex w-full md:w-1/2 text-center md:text-left space-y-10 p-8">
        <p className={`text-lg md ${isNight ? 'text-gray-400': 'text-neutral-600'}`}>
          {person["description"]}
        </p>
      </div>
    </section>
  );
};

const RightPhoto: React.FC<ProfileProps> = ({isNight, person}) => {
  return (
    <section className={`w-full flex flex-wrap flex-col md:flex-row px-40 py-12 justify-end ${isNight ? 'dark-theme' : 'light-theme'}`}>
      {/* Text content */}
      <div className="flex w-full md:w-1/2 text-center md:text-left space-y-10 p-8">
        <p className={`text-lg md ${isNight ? 'text-gray-400': 'text-neutral-600'}`}>
          {person["description"]}
        </p>
      </div>

      {/*Profile Image*/}
      <div className="flex w-full md:w-1/4 justify-center items-center flex-shrink-0">
        <img 
          src={person["image"]}
          className={`w-50 h-50 rounded-full outline-gray-500 outline-5`}
        />
      </div>
    </section>
  );
};


const PeopleSection: React.FC<PeopleProps> = ({isNight}) => {
  return (
    <>
      {Object.keys(INFO["people"]).map((key, index) => (
        index % 2 == 0 ?
          <LeftPhoto isNight={isNight} person={INFO["people"][key]}/>
        :
          <RightPhoto isNight={isNight} person={INFO["people"][key]}/>
      ))}
    </>
  );
};

export default PeopleSection;
