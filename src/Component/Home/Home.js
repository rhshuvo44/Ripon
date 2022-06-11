import React from "react";
import Contact from "../Shared/Contact";
import About from "./About";
import Banner from "./Banner";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;
