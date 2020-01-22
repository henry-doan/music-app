import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';

class Success extends Component {

  componentDidMount() {
    const data = {
      grant_type: "authorization_code",
      code: new URLSearchParams(window.location.search).get('code'),
      redirect_uri: 'http://localhost:3000/auth/spotify/callback',
      client_id:  '',
      client_secret: ''
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    axios.post('https://accounts.spotify.com/api/token', qs.stringify(data), config)
      .then( res => {
        localStorage.setItem('access_token', res.data.access_token)
        localStorage.setItem('token_type', res.data.token_type)
        localStorage.setItem('refresh_token', res.data.refresh_token)
        localStorage.setItem('scope', res.data.scope)
        localStorage.setItem('expires_in', res.data.expires_in)

        axios.get('/api/v1/tracks/search?q=ads')
      })
      .catch( err => {
        console.log(err)
      })
    
  }

  render() {
    return(
      <>
        You are logged in. 
      </>
    )
  }
}

export default Success;