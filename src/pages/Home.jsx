import React from "react";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import Slider from "../components/Slider";
import HeroBanner from "../components/HeroBanner";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <About />
      {/* <Slider /> */}
      <Services />
      <Team />
      <Gallery />
      <Pricing />
      <Testimonials />
    </div>
  );
};

export default Home;
