import ProjectsHeader from "./projectsHeader"
import CatGame from "./catgameSection"
import FriendTrip from "./friendTrip"
import { useState, useEffect } from "react";

type ProjectsProps = {
  isNight: boolean;
};

const ProjectsSection: React.FC<ProjectsProps> = ({isNight}) => {

  const [projectTab, setProjectTab] = useState(0)

  const switchProjectTab = (tabNumber:number) => {
    setProjectTab(tabNumber)
  }

  const renderProject = () => 
  {
    if(projectTab === 0){
      return <CatGame isNight={isNight}/>
    } else {
      return <FriendTrip isNight={isNight}/>
    }
  }

  return (
  <>
    <ProjectsHeader tabNumber={projectTab} setProjectTab={switchProjectTab} isNight={isNight}/>
    {renderProject()}
  </>
  );
};

export default ProjectsSection;
