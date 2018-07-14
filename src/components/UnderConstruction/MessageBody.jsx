import React, { Component } from 'react';

import SocialLinks from './Social';

class MessageBody extends Component {
  render () {
    return (
      <div>
        <div id="message-body" class='message-body-comp'>
          <h3>In the interim, you can find me by clicking any of my other media linkes below.
          </h3>
        </div>
        <SocialLinks />
        <footer class='footer-message'>
          <h4>Thanks for your interest.<br />
          Check back soon!
          </h4>
        </footer>
      </div>
    )
  }
}

export default MessageBody;
