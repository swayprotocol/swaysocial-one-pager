import React from 'react';
import Discord from '/public/icons/discord.svg';
import Twitter from '/public/icons/twitter.svg';
import Github from '/public/icons/github.svg';
import Telegram from '/public/icons/telegram.svg';

const Connect = () => (
  <section className="connect-section page-section inverted-colors element-left element-right">
    <div className="container">
      <div className="row">
        <h2 className="text-center">Connect With<br/>The Sway Community</h2>
        <div className="col-md-8 col-lg-6 mx-auto inner-connect">
          <div className="row">
            <div className="col-4 text-center">
              <a href="https://twitter.com/swayprotocol"
                 target="_blank"
                 title="Connect on Twitter"
                 className="btn-social tw mt">
                <Twitter fill="#fff"/>
              </a>
            </div>
            <div className="col-4 text-center">
              <a href="https://t.me/cloutdotart" target="_blank" title="Connect on Telegram" className="btn-social tg">
                <Telegram fill="#fff"/>
              </a>
            </div>
            {/*<div className="col-3 text-center">*/}
            {/*  <a href="#" title="Connect on Discord" className="btn-social dc mt">*/}
            {/*    <Discord fill="#fff"/>*/}
            {/*  </a>*/}
            {/*</div>*/}
            <div className="col-4 text-center">
              <a href="https://github.com/swayprotocol"
                 target="_blank"
                 title="Connect on GitHub"
                 className="btn-social gh mt">
                <Github fill="#fff"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Connect;
