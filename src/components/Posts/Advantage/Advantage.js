import React from "react";
import PlanSVG from "./../../../assets/svg/PlanSVG";
import NoteSVG from "./../../../assets/svg/NoteSVG";
import Post from "../../Post/Post/Post";
import PostDesc from "../../Post/PostDesc/PostDesc";
import PostHeader from "./../../Post/PostHeader/PostHeader";
import PostParagraph from "../../Post/PostParagraph/PostParagraph";
import NoteBox from "../../Post/NoteBox/NoteBox";
import Note from "../../Post/Note/Note";

function Advantage() {
  return (
    <Post>
      <PlanSVG />
      <PostDesc>
        <PostHeader>Light, Fast & Responsive</PostHeader>
        <PostParagraph>
          This template is ready to use, so you don't need to change anything at
          a component level, unless you want to customize the default styling.
        </PostParagraph>
        <NoteBox>
          <Note
            title="Why Antd?"
            desc="Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI."
          >
            <NoteSVG />
          </Note>
          <Note
            title="Why styled-components?"
            desc="Styled Components gives you total control over your components."
          >
            <NoteSVG />
          </Note>
        </NoteBox>
      </PostDesc>
    </Post>
  );
}

export default Advantage;
