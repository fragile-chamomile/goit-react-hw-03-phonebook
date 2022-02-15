import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  width: 420px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 250px;
  margin-left: 10px;
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
