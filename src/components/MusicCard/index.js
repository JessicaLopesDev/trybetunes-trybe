import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const {
      musicName,
      url,
      musicId,
      isChecked,
      isFavorite,
    } = this.props;

    return (
      <div>
        <span>{musicName}</span>

        <audio
          data-testid="audio-component"
          src={ url }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>

        <label htmlFor="favorite-check">
          Favorita
          <input
            data-testid={ `checkbox-music-${musicId}` }
            id="favorite-check"
            type="checkbox"
            checked={ isChecked }
            onChange={ isFavorite }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  musicId: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isFavorite: PropTypes.func.isRequired,
};
