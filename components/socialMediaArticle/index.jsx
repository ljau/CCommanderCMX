import React, { useEffect, useState } from "react";
import { P } from "../global";
import styled from "styled-components";
import Pharagraph from "../pharagraph";
import { InstagramEmbed, XEmbed } from "react-social-media-embed";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
  max-width: 90%;
  .rsme-embed {
    max-width: 100%;
  }
`;

const SocialMediaArticle = ({ paragraphs, type, url, title }) => {
  const [media, setMedia] = useState(null);
  useEffect(() => {
    const selectMedia = () => {
      switch (type) {
        case "instagram":
          return <InstagramEmbed url={url} width={550} />;
        case "x":
          return <XEmbed url={url} width={550} />;
      }
    };
    setMedia(selectMedia);
  }, [type, url]);
  return (
    <Container>
      <P>
        <b>{title}</b>
      </P>
      <Pharagraph paragraphs={paragraphs} />
      {media}
    </Container>
  );
};

export default SocialMediaArticle;
