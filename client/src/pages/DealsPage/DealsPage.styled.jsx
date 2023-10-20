import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  max-width: 1400px;
  padding: 35px;
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const Title = styled.h1`
  padding: 15px;
  font-size: 28px;
  color: var(--color-primary);
`;

export const CardsBlock = styled.div`
  display: grid;
  flex: 1 1 auto;
  padding: 1rem;
  width: 100%;
  grid-template-columns: 630px 630px;
  gap: 20px;
  justify-items: center;
  @media (max-width: 1440px) {
    grid-template-columns: 530px 530px;
  }
  @media (max-width: 820px) {
    grid-template-columns: 530px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 330px;
  }
`;
