import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: auto;
  height: 100vh;
  background-color: rgb(232, 236, 241);
  display: flex;
`;

export const ProfileContainer = styled.main`
  margin: auto;
  width: 50%;
  margin-top: 150px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(207, 208, 220);
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

export const ImgContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const UserDataContainer = styled.section`
  width: 68%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
`;

export const UserData = styled.section`
  width: 100%;
  margin-top: 20px;
`;

export const Navigation = styled(Link)`
  margin-top : 20px;
  font-size: 22px;
  color: rgb(15, 40, 72);
  opacity: 0.6;
  text-decoration: none;
  border-bottom: solid 4px  rgb(15, 40, 72);
  &:hover {
    font-weight: bold;
    opacity: 1;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  color: rgb(11, 40, 72);
`;

export const Text = styled.p`
  color: rgba(1, 22, 38, 0.5);
`;
