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
            <div className="col-md-5">
              <h1 className="mb-4">Monetize<br/>the Metaverse</h1>
              <p>
                <strong>Sway Social</strong> is the first social media protocol for Metacreators that uses NFTs to translate
                social capital into an asset class.
                This allows anyone to monetize their Metaverse on their terms.
              </p>
              <Button
                url="#"
                className="mt-5">
                Explore{' '}<strong>Creator Pools</strong>
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
