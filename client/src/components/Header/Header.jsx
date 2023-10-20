import Button from "../Button/Button";
import { Nav, StyledHeader } from "./Header.styled";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { setLogout } from "../../store/auth/authSlice";

// eslint-disable-next-line react/prop-types
const Header = ({ mode }) => {
  mode = mode || "empty";
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      {mode === "loginSignUp" && (
        <Nav>
          <Button
            onClick={() => navigate("/login")}
            customStyles={{
              color: "var(--color-primary)",
              fontSize: "16px",
              width: `${isMobile ? "130px" : "160px"}`,
              border: "1px solid var(--color-primary)",
            }}
            customHoverStyles={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-font)",
            }}
          >
            Log In
          </Button>
          <Button
            onClick={() => navigate("/register")}
            customStyles={{
              color: "var(--color-font)",
              fontSize: "16px",
              width: `${isMobile ? "130px" : "160px"}`,
              border: "1px solid var(--color-primary)",
              backgroundColor: "var(--color-primary)",
            }}
            customHoverStyles={{
              backgroundColor: "var(--color-secondary)",
              color: "var(--color-primary)",
            }}
          >
            Sign Up
          </Button>
        </Nav>
      )}

      {mode === "signOut" && (
        <Nav>
          <Button
            onClick={() => dispatch(setLogout())}
            customStyles={{
              color: "var(--color-primary)",
              fontSize: "16px",
              width: `${isMobile ? "130px" : "160px"}`,
              border: "1px solid var(--color-primary)",
            }}
            customHoverStyles={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-font)",
            }}
          >
            Sign Out
          </Button>
        </Nav>
      )}
    </StyledHeader>
  );
};

export default Header;
