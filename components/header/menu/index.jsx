import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import useIsMobile from "@/library/hooks/isMobile";
import MenuList from "./menuList";

const Container = styled(motion.nav)`
  position: absolute;
  top: 15vh;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  z-index: 1;
  max-width: 100vw;
`;

const Menu = ({ paths, setIsOpen }) => {
  const closeMenu = () => {
    setIsOpen(false);
  };
  const isMobile = useIsMobile();
  return (
    <Container
      animate={{
        opacity: 1,
        transition: { ease: "easeOut", duration: 0.5 },
      }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { ease: "easeOut", duration: 0.5 } }}
    >
      <AnimatePresence>
        {isMobile ? (
          <MenuList paths={paths} closeMenu={closeMenu} />
        ) : undefined}
      </AnimatePresence>
    </Container>
  );
};

export default Menu;
