import React from 'react';
import Logo from '/public/assets/logo.svg';
import Twitter from '/public/icons/twitter.svg';
import Telegram from '/public/icons/telegram.svg';

const Header = () => (
  <header className="header">
    <div className="container">
      <a href="/">
        <Logo/>
      </a>
      <nav className="header-nav d-none d-md-inline-flex">
        {/*<a href="#" target="_blank" className="header-nav-item">Explore{' '}<strong>Creator Pools</strong></a>*/}
        <a href="https://twitter.com/swayprotocol" target="_blank" className="header-nav-icon mx-3" title="Connect on Twitter">
          <Twitter fill="#fff" height="32" width="32"/>
        </a>
        <a href="https://t.me/cloutdotart" target="_blank" className="header-nav-icon mx-3" title="Connect on Telegram">
          <Telegram fill="#fff" height="32" width="32"/>
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
