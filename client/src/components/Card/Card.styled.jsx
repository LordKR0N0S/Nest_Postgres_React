import styled from "@emotion/styled";

export const Container = styled.div`
  background-image: url(${(props) => props.picture});
  background-size: cover;
  background-position: center;
  width: 630px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 15px;
  @media (max-width: 1440px) {
    width: 530px;
    height: 320px;
  }
  @media (max-width: 820px) {
    width: 530px;
    height: 320px;
  }
  @media (max-width: 480px) {
    width: 330px;
    height: 160px;
    padding: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  line-height: 34px;
  padding-bottom: 3px;
  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 1.2;
  }
`;

export const TextBlock = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
`;

export const TextRows = styled.div``;

export const Text = styled.p`
  font-family: var(--font-family-lato);
  font-size: 18px;
  line-height: 22px;
  padding-bottom: 3px;
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.1;
  }
`;
