import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Container, Image, MainBlock } from "./LoginPage.styled";

const LoginPage = () => {
  return (
    <>
      <Container>
        <Header />
        <MainBlock>
          <Image />
          <LoginForm />
        </MainBlock>
      </Container>
    </>
  );
};

export default LoginPage;
