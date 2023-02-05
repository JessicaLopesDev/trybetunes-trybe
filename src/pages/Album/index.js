import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import MusicCard from '../../components/MusicCard';

import getMusics from '../../services/musicsAPI';
import { addSong } from '../../services/favoriteSongsAPI';
import Loading from '../../components/Loading';

export default class Album extends Component {
  state = {
    musics: [],
    isLoadind: false,
    trackIds: [],
  };

  componentDidMount() {
    this.handleGetMusics();
  }

  handleGetMusics = async () => {
    const { match } = this.props;

    const gettingMusics = await getMusics(match.params.id);
    this.setState({ musics: gettingMusics });
  };

  handleFavoriteSong = (music) => {
    this.setState((prevState) => ({
      ...prevState,
      isLoadind: true,
      trackIds: [...prevState.trackIds, music.trackId],
    }));

    addSong(music).then(() => {
      this.setState({ isLoadind: false });
    });
  };

  render() {
    const { musics, isLoadind, trackIds } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        {
          isLoadind ? (
            <Loading />
          ) : (
            !!musics.length && (
              <>
                <h2 data-testid="artist-name">{ musics[0].artistName }</h2>
                <h4 data-testid="album-name">{ musics[0].collectionName }</h4>
                {
                  musics.map((music, index) => {
                    if (index > 0) {
                      return (
                        <MusicCard
                          key={ music.trackNumber }
                          musicName={ music.trackName }
                          url={ music.previewUrl }
                          musicId={ music.trackId }
                          isChecked={ trackIds.includes(music.trackId) }
                          isFavorite={ () => this.handleFavoriteSong(music) }
                        />
                      );
                    }
                    return null;
                  })
                }
              </>
            )
          )
        }
      </div>
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
