import React from 'react';
import Partners from './Partners';
import HeroEl from '/public/assets/elements/hero.svg';
import Button from './Button';
import Header from './Header';

const Hero = () => (
  <section>
    <div className="hero-section inverted-colors">
      <Header/>
      <div className="hero-section-inner">
        <div className="container ">
          <div className="row">
            <div className="col-md-5 text-el">
              <h1 className="mb-md-4 mb-0 center-sm">SocialFi for<br/>the Metaverse</h1>
              <p className="d-none d-md-block">
                <strong>Sway Social</strong> is the first social protocol for Metacreators that uses NFTs to translate
                social capital into an asset class. This allows anyone to monetize their Metaverse on their terms.
              </p>
              <Button
                url="https://creatorpools.live"
                className="mt-5 d-none d-md-block">
                Explore{' '}<strong>Creator Pools</strong><br/>
              </Button>
            </div>
            <div className="col-md-7 hero-el">
              <HeroEl/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Partners/>
  </section>
);

export default Hero;
