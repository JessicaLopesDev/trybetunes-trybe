import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createUser } from '../../services/userAPI';

import Loading from '../../components/Loading';

import * as S from './styles';

export default class Login extends Component {
  state = {
    name: '',
    isLoading: false,
  };

  handleInputNameChange = (value) => {
    this.setState({
      name: value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    const { name } = this.state;
    const { history } = this.props;

    this.setState({ isLoading: true }, () => {
      createUser({ name })
        .then(() => {
          this.setState({ isLoading: false });
          history.push('/search');
        });
    });
  };

  render() {
    const { name, isLoading } = this.state;
    const minCharacter = 3;
    const isButtonDisable = name.length >= minCharacter;

    return (
      <S.Container data-testid="page-login">
        <S.Input
          data-testid="login-name-input"
          type="text"
          name="name"
          placeholder="Digite seu nome aqui"
          value={ name }
          onChange={ ({ target }) => this.handleInputNameChange(target.value) }
        />

        <S.Button
          data-testid="login-submit-button"
          type="submit"
          disabled={ !isButtonDisable }
          onClick={ this.handleSubmitForm }
        >
          Entrar
        </S.Button>

        {
          isLoading && <Loading />
        }
      </S.Container>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
