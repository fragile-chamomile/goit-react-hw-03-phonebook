import styled from '@emotion/styled';

export const Form = styled.form`
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.label`
  display: block;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  width: 81%;
  margin-left: 20px;
  padding: 4px 0;

  border: none;
  border-radius: 4px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  &:hover,
  &:focus,
  &:active {
    outline-color: #007bff;
    box-shadow: 0px 5px 10px 2px rgba(0, 123, 255, 0.4);
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-bottom: 50px;
  padding: 4px 0;

  border: none;
  border-radius: 4px;

  color: aliceblue;
  background-color: #17a2b8;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 5px 10px 2px rgba(0, 123, 255, 0.4);
  }
`;
