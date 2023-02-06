import React, { Component } from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MusicCard from '../../components/MusicCard';

import { getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';

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
      <div data-testid="page-favorites">
        <Header />
        {
          isLoading ? (
            <Loading />
          ) : (
            favoriteSongs.map((song) => (
              <MusicCard
                key={ song.trackName }
                musicName={ song.trackName }
                url={ song.previewUrl }
                musicId={ song.trackId }
                isChecked
                isFavorite={ () => this.handleRemoveFavoriteSong(song) }
              />
            ))
          )
        }
      </div>
    );
  }
}
