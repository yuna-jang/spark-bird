import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Footer from "../layouts/Footer";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;1,200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap');
  ${reset}
  body{
    font-family: "Source Sans 3", sans-serif;
    font-weight: 100;
    font-optical-sizing: auto;
    background-color: whitesmoke;
    color:${(props) => props.theme.textColor};
  }
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.lightColor};
  position: relative;
  margin: 0 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${window.innerHeight - 700 + 1}px;
`;

function Root() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      {/* Root의 자식 router가 있으면 자식 url로 갔을 때 Outlet 컴포넌트가 자식 컴포넌트로 대체됩니다. */}
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
export default Root;
