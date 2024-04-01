import React from 'react';
import styled from 'styled-components';

function NavLink({ url, children }) {
  return (
    <Link href={url} className='current-page'>
      {children}
    </Link>
  );
}

const Link = styled.a`
  color: var(--primary-color);
  font-weight: var(--font-weight-4);
  font-size: var(--font-size-2);
  text-decoration: none;

  &.current-page {
    text-decoration: underline;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--highlight-color);
    }
  }
`;

export default NavLink;
