import React, { Component } from 'react';
import AlbumCard from '../../components/AlbumCard';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';

export default class Search extends Component {
  state = {
    inputValue: '',
    artistName: '',
    isLoading: false,
    albums: null,
  };

  onInputChange = (value) => {
    this.setState({
      inputValue: value,
      artistName: value,
    });
  };

  handleGetAlbum = async () => {
    const { artistName } = this.state;

    const artistAlbums = await searchAlbumsAPI(artistName);

    this.setState({
      albums: artistAlbums,
      isLoading: false,
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true,
      inputValue: '',
    });

    this.handleGetAlbum();
  };

  render() {
    const { inputValue, artistName, isLoading, albums } = this.state;
    const minCharacter = 2;
    const isButtonDisable = inputValue.length >= minCharacter;

    return (
      <>
        <header data-testid="page-search">
          <Header />
        </header>

        <main>
          {
            isLoading ? (
              <Loading />
            ) : (
              <>
                <form data-testid="page-login">
                  <input
                    data-testid="search-artist-input"
                    type="text"
                    value={ inputValue }
                    onChange={ ({ target }) => this.onInputChange(target.value) }
                  />

                  <button
                    data-testid="search-artist-button"
                    type="submit"
                    disabled={ !isButtonDisable }
                    onClick={ this.onSubmitForm }
                  >
                    Pesquisar
                  </button>
                </form>

                {
                  !!albums && (
                    !albums.length ? (
                      <h2>
                        Nenhum álbum foi encontrado
                      </h2>
                    ) : (
                      <>
                        <h2>
                          {`Resultado de álbuns de: ${artistName}`}
                        </h2>
                        {
                          albums.map((album) => (
                            <AlbumCard
                              key={ album.collectionId }
                              artistName={ album.artistName }
                              collectionId={ album.collectionId }
                              collectionName={ album.collectionName }
                              artworkUrl100={ album.artworkUrl100 }
                            />
                          ))
                        }
                      </>
                    )
                  )
                }
              </>

            )
          }
        </main>
      </>
    );
  }
}
