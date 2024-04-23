import React from 'react';
import styled from 'styled-components';
import LeatherImageGrid from '../LeatherImageGrid/LeatherImageGrid';

function Leathercraft() {
  return (
    <MainWrapper>
      <p>This is my leather stuff</p>
      <LeatherImageGrid />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  padding-left: var(--size-3);
  padding-right: var(--size-3);
  padding-bottom: var(--size-3);
  max-width: var(--max-content-width);
`;

export default Leathercraft;
