"use client";

import React from "react";
import styled from "styled-components";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StyledComponentsRegistry from "./registry";

const Html = styled.html`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #333;
  background-color: #f5f5f5;
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const MainLayout = styled.body`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Layout = ({ children }) => {
  return (
    <Html>
      <StyledComponentsRegistry>
        <MainLayout>
          <Header />
          {children}
          <Footer />
        </MainLayout>
      </StyledComponentsRegistry>
    </Html>
  );
};

export default Layout;
