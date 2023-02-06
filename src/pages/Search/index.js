import React, { Component } from 'react';

import AlbumCard from '../../components/AlbumCard';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import searchAlbumsAPI from '../../services/searchAlbumsAPI';

import * as S from './styles';

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
                <S.Form data-testid="page-login">
                  <S.Input
                    data-testid="search-artist-input"
                    type="text"
                    value={ inputValue }
                    onChange={ ({ target }) => this.onInputChange(target.value) }
                  />

                  <S.Button
                    data-testid="search-artist-button"
                    type="submit"
                    disabled={ !isButtonDisable }
                    onClick={ this.onSubmitForm }
                  >
                    Pesquisar
                  </S.Button>
                </S.Form>

                {
                  !!albums && (
                    !albums.length ? (
                      <S.Title>
                        Nenhum álbum foi encontrado
                      </S.Title>
                    ) : (
                      <>
                        <S.Title>
                          {`Resultado de álbuns de: ${artistName}`}
                        </S.Title>
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
