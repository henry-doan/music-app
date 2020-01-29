import React, { Component } from 'react';
import axios from 'axios';
import SearchTracks from './components/search/SearchTracks'
import SearchResults from './components/search/SearchResults';

class Home extends Component {
  state = { results: [] }

  spotifyLogin = () => {
    axios.get(`/api/auth/spotify/callback`)
      .then(res => {
        window.location = res.data
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return(
      <>
        <button onClick={() => this.spotifyLogin()}>
          Log in to Spotify
        </button>
        <SearchTracks />
        <SearchResults />
      </>
    )
  }
}

export default Home