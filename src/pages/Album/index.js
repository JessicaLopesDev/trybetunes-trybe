import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

// import MusicCard from '../../components/MusicCard';

import getMusics from '../../services/musicsAPI';
import MusicCard from '../../components/MusicCard';

export default class Album extends Component {
  state = {
    musics: [],
  };

  componentDidMount() {
    this.handleGetMusics();
  }

  handleGetMusics = async () => {
    const { match } = this.props;

    const gettingMusics = await getMusics(match.params.id);
    this.setState({ musics: gettingMusics });
  };

  render() {
    const { musics } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        {
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
                      />
                    );
                  }
                  return null;
                })
              }
            </>
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
