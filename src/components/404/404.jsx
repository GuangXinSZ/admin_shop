import React, { Component } from 'react';
import ImgUrl from '../../style/images/404.png'

export default class noMunt extends Component {
  render () {
    return (
      <img src={ImgUrl} alt="404 Not Found" style={{width:'100%', height: '100%', overflow:'hidden'}}/>
    )
  }
}