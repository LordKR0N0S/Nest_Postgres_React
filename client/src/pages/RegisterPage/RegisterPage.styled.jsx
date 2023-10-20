import styled from "@emotion/styled";
import backgroundImage from "../../assets/Rectangle291.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const Image = styled.div`
  background: linear-gradient(rgba(23, 34, 52, 0.4), rgba(23, 34, 52, 0.4)),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 40%;
  flex: 1 1 auto;
  @media (max-width: 820px) {
    display: none;
  }
`;

export const MainBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
`;
