import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Login from './Login';
import Search from './Search';
import Album from './Album';
import Favorites from './Favorites';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Login />
        <Search />
        <Album />
        <Favorites />
        <Profile />
        <ProfileEdit />
        <NotFound />
      </BrowserRouter>
    );
  }
}

export default App;
