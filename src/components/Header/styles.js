import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  background-color: rgb(11, 40, 72);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  height: 80px;
`;

export const NavContainer = styled.nav`
`;

export const Navigation = styled(Link)`
  margin-left : 10px;
  font-size: 22px;
  color: rgb(210, 220, 226);
  opacity: 0.6;
  text-decoration: none;
  &:hover {
    font-weight: bold;
    opacity: 1;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: rgb(210, 220, 226);
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
`;
