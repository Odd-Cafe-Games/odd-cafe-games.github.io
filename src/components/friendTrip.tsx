import InlaidImage from "./inlaidImageElement"

type FriendTripProps = {
	isNight: boolean;
}

const FriendTrip: React.FC<FriendTripProps> = ({isNight}) => {
return (<section className={`min-h-[90vh] w-full flex flex-col items-center justify-center space-y-5 md:space-y-15 py-20 ${isNight ? 'dark-projects' : 'light-projects'}`}>
      <InlaidImage imageRef="/assets/friendTrip/friendTrip1.png" reverse={false}>
        <div className="flex-col items-justify items-center">
          <h1 className={`text-4xl md:text-6xl font-playfair font-semibold`}>
            Coming Soon!
          </h1>
        </div>
      </InlaidImage>
    </section>
	);
};

export default FriendTrip;