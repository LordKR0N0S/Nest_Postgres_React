import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   border: 1px solid red;
`;

export const Title = styled.h1`
  font-size: 28px;
  line-height: 34px;
  color: var(--color-dark);
  margin-bottom: 20px;
  align-self: start;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  background-color: var(--color-gray);
  width: 400px;
  border-radius: 3px;
  outline: none;
  &::placeholder {
    font-size: 14px;
    font-family: var(--font-family-lato);
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: var(--color-dark);
  margin-bottom: 3px;
`;

export const TextLato = styled.p`
  font-family: var(--font-family-lato);
  font-weight: 600
  font-size: 14px;
  line-height: 22px;
  color: #172234;
  margin-bottom: 3px;
  text-align: center;
`;

export const Span = styled.span`
  color: var(--color-primary);
  cursor: pointer;
`;
