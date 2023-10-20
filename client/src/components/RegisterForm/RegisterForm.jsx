import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormBlock,
  Input,
  Title,
  Wrapper,
  Text,
} from "./RegisterForm.styled";
import Button from "../Button/Button";

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (values, onSubmitProps) => {
    const registerResponse = await fetch(
      `${import.meta.env.VITE_BASE_ROUTE_API}/user`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );

    await registerResponse.json();

    onSubmitProps.resetForm();

    if (registerResponse.ok) {
      navigate("/login");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Get started on Deals</Title>
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
                  Sign Up
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default RegisterForm;
