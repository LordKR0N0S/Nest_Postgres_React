import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/auth/authSlice";
import {
  Container,
  FormBlock,
  Input,
  Title,
  Wrapper,
  Text,
  TextLato,
  Span,
} from "./LoginForm.styled";
import Button from "../Button/Button";

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch(
      `${import.meta.env.VITE_BASE_ROUTE_API}/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );

    const loggedIn = await loggedInResponse.json();

    onSubmitProps.resetForm();

    if (loggedInResponse.ok) {
      dispatch(
        setLogin({
          user: loggedIn.email,
          token: loggedIn.token,
        })
      );
      navigate("/deals");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValuesLogin}
          validationSchema={loginSchema}
        >
          {({ values, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormBlock>
                <Text>Email</Text>
                <Input
                  label="Email"
                  placeholder="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                />
                <Text>Password</Text>
                <Input
                  label="Password"
                  placeholder="Password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                />
              </FormBlock>

              <div>
                <Button
                  type="submit"
                  customStyles={{
                    marginTop: "30px",
                    marginBottom: "15px",
                    color: "var(--color-font)",
                    fontSize: "16px",
                    width: "100%",
                    border: "1px solid var(--color-primary)",
                    backgroundColor: "var(--color-primary)",
                  }}
                  customHoverStyles={{
                    backgroundColor: "var(--color-font)",
                    color: "var(--color-primary)",
                  }}
                >
                  Sign in
                </Button>
                <TextLato>
                  Don`t have account?{" "}
                  <Span onClick={() => navigate("/register")}>Sign Up</Span>
                </TextLato>
              </div>
            </form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default LoginForm;
