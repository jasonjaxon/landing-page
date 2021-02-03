import React from "react";
import Hero from "./../components//Posts/Hero/Hero";
import Introduce from "./../components/Posts/Introduce/Introduce";
import Advantage from "./../components/Posts/Advantage/Advantage";
import PreMade from "./../components/Posts/PreMade/PreMade";
import End from "./../components/Posts/End/End";
import Contact from "./../components/Posts/Contact/Contact";
import Footer from "./../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Hero />
      <Introduce />
      <Advantage />
      <PreMade />
      <End />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
