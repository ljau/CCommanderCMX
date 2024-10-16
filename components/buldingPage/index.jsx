"use client";

import React, { useEffect, useState } from "react";
import useGetPages from "@/library/hooks/useGetPages";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import BannerWithContent from "../bannerWithContent/index";
import Article from "../article/index";
import CardGrid from "../cardGrid/index";
import SocialMediaArticle from "../socialMediaArticle/index";
import ImageGrid from "../imageGrid/index";
import Butto from "../button/index";
import { H1 } from "../global";
import AnimatedDiv from "../animatedDiv";

export const MainContainer = styled.div`
  min-height: 90vh;
  max-width: 100vw;
  width: 100%;
  display: flex;
  padding-top: 15vh;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    padding-top: 10vh;
  }
`;

const BuildingPage = () => {
  const [pageByBlock, setPageByBlock] = useState(null);
  const pathName = usePathname();
  const pagesProps = useGetPages(pathName);
  useEffect(() => {
    if (!pagesProps.blocks) return;
    let pageComponents = [];
    const blocks = pagesProps.blocks;
    blocks.map((block, index) => {
      let selectedComponent = null;
      switch (block.__typename) {
        case "Article":
          selectedComponent = (
            <Article key={`article-component-${index}`} {...block} />
          );
          break;
        case "BannerWithContent":
          selectedComponent = (
            <BannerWithContent
              key={`bannerWithContent-component-${index}`}
              {...block}
            />
          );
          break;
        case "CardGrid":
          selectedComponent = (
            <CardGrid key={`cardGrid-component-${index}`} {...block} />
          );
          break;
        case "SocialMediaArticle":
          selectedComponent = (
            <SocialMediaArticle
              key={`socialMediaArticle-component-${index}`}
              {...block}
            />
          );
          break;
        case "ImageGrid":
          selectedComponent = (
            <ImageGrid key={`imageGrid-component-${index}`} {...block} />
          );
          break;
        case "Button":
          selectedComponent = (
            <Butto key={`button-component-${index}`} {...block} />
          );
          break;
        default:
          return null;
      }
      pageComponents.push(
        <AnimatedDiv
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          key={`animatedDiv-${index}`}
        >
          {selectedComponent}
        </AnimatedDiv>
      );
    });
    setPageByBlock(pageComponents);
  }, [pagesProps]);

  if (!pagesProps) return;

  return (
    <MainContainer>
      <AnimatedDiv
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {pagesProps.pageTitle && <H1>{pagesProps.pageTitle}</H1>}
      </AnimatedDiv>

      {pageByBlock}
    </MainContainer>
  );
};

export default BuildingPage;
