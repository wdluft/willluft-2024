import React from 'react';
import SocialLinks from './SocialLinks';
import styled from 'styled-components';

function FeatureSection() {
  return (
    <MainWrapper>
      <h1> Will Luft</h1>
      <SocialLinks />
      <section>
        <h3>
          Information & Business Technology | Leathercrafter | Cantor
          | Soccer & Volleyball Player | Dad | Long Islander | Chelsea
          FC & NY Islanders & Green Bay Packers Fan | Runner
        </h3>
      </section>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  max-width: var(--max-content-width);
  margin-left: auto;
  margin-right: auto;
  background-color: var(--primary-color);
  color: var(--dark-text-color);
  transform: rotate(-2deg);
  padding: var(--size-7);
  margin-top: var(--size-8);

  @media screen and (max-width: 768px) {
    transform: rotate(0deg);
  }

  h1 {
    font-size: var(--font-size-8);
    font-style: italic;
  }

  h3 {
    font-size: var(--font-size-4);
  }
`;

export default FeatureSection;
