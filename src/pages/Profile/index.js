import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { getUser } from '../../services/userAPI';

export default class Profile extends Component {
  state = {
    userName: '',
    userEmail: '',
    userImage: '',
    userDescription: '',
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
      userEmail: user.email,
      userImage: user.image,
      userDescription: user.description,
      isLoading: false,
    });
  };

  render() {
    const {
      isLoading,
      userName,
      userEmail,
      userImage,
      userDescription,
    } = this.state;

    return (
      <>
        <header data-testid="page-profile">
          <Header />
        </header>
        {
          isLoading ? (
            <Loading />
          ) : (
            <main>
              <section>
                <img
                  src="url-to-image"
                  alt={ userImage }
                  data-testid="profile-image"
                />
                <Link
                  to="/profile/edit"
                >
                  Editar perfil
                </Link>
              </section>
              <section>
                <h3>Nome</h3>
                <p>{ userName }</p>
              </section>
              <section>
                <h3>Email</h3>
                <p>{ userEmail }</p>
              </section>
              <section>
                <h3>Descrição</h3>
                <p>{ userDescription }</p>
              </section>
            </main>
          )
        }
      </>
    );
  }
}
