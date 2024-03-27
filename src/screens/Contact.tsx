import styled from "styled-components";
import { theme } from "../theme-colors/theme";
import { AddressIcon } from "../icons/AddressIcon";
import { EmailIcon } from "../icons/EmailIcon";
import { PhoneIcon } from "../icons/PhoneIcon";

interface IContainer {
  backgroundColor: string;
  direction: string;
}
const Container = styled.div<IContainer>`
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
  flex-direction: ${(props) => props.direction};
  padding: 5% 10%;
`;

const DividedContainer = styled.div`
  flex: 1;
  min-width: 50%;
  display: flex; /* 자식 요소들을 가로로 배열하기 위해 Flex 컨테이너로 설정합니다. */
  flex-direction: column;
  justify-content: center; /* 가로 방향 가운데 정렬합니다. */
  align-items: center; /* 세로 방향 가운데 정렬합니다. */
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  font-family: "Cardo", serif;
  padding: 20px;
  cursor: pointer;
`;
const HorzontalLine = styled.hr`
  background-color: ${(props) => props.theme.bgColor};
  border: none;
  width: 400px;
  height: 3px;
  margin: 20px;
`;
const Paragraph = styled.pre`
  font-family: "Cardo", serif;
  left: 15%;
  text-align: center;
  line-height: 120%;
  letter-spacing: 0.5pt;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
interface IField {
  width: string;
  height: string;
}
const Field = styled.input<IField>`
  border-color: ${(props) => props.theme.bgColor};
  border-style: solid;
  border-width: 2px;
  margin: 10px 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 15px;
`;
const SubmitButton = styled.button`
  font-family: "Cardo", serif;
  font-size: 15px;
  width: 500px;
  height: 40px;
  background-color: ${(props) => props.theme.btnColor};
  border: 0;
  color: ${(props) => props.theme.textColor};
  margin: 30px;
`;
const ContactInfo = styled.div`
  width: 400px;
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  font-weight: 200;
  padding-top: 10px;
  text-align: left;
`;

function Contact() {
  return (
    <>
      <Container backgroundColor={theme.lightColor} direction="row">
        <DividedContainer>
          <Title>Contact us!</Title>
          <HorzontalLine />
          <Paragraph>
            You can reach us via phone or email.
            <br />
            <br />
            Due to our location in South Korea,
            <br />
            phone communication may be difficult,
            <br />
            but feel free to email us anytime.
            <br />
            <br />
            We guarantee a response within 24 hours.
            <br />
            <br />
            Thank you for considering contacting us.
            <br />
            We look forward to hearing from you soon!
          </Paragraph>
          <HorzontalLine />

          <DividedContainer>
            <ContactInfo>
              <AddressIcon />
              Visit Us : Gangnam-gu, Seoul, Korea.
            </ContactInfo>
            <ContactInfo>
              <EmailIcon />
              Drop Us : support@sparkbirdkorea.com
            </ContactInfo>
            <ContactInfo>
              <PhoneIcon />
              Call Us : (+82)10-1234-5678
            </ContactInfo>
          </DividedContainer>
        </DividedContainer>

        <DividedContainer>
          <Form>
            <ul>
              <Field placeholder="Name" width="240px" height="30px"></Field>
              <Field placeholder="E-mail" width="240px" height="30px"></Field>
            </ul>
            <Field placeholder="Phone" width="500px" height="30px"></Field>
            <Field placeholder="Message" width="500px" height="250px"></Field>
          </Form>
          <SubmitButton>Send Email</SubmitButton>
        </DividedContainer>
      </Container>

      <Container backgroundColor={theme.blueColor} direction="column">
        <Title>Frequent Questions?</Title>
        <HorzontalLine />
        <DividedContainer></DividedContainer>
      </Container>
    </>
  );
}
export default Contact;
