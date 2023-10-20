import styled from "@emotion/styled";

export const StyledButton = styled.button`
  border-radius: 5px;
  padding: 11px 0 11px 0;
  transition: all 0.3s ease-out;
  ${(props) => props.customStyles};
  &:hover {
    ${(props) => props.customHoverStyles};
  }
`;
