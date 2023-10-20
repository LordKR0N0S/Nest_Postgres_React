import styled from "@emotion/styled";
import backgroundImage from "../../assets/image60.jpg";

export const Container = styled.main`
  background: linear-gradient(rgba(23, 34, 52, 0.4), rgba(23, 34, 52, 0.4)),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  color: var(--color-font);
  font-size: 64px;
  line-height: 80px;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Text = styled.p`
  color: var(--color-font);
  font-family: var(--font-family-lato);
  font-weight: var(--font-regular);
  font-size: 24px;
  line-height: 32px;
  max-width: 750px;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  border: 1px solid white;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 20px;
  line-height: 34px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: rgba(252, 250, 250, 0.1);
  }
`;
