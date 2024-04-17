import React from 'react';
import styled from 'styled-components';
import { Outlet, Link, NavLink as RRNavLink } from 'react-router-dom';

function NavLink({ url, isCurrentPage, children }) {
  return (
    <StyledLink
      to={url}
      className={({ isActive, isPending }) =>
        isActive ? 'active' : isPending ? 'pending' : ''
      }
    >
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(RRNavLink)`
  color: var(--primary-color);
  font-weight: var(--font-weight-4);
  font-size: var(--font-size-2);
  text-decoration: none;
  transition: color 300ms var(--ease-in-out-1);

  &.active {
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
