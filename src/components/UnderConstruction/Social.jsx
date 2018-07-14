import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class SocialLinks extends Component {
  render () {
    return (
      <div class="col-md-12">
        <ul class="social-network social-circle">
            <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
        </ul>
			</div>
    )
  }
};

export default SocialLinks;
