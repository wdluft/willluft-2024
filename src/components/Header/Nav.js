import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

function Nav() {
  return (
    <NavBar>
      <NavLink url='#' isCurrentPage={true}>
        home
      </NavLink>
      <NavLink url='#' isCurrentPage={false}>
        about
      </NavLink>
      <NavLink url='#' isCurrentPage={false}>
        leather
      </NavLink>
      <NavLink url='#' isCurrentPage={false}>
        work
      </NavLink>
    </NavBar>
  );
}

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  gap: var(--size-5);
  padding: var(--size-3) var(--size-2);
`;

export default Nav;
