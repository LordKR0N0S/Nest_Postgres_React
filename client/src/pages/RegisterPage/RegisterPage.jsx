import Header from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Container, Image, MainBlock } from "./RegisterPage.styled";

const RegisterPage = () => {
  return (
    <>
      <Container>
        <Header />
        <MainBlock>
          <Image />
          <RegisterForm />
        </MainBlock>
      </Container>
    </>
  );
};

export default RegisterPage;