import React from 'react';
import Button from './Button';

const Staking = () => (
  <section className="staking-section page-section element-right inverted-colors">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h2 className="text-center">Staking Is The<br/>New Following</h2>
          <div className="px-md-5 mb-5">
            <p className="text-center">The Sway Social Protocol is powered by the native SWAY token, staked to replicate
              the following:</p>

            <p className="text-center staking-section-item item-green">Content creators establish individual pools for
              their NFTs.</p>

            <p className="text-center staking-section-item item-pink">Users stake SWAY tokens to the pools (content
              creators) they wish to support.</p>

            <p className="text-center staking-section-item item-blue">Staked SWAY tokens share in the revenue generated
              from their specific pools.</p>
          </div>
          <Button
            url="https://www.gate.io/trade/SWAY_USDT"
            target="_blank"
            className="justify-content-center btn-secondary">
            Buy{' '}<strong>$SWAY</strong>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Staking;
