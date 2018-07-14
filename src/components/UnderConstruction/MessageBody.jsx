import React, { Component } from 'react';

import SocialLinks from './Social';

class MessageBody extends Component {
  render () {
    return (
      <div id="message-body" >
        <p>In the interim, you can find me by clicking any of my other media linkes below.</p>
          <br />
        <SocialLinks />
          <br />
        <p>Thanks for your interest.<br />
        Check back soon!
        </p>
      </div>
    )
  }
}

export default MessageBody;
