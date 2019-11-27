import React from 'react';

import logo from './logo.png';
import './Header.css';

export default () => (
  <nav className="menu">
    <img className="logo" alt="GoStackBook" src={logo} />
    <div className="profile">
      <a href="/">
        Meu perfil
        <span className="profile-icon">
          <span className="profile-icon-head" />
          <span className="profile-icon-body" />
        </span>
      </a>
    </div>
  </nav>
);
