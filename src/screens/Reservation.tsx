import styled from "styled-components";

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: "Cardo", serif;
  font-weight: 100;
  padding: 50px;
  cursor: pointer;
`;
const Form = styled.form`
  margin: 0 10%;
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

function Contact() {
  return (
    <>
      <Title>Let's book a birding tour!</Title>
      <Form>
        <ul>
          <Field placeholder="Name" width="240px" height="30px"></Field>
          <Field placeholder="E-mail" width="240px" height="30px"></Field>
        </ul>
        <Field placeholder="Phone" width="500px" height="30px"></Field>
        <Field placeholder="Message" width="500px" height="250px"></Field>
      </Form>
      <SubmitButton>Submit</SubmitButton>
    </>
  );
}
export default Contact;
