import { StyledButton } from "./Button.styled";

// eslint-disable-next-line react/prop-types
const Button = ({ children, type, onClick, customStyles, customHoverStyles }) => {
  return (
    <StyledButton
      type={type || "button"}
      onClick={onClick}
      customStyles={customStyles}
      customHoverStyles={customHoverStyles}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
