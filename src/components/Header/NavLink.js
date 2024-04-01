import React from 'react';
import styled from 'styled-components';

// TO-DO: SET CURRENT-PAGE CLASS TO ACTIVE ROUTE
function NavLink({ url, isCurrentPage, children }) {
  return (
    <Link href={url} className={isCurrentPage ? `current-page` : ``}>
      {children}
    </Link>
  );
}

const Link = styled.a`
  color: var(--primary-color);
  font-weight: var(--font-weight-4);
  font-size: var(--font-size-2);
  text-decoration: none;
  transition: color 300ms var(--ease-in-out-1);

  &.current-page {
    text-decoration: underline;
    text-decoration-thickness: var(--size-1);
  }

  /* TO-DO: ADD TRANSITIONS/ANIMATIONS */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--highlight-color);
    }
  }
`;

export default NavLink;
