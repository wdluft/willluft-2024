import React from 'react';
import { Link } from 'react-router-dom';
import Headshot from '../../../assets/headshot.png';
import styled from 'styled-components';

function AboutMe() {
  return (
    <MainWrapper>
      <ImageWrapper>
        <img
          src={Headshot}
          alt='Headshot of Will Luft, a bearded man with a blurred background of a bookshelf'
          className='headshot'
        />
      </ImageWrapper>
      <h1>About Will</h1>
      <p>
        I work for{' '}
        <a href='https://www.donorschoose.org/'>DonorsChoose</a> on
        the Information and Business Technology team, primarily making
        sure our procure-to-pay processes all run smoothly.
      </p>
      <p>
        In 2021, I needed to get a gift for my wife for our
        anniversary. I made her a leather bag from a kit, enjoying the
        process so much that I dove head first into{' '}
        <Link to='/leather'>leathercraft</Link>. I love working with
        leather, where I make belts, card holders, key chains, valet
        trays, and more.
      </p>
      <p>
        I enjoy playing and watching sports - getting out and playing
        soccer or volleyball at least once a week. You can also often
        find me cheering for my favorite teams: Chelsea FC, the Green
        Bay Packers, and the New York Islanders.
      </p>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  padding-left: var(--padding-left);
  padding-right: var(--padding-left);
  padding-bottom: var(--size-3);
  max-width: var(--max-content-width);

  img {
    max-width: 250px;
    padding-bottom: var(--size-3);
  }
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
`;

export default AboutMe;
