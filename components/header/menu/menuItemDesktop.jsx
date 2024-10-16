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

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const Item = styled(motion.li)`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: none;
  outline: none;
`;

const Text = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const MenuItemDesktop = ({ item: { params }, closeMenu }) => {

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

export default MenuItemDesktop;
