import React, { Component } from 'react';
import { getUser } from '../../services/userAPI';
import Loading from '../Loading';

export default class Header extends Component {
  state = {
    userName: '',
    isLoading: false,
  };

  componentDidMount() {
    this.handleGetUser();
  }

  handleGetUser = async () => {
    this.setState({ isLoading: true });

    const user = await getUser();
    this.setState({
      userName: user.name,
      isLoading: false,
    });
  };

  render() {
    const { userName, isLoading } = this.state;

    return (
      <header data-testid="header-component">
        {
          isLoading ? (
            <Loading />
          ) : (
            <h2 data-testid="header-user-name">
              { userName }
            </h2>
          )
        }
      </header>
    );
  }
}
