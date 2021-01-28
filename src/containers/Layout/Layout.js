import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Backdrop from "./../../components/Backdrop/Backdrop";
import SideDrawer from "./../../components/SideDrawer/SideDrawer";
import Hero from "./../../components/Posts/Hero/Hero";
import Introduce from "./../../components/Posts/Introduce/Introduce";
import Advantage from "./../../components/Posts/Advantage/Advantage";
import PreMade from "../../components/Posts/PreMade/PreMade";
import End from "../../components/Posts/End/End";
import Contact from "./../../components/Posts/Contact/Contact";
import Footer from "../../components/Footer/Footer";

import classes from "./Layout.module.css";

function Layout() {
  const [sideOpen, setSideOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    if (sideOpen) {
      const x = window.pageXOffset;
      const y = window.pageYOffset;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    } else {
      window.onscroll = null;
    }
  }, [sideOpen]);

  useEffect(() => {
    setNav();
    window.addEventListener("resize", setNav);
  }, []);

  function setNav() {
    setIsMobile(window.innerWidth <= 768 ? true : false);
  }

  const toggleSideBar = open => {
    setSideOpen(open);
  };

  return (
    <div className={classes.Layout}>
      <Navbar
        clicked={() => setSideOpen(true)}
        sideOpen={sideOpen}
        isMobile={isMobile}
      />

      <Hero />
      <Introduce />
      <Advantage />
      <PreMade />
      <End />
      <Contact />
      <Footer />
      <Backdrop toggleClass={sideOpen} closed={() => toggleSideBar(false)} />

      <SideDrawer closed={() => toggleSideBar(false)} toggleClass={sideOpen} />
    </div>
  );
}

export default Layout;
