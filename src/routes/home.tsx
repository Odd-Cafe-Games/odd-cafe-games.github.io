import FullScreenBanner from "../components/fullScreenBanner";
import type { Route } from "./+types/home";
import Footer from "../components/footer";
import ProjectsSection from "../components/projectsSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Odd Cafe Games" },
    { name: "description", content: "Odd Cafe Games Website" },
  ];
}

export default function Home() {
  return <h1 className="text-3x1 font-bold">
          <FullScreenBanner/>
          <ProjectsSection/>
          <Footer/>
          </h1>;
      }
