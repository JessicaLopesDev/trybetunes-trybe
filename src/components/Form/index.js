import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label data-testid="login-name-input" htmlFor="input-name">
          Nome
          <input
            id="input-name"
            type="text"
          />
        </label>

        <button
          data-testid="login-submit-button"
          type="submit"
          disabled
        >
          Entrar
        </button>
      </form>
    );
  }
}
