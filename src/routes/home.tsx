import FullScreenBanner from "../components/fullScreenBanner";
import type { Route } from "./+types/home";
import Footer from "../components/footer";
import ProjectsSection from "../components/projectsSection";
import PeopleSection from "../components/peopleSection";
import AboutSection from "../components/aboutSection";
import {useState} from "react"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Odd Cafe Games" },
    { name: "description", content: "Odd Cafe Games Website" },
  ];
}

export default function Home() {
  const [isNight, setIsNight] = useState(true)

  const toggleNight = () => {
    setIsNight(!isNight)
  }

  return <h1 className="text-3x1 font-bold">
          <FullScreenBanner isNight={isNight} handleNightToggle={toggleNight}/>
          <AboutSection isNight = {isNight}/>
          {/**<PeopleSection isNight = {isNight}/>**/}
          <ProjectsSection isNight={isNight}/>
          <Footer isNight={isNight}/>
          </h1>;
      }
