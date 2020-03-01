import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './style.scss';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <header className="cc-navbar">
      <Link to="/" className="cc-navbar--logo">
        <img alt="Logo" src={logo} className="cc-navbar--logo_img" />
      </Link>
      <div className="cc-navbar--links">
        <NavLink to="/login" className="cc-navbar--link">
          Login
        </NavLink>
        <NavLink to="/register" className="cc-navbar--link">
          Sign Up
        </NavLink>
      </div>
    </header>
  );
};

export default NavBar;
