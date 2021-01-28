import React from "react";
import RocketSVG from "./../../../assets/svg/RocketSVG";
import Post from "../../Post/Post/Post";
import PostDesc from "../../Post/PostDesc/PostDesc";
import PostHeader from "./../../Post/PostHeader/PostHeader";
import PostParagraph from "../../Post/PostParagraph/PostParagraph";

function PreMade() {
  return (
    <Post>
      <PostDesc>
        <PostHeader>Ready made sections</PostHeader>
        <PostParagraph>
          Landy comes with a set of ready to use sections to help you easily
          create a landing page for your own brand, with all the content your
          startup desires. In order to replace any dummy elements (text, image,
          etc..) all you need to do is go to content folder and input your real
          content.
        </PostParagraph>
      </PostDesc>
      <RocketSVG />
    </Post>
  );
}

export default PreMade;
