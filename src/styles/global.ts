import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    max-wid
    outline: 0;
    box-sizing: border-box;
}

#root {
    margin: 0 auto;
}

`;

export const Container = styled.div`
  /* z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px; */

  background-color: #0a0707;
  color: #fff;
  min-width: 450px;
  min-height: 650px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
  /* box-shadow: 3px 6px 40px #5d5d5d; */
  margin-bottom: 10px;
  margin-top: 10px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
