import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../../services/userAPI';

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
      <form data-testid="page-login">
        <label htmlFor="input-name">
          Nome
          <input
            data-testid="login-name-input"
            id="input-name"
            type="text"
            name="name"
            value={ name }
            onChange={ ({ target }) => this.handleInputNameChange(target.value) }
          />
        </label>

        <button
          data-testid="login-submit-button"
          type="submit"
          disabled={ !isButtonDisable }
          onClick={ this.handleSubmitForm }
        >
          Entrar
        </button>

        {
          isLoading && <h2>Carregando...</h2>
        }
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
