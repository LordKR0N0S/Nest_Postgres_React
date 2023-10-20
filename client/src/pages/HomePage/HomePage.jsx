import Header from "../../components/Header/Header";
import { Container, Section, Title, Text, Button } from "./HomePage.styled";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const navigate = useNavigate();
  const isAuth = Boolean(useSelector((state) => state.auth.token));
  return (
    <Container>
      <Header mode={isAuth ? "signOut" : "loginSignUp"} />
      <Section>
        <Title>The chemical negatively charged</Title>
        <Text>
          Numerous calculations predict, and experiments confirm, that the force
          filed reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. Twhile the mass defect is
        </Text>
        <Button onClick={() => navigate("/deals")}>Get started</Button>
      </Section>
    </Container>
  );
};

export default HomePage;
