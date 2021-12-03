import React from 'react';
import Button from './Button';

const StartStaking = () => (
  <section className="start-staking-section page-section element-left element-right">
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h2 className="text-center">Start Staking<br/>With Your Favorite Creators</h2>
          <Button
            url="#"
            className="justify-content-center">
            Explore{' '}<strong>Creator Pools</strong>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default StartStaking;
