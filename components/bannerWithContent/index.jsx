import React from "react";
import styled from "styled-components";
import Pharagraph from "../pharagraph";
import { H1 } from "../global";
import { AnimatePresence } from "framer-motion";

export const BigLogo = styled.img`
  max-height: 50vh;
  max-width: 90%;
  margin-bottom: 50px;
`;

const BannerWithContent = ({ logoWithLegends, paragraphs, title }) => {
  return (
    <>
        <H1>{title}</H1>
        <BigLogo src={logoWithLegends.url} alt="Big Logo" />
        <Pharagraph paragraphs={paragraphs} />
    </>
  );
};

export default BannerWithContent;
