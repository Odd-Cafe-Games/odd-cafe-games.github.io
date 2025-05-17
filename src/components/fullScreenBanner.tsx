import Header from "./header"
import {useState} from "react"
import "../styles/mask.css"

type BannerProps = {
  isNight: boolean;
  handleNightToggle: () => void;
}

const FullScreenBanner: React.FC<BannerProps> = ({isNight, handleNightToggle}) => {

  const [animating, setAnimating] = useState(false)

  const animateDayTransition = () => {
    handleNightToggle();
    setAnimating(true);
    setTimeout(() => setAnimating(false), 1500); // match animation time
  };

  return (

      <div className="relative w-screen h-[95vh] overflow-hidden">
        {/* Background layer displaying the new image */}
        <div
              className= "absolute w-full h-full bg-cover bg-center"
              style={{ backgroundImage: isNight ? `url('/assets/banner.png')`: `url('assets/bannerday.png')`, zIndex: 1}}
        >
          <Header onToggleFunc={animateDayTransition}/>
        </div>

        <div
              className={`absolute w-full h-full bg-cover bg-center mask-fade ${
                animating ? 'animate' : 'hidden'
              }`}
              style={{ backgroundImage: isNight ? `url('/assets/bannerday.png')`: `url('assets/banner.png')`, zIndex: 2}}
        >
        </div>
      </div>
  );
};

export default FullScreenBanner;