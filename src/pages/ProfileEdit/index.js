import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import { getUser, updateUser } from '../../services/userAPI';

import * as S from './styles';

export default class ProfileEdit extends Component {
  state = {
    userName: '',
    userEmail: '',
    userImage: '',
    userDescription: '',
    isLoading: false,
    isSaveButtonDisabled: true,
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

  handleInputsValidation = () => {
    const {
      userName,
      userEmail,
      userDescription,
    } = this.state;

    if (userName.length
      && userEmail.length
      && userDescription.length
      && validator.isEmail(userEmail)
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  handleInputChange = (target) => {
    const { name, value } = target;

    this.setState((previousState) => ({
      ...previousState,
      [name]: value,
    }), this.handleInputsValidation);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { history } = this.props;
    const {
      userName,
      userEmail,
      userImage,
      userDescription,
    } = this.state;

    const userData = {
      name: userName,
      email: userEmail,
      image: userImage,
      description: userDescription,
    };

    updateUser(userData).then(() => {
      this.setState({ isLoading: false });
      history.push('/profile');
    });
  };

  render() {
    const {
      isLoading,
      userName,
      userEmail,
      userImage,
      userDescription,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <S.Container data-testid="page-profile-edit">
        <Header />
        {
          isLoading ? (
            <Loading />
          ) : (
            <S.Form>
              <img
                src={ userImage }
                alt={ userName }
                data-testid="edit-input-image"
              />
              <S.Label htmlFor="input-edit-name">
                Nome
                <input
                  data-testid="edit-input-name"
                  id="input-edit-name"
                  type="text"
                  name="userName"
                  value={ userName }
                  onChange={ ({ target }) => this.handleInputChange(target) }
                />
              </S.Label>
              <S.Label htmlFor="input-edit-name">
                Email
                <input
                  data-testid="edit-input-email"
                  id="input-edit-name"
                  type="text"
                  name="userEmail"
                  value={ userEmail }
                  onChange={ ({ target }) => this.handleInputChange(target) }
                />
              </S.Label>
              <S.Label htmlFor="input-edit-description">
                Descrição
                <textarea
                  data-testid="edit-input-description"
                  id="input-edit-name"
                  name="userDescription"
                  value={ userDescription }
                  onChange={ ({ target }) => this.handleInputChange(target) }
                />
              </S.Label>
              <S.Button
                type="submit"
                data-testid="edit-button-save"
                onClick={ (event) => this.handleSubmit(event) }
                disabled={ isSaveButtonDisabled }
              >
                Salvar
              </S.Button>
            </S.Form>
          )
        }
      </S.Container>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
