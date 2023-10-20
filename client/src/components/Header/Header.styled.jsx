import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  height: 80px;
  background-color: var(--color-secondary);
  width: 100%;
  display: flex;
  justify-content: end;
  @media (max-width: 768px) {
    height: 70px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 60px;
  gap: 5px;
`;
