import React from 'react';
import Button from './Button';
import Protocol1 from '/public/assets/elements/protocol1.svg';
import Protocol2 from '/public/assets/elements/protocol2.svg';

const SocialProtocol = () => (
  <section className="protocol-section page-section element-left-animated element-right-animated">
    <div className="container">
      <Protocol1 className="svg-el-left"/>
      <Protocol2 className="svg-el-right"/>
      <div className="row">
        <h2 className="text-center">The First NFT Social Protocol<br/>For Web3 And The Metaverse</h2>
        <div className="col-md-12 col-lg-8 col-xl-8 mx-auto">
          <div className="row">
            <div className="col-md-6 px-5 center-sm">
              <p>
                <span className="highlight">Ready to Plug, Play and Earn</span><br/>
                Behind every successful Metacreator, there is a gamechanging technology.
                With Sway, social capital is translated into an asset class. This Social Capital model enables a
                commercial relationship to exist between content creators and their underwriters. Simply create and
                earn.
              </p>
              <p>
                <strong>The SWAY token, represented as a simple monetisation of ‘Following’ or ‘Likes’ from the
                  traditional social media experience, is a social evolution in Web3.</strong>
              </p>
            </div>
            <div className="col-md-6 px-5 center-sm">
              <p>
                <span className="highlight">Shareconomy for the Metaverse</span><br/>
                In a traditional Web 2 social media platforms, the number of ‘Followers’ per content creator is directly
                correlated to their earning power, creating a feedback loop compounding the value. But this creators’
                clear economic benefit does not benefit all.
              </p>
              <p>
                <strong>Sway Social deals with this disparity by allowing followers to directly share content creators’
                  revenue generation in addition to providing social support.</strong>
              </p>
            </div>
          </div>
          {/*<Button*/}
          {/*  url="#"*/}
          {/*  className="justify-content-center mt-5">*/}
          {/*  White{' '}<strong>Paper</strong>*/}
          {/*</Button>*/}
        </div>
      </div>
    </div>
  </section>
);

export default SocialProtocol;

