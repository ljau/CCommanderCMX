import styled from "styled-components";

export const P = styled.p`
  width: 90%;
  max-width: 900px;
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
`;

export const H1 = styled.h1`
   display: block;
    font-size: 2em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
`;

export const H2 = styled.h2`
    display: block;
    font-size: 1.5em !important;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
`;

export const H3 = styled.h3`
    display: block;
    font-size: 1.17em !important;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
`;
export const H4 = styled.h4`
    display: block;
    font-size: 1em !important;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
`;



export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const SingleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  max-width: 900px;
`;

export const WrapperGrid = styled.div`
  display: grid;
  margin-bottom: 20px;
  max-width: 900px;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0 50px;
  grid-auto-rows: minmax(100px, auto);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Wrapper = styled(WrapperGrid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const A = styled.a`
  color: #635c91;
  text-decoration: underline;
`;
