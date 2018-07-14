import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class SocialLinks extends Component {
  render () {
    return (
      <ButtonGroup bsSize="large">
        <Button href="#">Left</Button>
        <Button href="#">Middle</Button>
        <Button href="#">Right</Button>
      </ButtonGroup>
    )
  }
};

export default SocialLinks;
