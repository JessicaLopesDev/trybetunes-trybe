import React, { Component } from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MusicCard from '../../components/MusicCard';

import { getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';

import * as S from './styles';

export default class Favorites extends Component {
  state = {
    isLoading: false,
    favoriteSongs: [],
  };

  componentDidMount() {
    this.handleGetFavoriteSongs();
  }

  handleGetFavoriteSongs = () => {
    this.setState({ isLoading: true });

    getFavoriteSongs().then((songs) => {
      this.setState({
        isLoading: false,
        favoriteSongs: songs,
      });
    });
  };

  handleRemoveFavoriteSong = (music) => {
    this.setState({
      isLoading: true,
    });

    removeSong(music).then(() => {
      this.handleGetFavoriteSongs();
    });
  };

  render() {
    const { isLoading, favoriteSongs } = this.state;

    return (
      <S.Container data-testid="page-favorites">
        <Header />
        {
          isLoading ? (
            <Loading />
          ) : (
            <S.FavoriteContainer>
              {
                favoriteSongs.map((song) => (
                  <MusicCard
                    key={ `${song.trackName}${song.trackId}` }
                    musicName={ song.trackName }
                    url={ song.previewUrl }
                    musicId={ JSON.stringify(song.trackId) }
                    isChecked
                    isFavorite={ () => this.handleRemoveFavoriteSong(song) }
                  />
                ))
              }
            </S.FavoriteContainer>
          )
        }
      </S.Container>
    );
  }
}
