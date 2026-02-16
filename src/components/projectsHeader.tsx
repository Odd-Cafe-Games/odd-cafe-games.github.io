

type ProjectsHeaderProps = {
	tabNumber: number;
  	setProjectTab : (tabNumber:number) => void
	isNight: boolean;
};

const getTabClass = (checkNumber: number, tabNumber: number, isNight: boolean) => {
	if(tabNumber === checkNumber) {
		if(isNight) {
			return "dark-theme"
		}
		else{
			return "light-theme"
		}		
	}
	else {
		if(isNight) {
			return "dark-projects"
		}
		else{
			return "light-projects"
		}
	}
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({ tabNumber, setProjectTab, isNight}) => {
  return (
    <header className={`w-full py-4 shadow-md ${isNight ? "dark-footer" : "light-footer"}`}>
      <div className="w-full mx-auto flex items-center justify-between px-6">
        <div className="mx-auto items-center flex gap-6">
          <button
            onClick={() => setProjectTab(0)}
            className={`px-4 py-1.5 rounded-md text-xl font-bold transition ${getTabClass(0, tabNumber, isNight)}`}
          >
            Kitty Maker
          </button>

          <button
            onClick={() => setProjectTab(1)}
            className={`px-4 py-1.5 rounded-md text-xl font-bold transition ${getTabClass(1, tabNumber, isNight)}`}
          >
            Project F
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProjectsHeader