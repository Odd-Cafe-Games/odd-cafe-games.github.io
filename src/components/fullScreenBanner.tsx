import Header from "./header"
import { useState, useRef } from "react"
import "../styles/mask.css"

type BannerProps = {
  isNight: boolean;
  handleNightToggle: () => void;
}

const FullScreenBanner: React.FC<BannerProps> = ({isNight, handleNightToggle}) => {

  const [animating, setAnimating] = useState(false)
  const timeoutRef = useRef<number | null>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  const animateDayTransition = () => {
    handleNightToggle();
    if(timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      const e1 = bannerRef.current;
      if(e1) {
        e1.classList.remove('animate');
        void e1.offsetWidth; //Force reload
        e1.classList.add('animate')
      }
    }
    setAnimating(true);
    timeoutRef.current = window.setTimeout(() => setAnimating(false), 1500);
  };

  return (

      <div className="relative w-screen h-[95vh] overflow-hidden mb-20">
        {/* Background layer displaying the new image */}
        <div
              className= "absolute w-full h-full bg-cover bg-center"
              style={{ backgroundImage: isNight ? `url('/assets/banner.png')`: `url('assets/bannerday.png')`, zIndex: 1}}
        >
          <Header onToggleFunc={animateDayTransition}/>
        </div>

        <div
              ref={bannerRef}
              className={`absolute w-full h-full bg-cover bg-center mask-fade ${
                animating ? 'animate' : ''
              }`}
              style={{ backgroundImage: isNight ? `url('/assets/bannerday.png')`: `url('assets/banner.png')`, zIndex: 2}}
        >
        </div>
      </div>
  );
};

export default FullScreenBanner;