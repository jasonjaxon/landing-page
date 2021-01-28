import React from "react";
import WavingSVG from "./../../../assets/svg/WavingSVG";
import Post from "../../Post/Post/Post";
import PostDesc from "../../Post/PostDesc/PostDesc";
import PostHeader from "./../../Post/PostHeader/PostHeader";
import PostParagraph from "../../Post/PostParagraph/PostParagraph";

function End() {
  return (
    <Post>
      <WavingSVG />
      <PostDesc>
        <PostHeader>That's about it!</PostHeader>
        <PostParagraph>
          If you are familiar with React, or SPA frameworks in general, there
          shouldn't be any confusing part about this template, if not, you can
          always reach out to me and I'll try me best to answer your question.
        </PostParagraph>
      </PostDesc>
    </Post>
  );
}

export default End;
