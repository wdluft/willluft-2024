import React from 'react';
import { Twitter, GitHub, Instagram, Linkedin } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';
import styles from './SocialLinks.module.css';

function SocialLinks() {
  return (
    <ul>
      <li>
        <a href='https://twitter.com/IAmWillDL'>
          <Twitter />
          <VisuallyHidden>Twitter</VisuallyHidden>
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/willmadeleather'>
          <Instagram />
          <VisuallyHidden>Instagram</VisuallyHidden>
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/william-luft-42ab9258/'>
          <Linkedin />
          <VisuallyHidden>LinkedIn</VisuallyHidden>
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
