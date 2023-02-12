import React, { Component } from 'react';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import { getUser } from '../../services/userAPI';

import * as S from './styles';

export default class Profile extends Component {
  state = {
    userName: '',
    userEmail: '',
    userImage: '',
    userDescription: '',
    isLoading: false,
  };

  componentDidMount() {
    this.handleGetUser();
  }

  handleGetUser = async () => {
    this.setState({ isLoading: true });

    const user = await getUser();
    this.setState({
      userName: user.name,
      userEmail: user.email,
      userImage: user.image,
      userDescription: user.description,
      isLoading: false,
    });
  };

  render() {
    const {
      isLoading,
      userName,
      userEmail,
      userImage,
      userDescription,
    } = this.state;

    return (
      <S.Container data-testid="page-profile">
        <Header />
        {
          isLoading ? (
            <Loading />
          ) : (
            <S.ProfileContainer>
              <S.ImgContainer>
                <S.Image
                  src={ userImage }
                  alt={ userName }
                  data-testid="profile-image"
                />
              </S.ImgContainer>

              <S.UserDataContainer>
                <S.UserData>
                  <S.Title>Nome</S.Title>
                  <S.Text>{ userName }</S.Text>
                </S.UserData>
                <S.UserData>
                  <S.Title>Email</S.Title>
                  <S.Text>{ userEmail }</S.Text>
                </S.UserData>
                <S.UserData>
                  <S.Title>Descrição</S.Title>
                  <S.Text>{ userDescription }</S.Text>
                </S.UserData>
              </S.UserDataContainer>
            </S.ProfileContainer>
          )
        }
        <p id="hide-name">{ userName }</p>
      </S.Container>
    );
  }
}
