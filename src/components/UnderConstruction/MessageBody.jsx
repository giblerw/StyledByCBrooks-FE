import React, { Component } from 'react';

import SocialLinks from './Social';

class MessageBody extends Component {
  render () {
    return (
      <div>
        <div id="message-body" class='message-body-comp'>
          <h2>To learn more, <em>click</em> any of the links <b>below</b>.</h2>
        </div>
        <SocialLinks />
        <footer class='footer-message'>
          <h3>Updates coming<b><em> soon...</em></b></h3>
        </footer>
      </div>
    )
  }
}

export default MessageBody;
