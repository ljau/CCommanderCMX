import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { Logo } from "@/library/images";
import Image from "next/image";
import useGetPaths from "@/library/hooks/useGetPaths";
import { FaAlignJustify } from "react-icons/fa";
import useIsMobile from "@/library/hooks/isMobile";
import Menu from "./menu";
import MenuList from "./menu/menuList";
import { FaXmark } from "react-icons/fa6";

export const HeaderContainer = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #066698;
  z-index: 100;
  position: fixed;
  max-width: 100vw;
  box-shadow: 0px 10px 6px rgba(0, 0, 0, 0.5); 
  @media (min-width: 768px) {
    height: 10vh;
  }
`;

export const IconContainer = styled(Image)`
  width: 5rem;
  height: 5rem;
  margin-left: 20px;
`;

export const MenuButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-right: 20px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const paths = useGetPaths();

  if (!paths.length) return null;

  return (
    <HeaderContainer>
      <Link href="/">
        <IconContainer src={Logo} alt="Header logo" priority />
      </Link>
      {isMobile ? (
        <MenuButtonContainer onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaXmark size={30} /> : <FaAlignJustify size={30} />}
        </MenuButtonContainer>
      ) : (
        <MenuList paths={paths} />
      )}
      <AnimatePresence>
        {isOpen && <Menu paths={paths} setIsOpen={setIsOpen} isOpen={isOpen} />}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
