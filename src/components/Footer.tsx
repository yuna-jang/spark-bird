import styled from "styled-components";
import { ThreeDots } from "../icons/ThreeDots";

const Container = styled.div`
  width: 100%;
  height: 300px;
  text-align: center;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  bottom: 0;
  padding: 2% 20%;

  display: flex;
  flex-direction: column;
`;
const InfoContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center; /* 수평으로 가운데 정렬합니다. */
  align-items: flex-start; /* 수직으로 가운데 정렬합니다. */
`;
const VerticalLine = styled.hr`
  border-color: ${(props) => props.theme.lightColor};
  width: 1px;
  height: 100px;
  margin: 50px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.div`
  font-family: "Cardo", serif;
  font-size: 23px;
  padding-bottom: 20px;
`;
const Menu = styled.div`
  color: ${(props) => props.theme.lightColor};
  font-size: 18px;
  font-weight: 100;
  padding-bottom: 5px;

  display: flex;
  align-items: center;
  div {
    padding-left: 7px;
  }
`;
const HorzontalLine = styled.hr`
  border-color: ${(props) => props.theme.bgColor};
  width: 1200px;
  height: 10px;
`;

const ContactInfo = styled.div`
  color: ${(props) => props.theme.lightColor};
  font-size: 15px;
  font-weight: 100;
  padding-bottom: 10px;
  padding-left: 7px;
`;

function Footer() {
  return (
    <Container>
      <InfoContainer>
        <Content>
          <Title>Explore</Title>
          <Menu>
            <ThreeDots />
            <div>Home</div>
          </Menu>
          <Menu>
            <ThreeDots />
            <div>About</div>
          </Menu>
          <Menu>
            <ThreeDots />
            <div>Travel</div>
          </Menu>
          <Menu>
            <ThreeDots />
            <div>Gallery</div>
          </Menu>
          <Menu>
            <ThreeDots />
            <div>Contact</div>
          </Menu>
        </Content>
        <VerticalLine />
        <Content>
          <Title>Contact</Title>
          <ContactInfo>Address : Gangnam-gu, Seoul, Korea.</ContactInfo>
          <ContactInfo>E-Mail : support@sparkbirdkorea.com</ContactInfo>
          <ContactInfo>Phone : </ContactInfo>
        </Content>
      </InfoContainer>
      <HorzontalLine />
      <ContactInfo>© SparkBirdKorea, Inc. All rights reserved.</ContactInfo>
    </Container>
  );
}
export default Footer;
