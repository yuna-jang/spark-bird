import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import getPathHeader from "../functions/getPathHeader";
import { Helmet } from "react-helmet";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
`;

const BgImage = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.textColor};
  width: 100%;
  height: 400px;

  img {
    width: 100%;
    height: 400px;
    display: flex;
    z-index: 1;
  }
`;
const Logo = styled.div`
  color: ${(props) => props.theme.btnColor};
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 10%;
  font-size: 25px;
  display: flex;
  gap: 8px;
  // font-size와 맞춰야 함
  img {
    width: 25px;
    height: 25px;
  }
`;
const Menu = styled.div`
  position: absolute;
  z-index: 2;
  top: 20px; // Logo와 맞춰야 함
  right: 10%; // Logo와 맞춰야 함
  display: flex;
  gap: 10px;
`;

const MenuButton = styled.button`
  color: white;
  background-color: transparent;
  font-size: 18px;
  font-weight: 10;

  cursor: pointer;
  border: 0;
  &:hover {
    border-radius: 5px;
    opacity: 0.8;
    background-color: white;
    color: black;
    transition: 0.3s;
  }
`;

const ReservationButton = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.btnColor};
  font-family: "Cardo", serif;
  font-size: 19px;
  font-weight: 100;
  width: 150px;
  height: 30px;
  cursor: pointer;

  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
    transition: 0.5s;
  }
`;

const Title = styled.div`
  color: white;
  font-family: "Cardo", serif;
  font-size: 50px;
  position: absolute;
  width: 100%;
  top: 40%;
  line-height: 110%; /* 55px */
  letter-spacing: 1px;
  hr {
    border-color: ${(props) => props.theme.btnColor};
    width: 100px;
    height: 3px;
  }
  p {
    font-size: 20px;
  }
  img {
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }
`;
interface Iheader {
  hash: string;
  pathname: string;
  key: string;
  search: string;
  state: string;
}

// 다른 url로 링크를 연결해주는 컴포넌트
function Header() {
  // 다른 페이지로 이동시켜주는 useNavigate
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate("/");
  };
  const onAboutClick = () => {
    navigate("/about");
  };
  const onTravelClick = () => {
    navigate("/travel");
  };
  const onGalleryClick = () => {
    navigate("/gallery");
  };
  const onContactClick = () => {
    navigate("/contact");
  };
  const onReservationClick = () => {
    navigate("/reservation");
  };
  const location = useLocation();
  const pathHeader = getPathHeader(location.pathname);

  return (
    <Container>
      <Helmet>
        <title>{pathHeader}</title>
      </Helmet>
      <BgImage>
        {pathHeader === "Spark Bird Tour" ? (
          <img src="./store/Background.png" />
        ) : null}
      </BgImage>
      <Logo>
        <img src="./store/logo.png" />
        <h1>Spark Bird Tour</h1>
      </Logo>
      <Menu>
        <MenuButton onClick={onHomeClick}>Home</MenuButton>
        <MenuButton onClick={onAboutClick}>About</MenuButton>
        <MenuButton onClick={onTravelClick}>Travel</MenuButton>
        <MenuButton onClick={onGalleryClick}>Gallery</MenuButton>
        <MenuButton onClick={onContactClick}>Contact</MenuButton>
        <ReservationButton onClick={onReservationClick}>
          Reservation
        </ReservationButton>
      </Menu>
      <Title>
        <h1>{pathHeader}</h1>
        <hr />

        <img src="./store/insta_white.png" />
        <img src="./store/yt_white.png" />
        <img src="./store/whats_white.png" />
        <p> description</p>
      </Title>
      {/* <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
           {/* <Link to={"/about"}>About</Link> 
        </li>
      </ul> */}
    </Container>
  );
}
export default Header;
