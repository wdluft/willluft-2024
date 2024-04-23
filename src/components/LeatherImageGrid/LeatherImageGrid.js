import React from 'react';
import styled from 'styled-components';
import { LEATHER_PHOTOS } from '../../leatherPhotos';

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--size-3);

  img {
    /* max-width: 200px; */
  }
`;

export default LeatherImageGrid;
