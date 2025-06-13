import FullScreenBanner from "../components/fullScreenBanner";
import type { Route } from "./+types/home";
import Footer from "../components/footer";
import ProjectsSection from "../components/projectsSection";
import PeopleSection from "../components/peopleSection";
import AboutSection from "../components/aboutSection";
import {useState, useRef} from "react"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Odd Cafe Games" },
    { name: "description", content: "Odd Cafe Games Website" },
  ];
}

export default function Home() {
  const aboutRef = useRef(null);

  const [isNight, setIsNight] = useState(true)

  const toggleNight = () => {
    setIsNight(!isNight)
  }

  return <h1 className={`text-3x1 font-bold ${isNight ? 'dark-theme' : 'light-theme'}`}>
          <FullScreenBanner isNight={isNight} handleNightToggle={toggleNight} aboutRef={aboutRef}/>
          <div ref={aboutRef}></div>
          <AboutSection isNight = {isNight}/>
          <ProjectsSection isNight={isNight}/>
          {/**<PeopleSection isNight = {isNight}/>**/}
          <Footer isNight={isNight}/>
          </h1>;
      }
