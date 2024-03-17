import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;1,200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap');
  ${reset}
  body{
    font-family: "Source Sans 3", sans-serif;
    font-weight: 100;
    font-optical-sizing: auto;
    background-color: ${(props) => props.theme.bgColor};
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

function Root() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      {/* Root의 자식 router가 있으면 자식 url로 갔을 때 Outlet 컴포넌트가 자식 컴포넌트로 대체됩니다. */}
      <Outlet />
      <Footer />
    </div>
  );
}
export default Root;
