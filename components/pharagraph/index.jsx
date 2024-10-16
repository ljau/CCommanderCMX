import React, { useState, useEffect } from "react";
import { P, H2, H3, H1, H4 } from "../global";

const Pharagraph = ({ paragraphs }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let articleContent = [];
    paragraphs?.map((paragraph, index) => {
      let paragraphComponent = [];
      paragraph?.map((content, index) => {
        switch (content.type) {
          case "letter":
            paragraphComponent.push(
              <span key={`pharagrap-${index}-letter`}>{content.text}</span>
            );
            break;
          case "link":
            paragraphComponent.push(
              <a
                key={`pharagrap-${index}-link`}
                href={content.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.text}
              </a>
            );
            break;
          case "bold":
            paragraphComponent.push(
              <b key={`pharagrap-${index}-b`} style={{ fontWeight: "bold" }}>
                {content.text}
              </b>
            );
            break;
          case "italic":
            paragraphComponent.push(
              <i key={`pharagrap-${index}-i`} style={{ fontStyle: "italic" }}>
                {content.text}
              </i>
            );
            break;
          case "h1":
            articleContent.push(
              <H1 key={`pharagrap-${index}-h1`} style={{ fontSize: "3rem" }}>
                {content.text}
              </H1>
            );
            break;
          case "h2":
            articleContent.push(
              <H2 key={`pharagrap-${index}-h2`} style={{ fontSize: "2rem" }}>
                {content.text}
              </H2>
            );
            break;
          case "h3":
            articleContent.push(
              <H3 key={`pharagrap-${index}-h3`} style={{ fontSize: "1.5rem" }}>
                {content.text}
              </H3>
            );
            break;
          case "h4":
            articleContent.push(
              <H4 key={`pharagrap-${index}-h4`} style={{ fontSize: "1.2rem" }}>
                {content.text}
              </H4>
            );
            break;
          default:
            paragraphComponent.push(
              <span key={`pharagrap-${index}-default`}>{content.text}</span>
            );
            break;
        }
      });

      if (paragraphComponent.length > 0)
        articleContent.push(<P key={`main-pharagrap-${index}`}
          
          >{paragraphComponent}</P>);
    });
    setArticle(articleContent);
  }, [paragraphs]);

  if (!article) return null;

  return <>{article}</>;
};

export default Pharagraph;
