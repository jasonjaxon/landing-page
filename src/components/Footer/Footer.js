import React, { useState } from "react";
import Header from "./Header/Header";
import { NavLink } from "react-router-dom";

import LogoSVG from "./../../assets/svg/LogoSVG";
import GithubSVG from "../../assets/svg/GithubSVG";
import TwitterSVG from "../../assets/svg/TwitterSVG";
import LinkdinSVG from "../../assets/svg/LinkdinSVG";
import InstagramSVG from "../../assets/svg/InstagramSVG";
import MediumSVG from "../../assets/svg/MediumSVG";
import classes from "./Footer.module.css";

function Footer() {
  const [lang, setLang] = useState("english");
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.linkBox}>
          <Header>contact</Header>
          <p>
            Do you have any question regarding the project? Feel free to reach
            out.
          </p>
          <button>Let's Chat</button>
        </div>
        <div className={classes.linkBox}>
          <Header>Policy</Header>
          <NavLink to="/">Application Security</NavLink>
          <NavLink to="/">Software Principles</NavLink>
          <NavLink to="/">Support Center</NavLink>
          <NavLink to="/">Customer Support</NavLink>
        </div>
        <div className={classes.linkBox}>
          <Header>address</Header>
          <p>
            Rancho Santa Margarita
            <br /> 2131 Elk Street
            <br /> California
          </p>
        </div>
        <div className={classes.linkBox}>
          <Header>company</Header>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/">Press</NavLink>
          <NavLink to="/">Careers & Culture</NavLink>
        </div>
        <div className={classes.linkBox}>
          <Header>Language</Header>
          <select
            name="select"
            value={lang}
            onChange={e => setLang(e.target.value)}
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
        <div className={classes.socialMedia}>
          <div className={classes.logo}>
            <LogoSVG className={classes.logoSVG} />
          </div>
          <div className={classes.social}>
            <NavLink to="/">
              <GithubSVG />
            </NavLink>
            <NavLink to="/">
              <TwitterSVG />
            </NavLink>
            <NavLink to="/">
              <LinkdinSVG />
            </NavLink>
            <NavLink to="/">
              <InstagramSVG />
            </NavLink>
            <NavLink to="/">
              <MediumSVG />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
