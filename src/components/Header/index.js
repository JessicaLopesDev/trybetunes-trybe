import React, { Component } from 'react';

import Loading from '../Loading';

import { getUser } from '../../services/userAPI';

import * as S from './styles';

export default class Header extends Component {
  state = {
    userName: '',
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
      isLoading: false,
    });
  };

  render() {
    const { userName, isLoading } = this.state;

    return (
      <S.Container data-testid="header-component">
        {
          isLoading ? (
            <Loading />
          ) : (
            <S.Title data-testid="header-user-name">
              {`Olá ${userName}`}
            </S.Title>
          )
        }
        <S.NavContainer>
          <S.Navigation
            to="/search"
            data-testid="link-to-search"
          >
            Pesquisar
          </S.Navigation>
          <S.Navigation
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favoritas
          </S.Navigation>
          <S.Navigation
            to="/profile"
            data-testid="link-to-profile"
          >
            Perfil
          </S.Navigation>
          <S.Navigation
            to="/profile/edit"
          >
            Editar perfil
          </S.Navigation>
        </S.NavContainer>
      </S.Container>
    );
  }
}
