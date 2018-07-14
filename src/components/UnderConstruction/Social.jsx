import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class SocialLinks extends Component {
  render () {
    return (
      <ButtonGroup>
        <button type="button" class="btn btn-primary btn-lg btn-block">
        Block level button
        </button>
        <button type="button" class="btn btn-primary btn-lg btn-block">
        Block level button
        </button>
        <button type="button" class="btn btn-primary btn-lg btn-block">
        Block level button
        </button>
      </ButtonGroup>
    )
  }
};

export default SocialLinks;
