import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import playImg from './img/play-img.png';
import './Video.css';

export default class VideoComponent extends React.Component {
  state = {
    style: {
      display: 'none'
    }
  }

  hideVideo(event) {
    this.setState({
      style: {
        display: 'none'
      }
    })
  }

  showVideo(event) {
    event.preventDefault();

    this.setState({
      style: {
        display: 'block'
      }
    })
  }
  
  render() {
    return (
      <div id="videoComponent">
        <a onClick={this.showVideo.bind(this)} href="https://www.youtube.com/embed/VjzXR3K89z8">
          <img className="dummyIframe" src={playImg} alt="Play Image"/>
        </a>

        <div className="iframe" style={this.state.style}>
          <FontAwesomeIcon icon={faHamburger} onClick={this.hideVideo.bind(this)} style={{cursor: 'pointer'}}/>
          <iframe width="1351" height="502" src="https://www.youtube.com/embed/VjzXR3K89z8"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>

          </iframe>
        </div>
      </div>
    )
  }
}