import React from 'react';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import playImg from './img/play-img.png';
import './Video.css';

export default class VideoComponent extends React.Component {
  state = {
    style: {
      visibility: 'hidden'
    }
  }

  hideVideo() {
    this.setState({
      style: {
        visibility: 'hidden'
      }
    });
  }

  showVideo(event) {
    event.preventDefault();

    this.setState({
      style: {
        visibility: 'visible'
      }
    });
  }

  
  render() {
    const playerOptions = {
      height: 532,
      width: '70%',
      playerVars: {
        autoplay: 1,
        controls: 0,
      }
    }

    return (
      <div id="videoComponent">
        <a onClick={this.showVideo.bind(this)} href="https://www.youtube.com/embed/VjzXR3K89z8">
          <img className="dummyIframe" src={playImg} alt="Play button"/>
        </a>

        <div className="iframe" style={this.state.style}>
          <FontAwesomeIcon icon={faTimesCircle} onClick={this.hideVideo.bind(this)} style={{cursor: 'pointer'}}/>
          {
            this.state.style.visibility === 'visible' ? 
            <YouTube videoId="VjzXR3K89z8" opts={playerOptions}/>
            : null
          }
        </div>
      </div>
    );
  }
}