import Navigiation from "../Components/Navigiation";
import Hero from "../Components/Hero";
import Dropped from "../Components/Dropped";
import Hero2 from "../Components/Hero2";
import News from "../Components/News";
import Service from "../Components/Service";

const Home = () => {
  return (
    <>
      <Navigiation />
      <Hero />
      <Service />
      <Dropped />
      <Hero2 />
      {/* <Trends /> */}
      <News />
    </>
  );
};

export default Home;
