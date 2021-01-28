import React from "react";
import Post from "./../../Post/Post/Post";
import PostDesc from "./../../Post/PostDesc/PostDesc";
import PostHeader from "./../../Post/PostHeader/PostHeader";
import PostParagraph from "./../../Post/PostParagraph/PostParagraph";
import ContactForm from "./../../Post/ContactForm/ContactForm";

function Contact() {
  return (
    <Post>
      <PostDesc>
        <PostHeader>Contact Form</PostHeader>
        <PostParagraph>
          The following form demonstrates form validation in action. Contact
          form component reduces the amount of time it is being re-rendered by
          the user as it embraces uncontrolled form validation to reduce any
          unnecessary performance penalty.
        </PostParagraph>
      </PostDesc>
      <ContactForm />
    </Post>
  );
}

export default Contact;
