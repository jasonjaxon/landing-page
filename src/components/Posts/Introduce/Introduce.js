import React from "react";
import Button from "./../../Button/Button";
import * as names from "./../../Button/Names";
import HeroSVG from "./../../../assets/svg/HeroSVG.js";
import Post from "../../Post/Post/Post";
import PostDesc from "../../Post/PostDesc/PostDesc";
import PostHeader from "./../../Post/PostHeader/PostHeader";
import PostParagraph from "../../Post/PostParagraph/PostParagraph";
import BtnBox from "../../Post/BtnBox/BtnBox";

function Introduce() {
  return (
    <Post>
      <PostDesc>
        <PostHeader>Introduce Your Product Quickly & Effectively</PostHeader>
        <PostParagraph>
          Landy comes with multi-lingual support, all of the content is stored
          in the JSON files, so that you can manage the texts without having any
          prior knowledge in developing web applications using React.js.
        </PostParagraph>
        <BtnBox>
          <Button
            type="button"
            btnStyle={names.BTN__PRIMARY__SOLID}
            btnSize={names.BTN__LARGE}
          >
            Get Started
          </Button>
        </BtnBox>
      </PostDesc>
    </Post>
  );
}

export default Introduce;
