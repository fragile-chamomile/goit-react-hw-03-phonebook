import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Contact = styled.span`
  display: list-item;
  margin: 0;
  margin-right: 20px;
`;

export const Button = styled.button`
  width: 70px;
  padding: 4px 0;

  color: #ff2800;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;

  &:hover,
  &:focus {
    color: aliceblue;
    background-color: #ff2800;
    box-shadow: 0px 5px 10px 2px rgba(224, 0, 0, 0.4);
  }
`;
