import React, { Component } from 'react';
import Header from '../../components/Header';
// import Loading from '../../components/Loading';

export default class Search extends Component {
  state = {
    music: '',
  };

  onInputChange = (value) => {
    this.setState({ music: value });
  };

  render() {
    const { music } = this.state;
    const minCharacter = 2;
    const isButtonDisable = music.length >= minCharacter;

    return (
      <>
        <header data-testid="page-search">
          <Header />
        </header>

        <main>
          <form data-testid="page-login">
            <input
              data-testid="search-artist-input"
              id="input-music"
              type="text"
              name="music"
              value={ music }
              onChange={ ({ target }) => this.onInputChange(target.value) }
            />

            <button
              data-testid="search-artist-button"
              type="submit"
              disabled={ !isButtonDisable }
              // onClick={this.handleSubmitForm}
            >
              Pesquisar
            </button>

            {/* {
              isLoading && <Loading />
            } */}
          </form>
        </main>
      </>
    );
  }
}
