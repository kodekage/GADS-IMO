import React from 'react';
import YouTube from 'react-youtube';
import SmoothScroll from 'smooth-scroll';
import sr from './ScrollReveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import gads_thumbnail from './img/gads_thumbnail.png';
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

  componentDidMount(){
    sr.reveal(this.refs.box1, { easing: 'cubic-bezier(0.5, 0, 0, 1)' });

    const speed =new SmoothScroll('a[href*="#"]', {
      speed: 1200,
      speedAsDuration: true
    });
  };

  
  render() {
    const playerOptions = {
      height: 532,
      width: '70%',
      playerVars: {
        autoplay: 1,
        controls: 0,
      }
    }

    let youtube = null;

    if (this.state.style.visibility === 'visible') {
      youtube = (
        <YouTube videoId="VjzXR3K89z8" opts={playerOptions}/>
      )
    }

    return (
      <div  ref="box1">
        <a onClick={this.showVideo.bind(this)} href="https://www.youtube.com/embed/VjzXR3K89z8">
          <img id="videoComponent" className="dummyIframe" src={gads_thumbnail} alt="Play button"/>
        </a>

        <div className="iframe" style={this.state.style}>
          <FontAwesomeIcon icon={faTimesCircle} onClick={this.hideVideo.bind(this)} style={{cursor: 'pointer'}}/>
          { youtube }
        </div>
      </div>
    );
  }
}