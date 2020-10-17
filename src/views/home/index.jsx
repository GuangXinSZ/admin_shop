import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCookie } from '../../utils/cookies';

class Home extends Component {
  render () {
    return (
      getCookie("mspa_user") === undefined ? <Redirect to="/app" /> :  <Redirect to="/login" />
    )
  }
}

export default Home;