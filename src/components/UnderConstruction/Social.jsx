import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class SocialLinks extends Component {
  render () {
    return (
      <ButtonGroup>
        <button type="button" class="btn btn-primary btn-lg">
        <h4>Insta</h4>
        </button>
        <button type="button" class="btn btn-primary btn-lg">
        <h4>Book</h4>
        </button>
        <button type="button" class="btn btn-primary btn-lg">
        <h4>email</h4>
        </button>
      </ButtonGroup>
    )
  }
};

export default SocialLinks;
