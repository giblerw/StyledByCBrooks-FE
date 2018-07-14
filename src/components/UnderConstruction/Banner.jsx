import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import MessageBody from './MessageBody';
import TitleMessage from './Title';

class Banner extends Component {
  render(){
    return (
      <Jumbotron>
        <TitleMessage />
        <MessageBody />
      </Jumbotron>
    )
  }
};

export default Banner;
