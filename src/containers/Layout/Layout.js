import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import HomePage from "../../pages/HomePage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import Backdrop from "./../../components/Backdrop/Backdrop";
import SideDrawer from "./../../components/SideDrawer/SideDrawer";

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
      <Backdrop toggleClass={sideOpen} closed={() => toggleSideBar(false)} />
      <SideDrawer closed={() => toggleSideBar(false)} toggleClass={sideOpen} />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default Layout;
