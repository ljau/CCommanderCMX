import React, { useEffect, useState } from "react";
import { H3, WrapperGrid } from "@/components/global";
import { CardContainer, CardImage } from "../card";
import Pharagraph from "../pharagraph";

const ImageGrid = ({ imagesWithContentCollection, paragraphs }) => {
  const [imageCards, setImageCards] = useState(null);

  useEffect(() => {
    const images = imagesWithContentCollection.items.map(
      ({ image, title }, index) => {
        return (
          <CardContainer key={`card-container-${index}`}>
            <H3>{title}</H3>
            <CardImage src={image.url} alt={image.title} />
          </CardContainer>
        );
      }
    );
    setImageCards(images);
  }, [imagesWithContentCollection.items]);

  return (
    <>
      <WrapperGrid>{imageCards}</WrapperGrid>;
      <Pharagraph paragraphs={paragraphs} />
    </>
  );
};

export default ImageGrid;
