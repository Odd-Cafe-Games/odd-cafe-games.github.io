import Header from "./header"

const FullScreenBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/assets/banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%', 
      }}
    >
      <Header/>
    </div>
  );
};

export default FullScreenBanner;