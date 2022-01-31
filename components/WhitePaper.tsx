import React from 'react';
import Button from './Button';

const WhitePaper = () => (
  <section className="whitepaper-section">
    <p className="inverted-colors d-block d-md-none">
      Sway Social is the first NFT social protocol for Web3—this Plug & Play, creator-owned, and decentralized tech uses NFTs to translate social capital into an asset class, so the Metacreators can monetize their Metaverse on their terms. 
    </p>
    <Button
      url="https://github.com/swayprotocol"
      target="_blank"
      className="justify-content-center mt-5">
      White{' '}<strong>Paper</strong>
    </Button>
  </section>
);

export default WhitePaper;
