import React, { Component } from 'react';
// import { Jumbotron } from 'react-bootstrap';

import MessageBody from './MessageBody';
import TitleMessage from './Title';

class Banner extends Component {
  render(){
    return (
      <div class='banner-element'>
        <TitleMessage />
        <MessageBody />
      </div>
    )
  }
};

export default Banner;
