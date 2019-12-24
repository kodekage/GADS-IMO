import React from 'react';
import './Video.css';

function VideoComponent() {
  return (
    <div className="row justify-content-between" id="videoComponent">
      <div className="col-lg"> 
        <iframe className="iframe" height="550" src="https://www.youtube.com/embed/VjzXR3K89z8"
        frameborder="5" allow="accelerometer; autoplay;
        encrypted-media; gyroscope; picture-in-picture" rel="0"></iframe>
      </div>
      
     <div className="col-lg-4 video-discription align-self-center">
     <h2>Meetup Highlight</h2>
     <p>
       Every Community has a story, we are not excluded.
       ALCImo has a rather amazing story of growth, passion,
       collaboration and excellence.
     </p>
     </div>
   </div>
  )
}

export default VideoComponent;