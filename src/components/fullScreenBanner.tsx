import Header from "./header"
import {useState} from "react"
import "../styles/mask.css"

const FullScreenBanner = () => {

  const [isNight, setIsNight] = useState(true);
  const [animating, setAnimating] = useState(false)

  const toggleNight = () => {
    setIsNight(!isNight)
  };

  const animateDayTransition = () => {
    if (animating) return;
    toggleNight()
    setAnimating(true);
    setTimeout(() => setAnimating(false), 1500); // match animation time
  };

  return (

      <div className="relative w-screen h-screen overflow-hidden mb-6">
        {/* Background layer displaying the new image */}
        <div
              className= "absolute w-full h-full bg-cover bg-center"
              style={{ backgroundImage: isNight ? `url('/assets/banner.png')`: `url('assets/bannerday.png')`, zIndex: 1}}
        >
          <Header onToggleFunc={animateDayTransition}/>
        </div>

        <div
              className={`absolute w-screen h-screen bg-cover bg-center mask-fade ${
                animating ? 'animate' : 'hidden'
              }`}
              style={{ backgroundImage: isNight ? `url('/assets/bannerday.png')`: `url('assets/banner.png')`, zIndex: 2}}
        >
        </div>
      </div>
  );
};

export default FullScreenBanner;