import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <header data-testid="header-component">
        <h2 data-testid="header-user-name">{ name }</h2>
        { name }
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
