import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./menuItem";
import styled from "styled-components";
import useIsMobile from "@/library/hooks/isMobile";
import MenuItemDesktop from "./menuItemDesktop";

const variants = {
  animate: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 2 },
  },
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 2 },
  },
};

const List = styled(motion.ul)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  padding-right: 50px;
  max-width: 100vw;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
    margin-top: 0;
    width: 50%;
  }
`;

const MenuList = ({ closeMenu, paths }) => {

  const isMobile = useIsMobile();

  const itemsDestop = paths.map((item, index) => (
    
    <MenuItemDesktop closeMenu={closeMenu} item={item} key={`menu-item-desktop-${index}`} />
  ));
  const itemsMobile = paths.map((item, index) => (
    <MenuItem closeMenu={closeMenu} item={item} key={`menu-item-${index}`} />
  ));
  return (
    <List
      animate={variants.animate}
      initial={variants.initial}
      exit={variants.exit}
    >
      {isMobile ? itemsMobile : itemsDestop}
    </List>
  );
};

export default MenuList;
