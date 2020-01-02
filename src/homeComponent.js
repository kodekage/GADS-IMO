import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import VideoComponent from './videoComponent';
import LcaCardComponent from './lcaCardComponent';
import LearnersCardComponent from './learnersCardComponent';
import HeadersComponent from './headerComponent';
import sr from './ScrollReveal';
import './App.css';

class HomeComponent extends React.Component {
  componentDidMount(){
    sr.reveal(this.refs.box1, {delay: 2500});
    sr.reveal(this.refs.box2, {delay: 2500});
    sr.reveal(this.refs.text1, {delay: 500});
    sr.reveal(this.refs.text2, {delay: 1000});
    sr.reveal(this.refs.text3, {delay: 1500});
    sr.reveal(this.refs.text4, {delay: 2000});
  };
  
  render() {
    return (
      <div>
        <div className="App">
          <HeadersComponent/>
          <div className="container app-content">
            <h1><span ref="text1">Google</span> <span ref="text2">Africa</span><br/>
            <span ref="text3"> Developer</span> <span ref="text4">Scholarship</span></h1>
            <h2 ref="box1">Andela Learning Community IMO</h2>
            <a href="#videoComponent">
              <button><FontAwesomeIcon icon={faVideo} size="lg"/> Highlight</button>
            </a>
          </div>
        </div>
        <VideoComponent/>
        <div className="body">
          <div className="container">
            <LcaCardComponent/>
            <LearnersCardComponent/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
