import React from "react";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Services />
      <Team />
      <Gallery />
      <Pricing />
      <Testimonials />
    </div>
  );
};

export default Home;
