import React, { Component } from 'react';

import SocialLinks from './Social';

class MessageBody extends Component {
  render () {
    return (
      <div>
        <div id="message-body" class='message-body-comp'>
          <h2>For now, to learn more click any of the links below.
          </h2>
        </div>
        <SocialLinks />
        <footer class='footer-message'>
          <h2>Check back soon for updates...<br />

          </h2>
        </footer>
      </div>
    )
  }
}

export default MessageBody;
