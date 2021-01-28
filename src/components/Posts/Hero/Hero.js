import React from "react";
import Button from "./../../Button/Button";
import * as names from "./../../Button/Names";
import HeroSVG from "./../../../assets/svg/HeroSVG.js";
import Post from "../../Post/Post/Post";
import PostDesc from "../../Post/PostDesc/PostDesc";
import PostHeader from "./../../Post/PostHeader/PostHeader";
import PostParagraph from "../../Post/PostParagraph/PostParagraph";
import BtnBox from "../../Post/BtnBox/BtnBox";

function Hero() {
  return (
    <Post>
      <PostDesc>
        <PostHeader>Landing page template for developers & startups</PostHeader>
        <PostParagraph>
          Beautifully designed templates using React.js, ant design and
          styled-components! Save weeks of time and build your landing page in
          minutes.
        </PostParagraph>
        <BtnBox>
          <Button
            type="button"
            btnStyle={names.BTN__PRIMARY__SOLID}
            btnSize={names.BTN__LARGE}
          >
            Explore
          </Button>
          <Button
            type="button"
            btnStyle={names.BTN__PRIMARY__OUTLINE}
            btnSize={names.BTN__LARGE}
          >
            Learn More
          </Button>
        </BtnBox>
      </PostDesc>
      <HeroSVG />
    </Post>
  );
}

export default Hero;
