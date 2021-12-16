import React from 'react';

const Video = () => (
  <section className="video-section page-section element-left element-right">
    <div className="container">
      <div className="row">
        <h2 className="text-center">All That Sway</h2>
        <div className="col-lg-8 mx-md-auto">
          <div className="video-el">
            <iframe src="https://www.youtube-nocookie.com/embed/9wLEd8RIK_0?modestbranding=1&iv_load_policy=3&rel=0"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="SwaySocial video"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen/>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Video;

