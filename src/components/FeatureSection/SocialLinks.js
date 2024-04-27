import React from 'react';
import { Twitter, GitHub, Instagram, Linkedin } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components';

function SocialLinks() {
  return (
    <UlWrapper>
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
    </UlWrapper>
  );
}

const UlWrapper = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: var(--size-4);

  svg {
    display: block;
    stroke: var(--dark-text-color);
  }

  a {
    position: relative;
    /* Adding a pseduoelement to increase mobile tap target */
    &::after {
      --click-target-minimum: 44px;
      --inset-by: min(
        0px,
        calc((100% - var(--click-target-minimum)) / 2)
      );

      content: '';
      position: absolute;
      top: var(--inset-by);
      left: var(--inset-by);
      right: var(--inset-by);
      bottom: var(--inset-by);
    }

    svg {
      display: block;
      stroke: var(--dark-text-color);
      /* Exit Animation */
      transition: all 300ms var(--ease-in-out-1);
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        svg {
          /* Enter Animation */
          transition: all 200ms var(--ease-in-out-1);
          stroke: var(--highlight-dark-color);
        }
      }
    }

    @media (min-width: 60rem) {
      &::after {
        display: none;
      }
    }
  }
`;

export default SocialLinks;
