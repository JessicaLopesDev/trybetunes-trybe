import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  height: 100vh;
  background-color: rgb(232, 236, 241);
  display: flex;
`;

export const AlbumContainer = styled.main`
  margin: auto;
  width: 50%;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background-color: rgb(207, 208, 220);
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

export const Form = styled.form``;

export const Title = styled.h2`
  font-size: 20px;
  color: rgb(11, 40, 72);
`;

export const Text = styled.h4`
  color: rgba(1, 22, 38, 0.5);
`;

export const Input = styled.input``;

export const Button = styled.button`
  padding: 6px;

  background-color: green;
  color: white;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', sans-serif;

  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 3px black;

  cursor: pointer;
`;
