import React from 'react';
import Layout from '../components/Layout';
import Video from '../components/Video';
import StartStaking from '../components/StartStaking';
import SocialProtocol from '../components/SocialProtocol';
import Connect from '../components/Connect';
import Hero from '../components/Hero';
import Staking from '../components/Staking';
import DiveIn from '../components/Dive';
import Subscribe from '../components/Subscribe';

const IndexPage = () => (
  <Layout>
    <Hero/>
    {/*<Video/>*/}
    <SocialProtocol/>
    <Staking/>
    <DiveIn/>
    {/*<StartStaking/>*/}
    <Subscribe/>
    <Connect/>
  </Layout>
);

export default IndexPage;
