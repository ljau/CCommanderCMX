import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import { H4 } from "@/components/global";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Item = styled(motion.li)`
  list-style: none;
  height: 3rem;
  display: flex;
  align-items: center;
  width: 70%;
  margin: 40px 0;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 90%;
    margin-bottom: 0;
    height: 2.5rem;
    margin-right: 1rem;
  }
`;

const Text = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  color: #066698;
  @media (min-width: 768px) {
    max-width: 10rem;
    height: 100%;
  }
`;

const LinkStyled = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

const MenuItem = ({ item: { params }, closeMenu }) => {
  if (!params.shouldBeOnMenu) return null;
  return (
    <Item
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={closeMenu}
    >
      <LinkStyled href={params.slug}>
        <Text>
          <H4>{params.name}</H4>
        </Text>
      </LinkStyled>
    </Item>
  );
};

export default MenuItem;
