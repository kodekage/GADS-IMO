import React from 'react';
import './Video.css';

function VideoComponent() {
  return (
    <div id="videoComponent">
        {/* <h1>Meetup Highlight</h1> */}
        <iframe className="iframe" height="600" src="https://www.youtube.com/embed/VjzXR3K89z8"
        frameborder="5" allow="accelerometer; autoplay;
        encrypted-media; gyroscope; picture-in-picture" rel="0"></iframe>
   </div>
  )
}

export default VideoComponent;