import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: "Cardo", serif;
  font-weight: 600;
  margin: 50px;
`;
const Form = styled.form``;
const Field = styled.input`
  border: 2px;
`;
const SubmitButton = styled.button``;

function Contact() {
  return (
    <Container>
      <Title>Reservation</Title>
      <Form>
        <Field></Field>
        <Field></Field>
        <Field></Field>
        <Field></Field>
      </Form>
      <SubmitButton></SubmitButton>
    </Container>
  );
}
export default Contact;
