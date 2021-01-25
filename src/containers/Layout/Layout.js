import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Backdrop from "./../../components/Backdrop/Backdrop";
import SideDrawer from "./../../components/SideDrawer/SideDrawer";

import classes from "./Layout.module.css";

function Layout() {
  const [sideOpen, setSideOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

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
      <Backdrop closed={() => toggleSideBar(false)} toggleClass={sideOpen} />
      <SideDrawer closed={() => toggleSideBar(false)} toggleClass={sideOpen} />
    </div>
  );
}

export default Layout;
