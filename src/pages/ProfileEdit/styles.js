import styled from 'styled-components';

export const Form = styled.form``;

export const Title = styled.h2``;

export const Label = styled.label``;

export const Button = styled.button`
  padding: 8px;

  background-color: green;
  color: white;
  font-weight: bold;

  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 3px black;
  font-size: 16px;

  cursor: pointer;
  :hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  }
  :disabled {
    opacity: 0.4;
    box-shadow: none;
  }
`;
