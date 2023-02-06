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
      <S.Form data-testid="page-login">
        <S.Label htmlFor="input-name">
          Nome
          <input
            data-testid="login-name-input"
            id="input-name"
            type="text"
            name="name"
            value={ name }
            onChange={ ({ target }) => this.handleInputNameChange(target.value) }
          />
        </S.Label>

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
      </S.Form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
