import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
// import FontAwesome from 'react-fontawesome';
import styled from "styled-components";

import Button from '../Button';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const NavigationUser = (props, { authUser }) =>
  <nav>
    {authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </nav>

const NavigationAuth = () =>
  <ul className="header-login header-logged">
    <li><Link to={routes.HOME}>My List</Link></li>
    <li><Link to={routes.ACCOUNT}>My Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <NavUnlogged className="header-unlogged">
    <li><Link className="btn btn-sm" to={routes.SIGN_IN}><Button>Sign In</Button></Link></li>
    <li><Link className="btn btn-sm" to={routes.SIGN_UP}><Button>Register</Button></Link></li>
  </NavUnlogged>

NavigationUser.contextTypes = {
  authUser: PropTypes.object,
};

export default NavigationUser;

// Styles
const NavUnlogged = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  & li {
    margin-left: 15px;
  }
`;
