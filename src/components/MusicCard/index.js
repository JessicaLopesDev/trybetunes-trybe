import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class MusicCard extends Component {
  render() {
    const {
      musicName,
    } = this.props;

    return (
      <div>
        <h3>{musicName}</h3>
        <p>artista</p>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
};
