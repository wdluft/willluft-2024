import React from 'react';
import styled from 'styled-components';
import { LEATHER_PHOTOS } from '../../data';

function LeatherImageGrid() {
  return (
    <GridWrapper>
      {LEATHER_PHOTOS.map((photo) => {
        return (
          <img
            key={`leather-photo-${photo.id}`}
            src={photo.imageSource}
            alt={photo.alt}
          />
        );
      })}
    </GridWrapper>
  );
}

const GridWrapper = styled.section`
  padding-top: var(--size-5);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--size-3);

  img {
    border: var(--size-2) var(--primary-color) solid;
    box-shadow: var(--inner-shadow-4);
    transition: transform 250ms var(--ease-1);

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transition: transform 150ms var(--ease-1);
        transform: scale(1.25);
      }
    }
  }
`;

export default LeatherImageGrid;
