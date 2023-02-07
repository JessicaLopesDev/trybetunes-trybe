import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #6a0551;
  gap: 2rem;
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #6a0551;
    border: none;
    font-size: 1.5rem;
    font-weight: bolder;
    cursor: pointer;
  }
`;

export const Title = styled.h2``;

export const Input = styled.input`
  background-image: linear-gradient(#14602a, #14602a), linear-gradient(#000, #000);
  border: 0 none;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 2px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: #000;
  min-height: 35px;
  display: initial;
  width: 40%;
  outline: none;
  font-size: 15px;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #525252;
    }
  &::placeholder {
    opacity: 0.8;
    text-align: center;
  }
`;

export const Button = styled.button`
  /* padding: 6px;

  background-color: green;
  color: white;
  font-weight: bold;

  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 3px black;

  cursor: pointer; */
`;
