import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = { results: [] }

  componentDidMount() {
    this.search('wake')
  }

  search = (query) => {
    axios.get(`/api/v1/tracks/search?q=${query}`)
      .then(res => {
        this.setState({ results: [...res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  spotifyLogin = () => {
    axios.get(`/api/auth/spotify/callback`)
      .then(res => {
        window.location = res.data
        // this.props.history.push(res.data)
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
        { this.state.results.map( r => 
          <>
            <h1>{r.name}</h1>
            <h1>{r.artist}</h1>
            <img src={r.image} />
          </>  
        )}
      </>
    )
  }
}

export default Home