import React from 'react';
import styled from 'styled-components';
import LeatherImageGrid from '../LeatherImageGrid/LeatherImageGrid';

function Leathercraft() {
  return (
    <MainWrapper>
      <h1>Leathercraft</h1>
      <p>
        In 2021, I picked up a kit to make my wife a leather bag as an
        anniversary gift. I caught the leathercrafting bug, and now I
        make different items out of leather. I primarily work with
        vegetable tanned leather made from cowhide.
      </p>
      <p>
        Below are some pictures of some of the things I've made for
        myself, friends, family, and as comissions. If you're
        interested in a custom piece, please send me a DM on{' '}
        <a href='https://www.instagram.com/willmadeleather/'>
          Instagram.
        </a>
      </p>

      <LeatherImageGrid />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  padding-left: var(--padding-left);
  padding-right: var(--padding-left);
  padding-bottom: var(--size-8);
  max-width: var(--max-content-width);
`;

export default Leathercraft;
