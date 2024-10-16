import React from "react";
import Pharagraph from "../pharagraph";
import { H2 } from "../global";

const Article = ({ title, paragraphs }) => {
  return (
    <>
      {title && <H2>{title}</H2>}
      <Pharagraph paragraphs={paragraphs} />
    </>
  );
};

export default Article;
