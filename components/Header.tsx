import React from 'react';
import Logo from '/public/assets/logo.svg';

const Header = () => (
  <header className="header">
    <div className="container">
      <a href="/">
        <Logo/>
      </a>
      <nav className="header-nav d-none d-md-inline-flex">
        <a href="#" target="_blank" className="header-nav-item">Explore{' '}<strong>Creator Pools</strong></a>
      </nav>
    </div>
  </header>
);

export default Header;
