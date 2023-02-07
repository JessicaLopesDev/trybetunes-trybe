import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 25%;
  height: 100vh;
  background-color: rgb(11, 40, 72);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  padding: 8px 24px;
`;

export const Title = styled.h2`
  margin-top: 50px;
  font-size: 32px;
  color: rgb(210, 220, 226);
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
`;

export const NavContainer = styled.nav`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Navigation = styled(Link)`
  font-size: 20px;
  color: rgb(210, 220, 226);
  opacity: 0.6;
  text-decoration: none;
  &:hover {
    font-weight: bold;
    opacity: 1;
  }
`;
