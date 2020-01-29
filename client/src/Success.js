import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';

class Success extends Component {

  componentDidMount() {
    const data = {
      code: new URLSearchParams(window.location.search).get('code'),
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post('/api/user', qs.stringify(data), config)
      .then( res => {
        debugger
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