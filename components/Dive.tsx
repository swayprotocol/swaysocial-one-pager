import React from 'react';
import Button from './Button';

const DiveIn = () => (
  <section className="dive-section page-section inverted-colors element-left element-right">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12 col-xl-10 mx-md-auto">
          <h2 className="text-center">Dive In The<br/>Creator Pools</h2>
          <div className="row dive-section-inner">
            <div className="col-md-6 dive-section-half">
              <p>
                <strong>Crypto-powered Creator Economy</strong><br/>
                Think of Sway Creator Pools as liquidity pools. They both operate on a simple principle of a majority
                locking in value in the form of a native cryptocurrency in return for future, and to some extent,
                predictable, rewards.
                Value is generated through different mechanisms. The most sustainable cases are based on
                borrowing/lending or fees collected by the AMMs. With Clout.art’s creator pools, value generation is
                tied directly to the successful sale of an NFT.
              </p>
            </div>
            <div className="col-md-6 dive-section-half">
              <p>
                <strong>The Sooner, the Better Rewards</strong><br/>
                To date, creators have minted more than 3500 NFTs, and more than 10,000 users have interacted with the
                platform. This first-generation staking program is designed to work during this build-up period, thereby
                offering a first real taste of the new creator economy while we drive platform participation towards
                critical mass.
                Start staking with any Instagram or TikTok username that you believe will join the platform in the
                future. The sooner you start, the better the rewards.
              </p>
            </div>
          </div>
          <Button
            url="https://github.com/swayprotocol"
            target="_blank"
            className="justify-content-center mt-5">
            Contribute to{' '}<strong>SWAY</strong>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default DiveIn;
