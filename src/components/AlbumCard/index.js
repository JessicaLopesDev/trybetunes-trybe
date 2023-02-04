import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AlbumCard extends Component {
  render() {
    const {
      // artistId,
      artistName,
      collectionId,
      collectionName,
      // collectionPrice,
      artworkUrl100,
      // releaseDate,
      // trackCount,
    } = this.props;

    return (
      <Link
        data-testid={ `link-to-album-${collectionId}` }
        to={ `/album/${collectionId}` }
      >
        <div>
          <img src={ artworkUrl100 } alt={ collectionName } />
          <h3>{ collectionName }</h3>
          <span>{ artistName }</span>
        </div>
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  // artistId: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  collectionName: PropTypes.string.isRequired,
  // collectionPrice: PropTypes.number.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  // releaseDate: PropTypes.string.isRequired,
  // trackCount: PropTypes.number.isRequired,
};
