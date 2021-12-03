import React from 'react';
import Script from 'next/script';

const Video = () => (
  <section className="video-section page-section element-left element-right">
    <div className="container">
      <div className="row">
        <h2 className="text-center mb-4">All That Sway</h2>
        <div className="col-md-8 mx-md-auto my-5">
          <div className="video-el">
            <iframe src="https://player.vimeo.com/video/195304061?h=f44b309036&title=0&byline=0&portrait=0"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen/>
          </div>
          <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload"/>
        </div>
      </div>
    </div>
  </section>
);

export default Video;

