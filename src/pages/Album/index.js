import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import MusicCard from '../../components/MusicCard';
import Loading from '../../components/Loading';

import getMusics from '../../services/musicsAPI';
import { addSong, getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';

import * as S from './styles';

export default class Album extends Component {
  state = {
    musics: [],
    isLoading: false,
    trackIds: [],
  };

  componentDidMount() {
    this.handleGetMusics();
    this.handleGetFavoriteSongs();
  }

  handleGetFavoriteSongs = () => {
    this.setState({ isLoading: true });

    getFavoriteSongs().then((songs) => {
      this.setState({
        isLoading: false,
        trackIds: songs.map((song) => song.trackId),
      });
    });
  };

  handleGetMusics = async () => {
    const { match } = this.props;

    const gettingMusics = await getMusics(match.params.id);
    this.setState({ musics: gettingMusics });
  };

  handleAddFavoriteSong = (music) => {
    this.setState((prevState) => ({
      ...prevState,
      isLoading: true,
      trackIds: [...prevState.trackIds, music.trackId],
    }));

    addSong(music).then(() => {
      this.setState({ isLoading: false });
    });
  };

  handleRemoveFavoriteSong = (music) => {
    const { trackIds } = this.state;
    const filteredIds = trackIds.filter((id) => id !== music.trackId);

    this.setState({
      trackIds: filteredIds,
      isLoading: true,
    });

    removeSong(music).then(() => {
      this.setState({ isLoading: false });
    });
  };

  handleFavoriteSong = (music, checked) => {
    if (checked) {
      this.handleAddFavoriteSong(music);
    } else {
      this.handleRemoveFavoriteSong(music);
    }
  };

  render() {
    const { musics, isLoading, trackIds } = this.state;

    return (
      <S.Container data-testid="page-album">
        <Header />
        {
          isLoading ? (
            <Loading />
          ) : (
            !!musics.length && (
              <S.AlbumContainer>
                <S.Title data-testid="artist-name">{ musics[0].artistName }</S.Title>
                <S.Text data-testid="album-name">{ musics[0].collectionName }</S.Text>
                {
                  musics.map((music, index) => {
                    if (index > 0) {
                      return (
                        <MusicCard
                          key={ `${music.trackName}${music.trackId}` }
                          musicName={ music.trackName }
                          url={ music.previewUrl }
                          musicId={ music.trackId }
                          isChecked={
                            trackIds.includes(music.trackId)
                          }
                          isFavorite={
                            ({ target }) => this.handleFavoriteSong(music, target.checked)
                          }
                        />
                      );
                    }
                    return null;
                  })
                }
              </S.AlbumContainer>
            )
          )
        }
      </S.Container>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
