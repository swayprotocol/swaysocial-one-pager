import React from 'react';
import Logo from '/public/assets/logo.svg';
import Discord from '/public/icons/discord.svg';
import Twitter from '/public/icons/twitter.svg';
import Github from '/public/icons/github.svg';
import Telegram from '/public/icons/telegram.svg';

const Footer = () => (
  <footer className="footer-section ">
    <div className="container">
      <div className="row">
        <div className="col-md-3 mb-3 mb-md-0">
          <Logo width="100%"/>
        </div>
        {/*<div className="col-md-3">*/}
        {/*  <nav className="footer-nav">*/}
        {/*    <ul>*/}
        {/*      <li>*/}
        {/*        <a href="#" target="_blank" className="footer-nav-link">SWAY</a>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <a href="#" target="_blank" className="footer-nav-link">Creator Pools</a>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <a href="#" target="_blank" className="footer-nav-link">$SWAY</a>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </nav>*/}
        {/*</div>*/}
        {/*<div className="col-md-3">*/}
        {/*  <nav className="footer-nav">*/}
        {/*    <ul>*/}
        {/*      <li>*/}
        {/*        <a href="#" target="_blank" className="footer-nav-link">DEV</a>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <a href="#" target="_blank" className="footer-nav-link">White Paper</a>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <a href="#" target="_blank" className="footer-nav-link">Dev Docs</a>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </nav>*/}
        {/*</div>*/}
        <div className="col-md-3 connect-column">
          <h4 className="inverted-colors mb-4">Connect</h4>
          <div className="footer-connect">
            <a href="https://twitter.com/swayprotocol" className="footer-connect-item" target="_blank">
              <Twitter fill="#131D42" height="16" width="16"/>
            </a>
            <a href="https://t.me/cloutdotart" className="footer-connect-item" target="_blank">
              <Telegram fill="#131D42" height="16" width="16"/>
            </a>
            {/*<a href="#" className="footer-connect-item" target="_blank">*/}
            {/*  <Discord fill="#131D42" height="16" width="16"/>*/}
            {/*</a>*/}
            <a href="https://github.com/swayprotocol" className="footer-connect-item" target="_blank">
              <Github fill="#131D42" height="16" width="16"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
