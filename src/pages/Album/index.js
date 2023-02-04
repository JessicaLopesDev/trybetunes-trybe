import React, { Component } from 'react';
import Header from '../../components/Header';
// import MusicCard from '../../components/MusicCard';

// import getMusics from '../../services/musicsAPI';

export default class Album extends Component {
  // state = {
  //   musics: [],
  // };

  componentDidMount() {
    const albumId = props.match;
    console.log(albumId);
    // this.handleGetMusics();
  }

  // handleGetMusics = () => {
  //   const albumId = props.match.params;
  //   console.log(albumId);
  //   // const gettingMusics = await getMusics(albumId);
  //   // this.setState({ musics: gettingMusics });
  // };

  render() {
    // const { musics } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        <h2 data-testid="artist-name"> </h2>
        {/* <MusicCard
          musicsList={ musics }
        /> */}
      </div>
    );
  }
}
