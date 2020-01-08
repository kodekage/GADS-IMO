import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import VideoComponent from './videoComponent';
import LcaCardComponent from './lcaCardComponent';
import LearnersCardComponent from './learnersCardComponent';
import HeadersComponent from './headerComponent';
import sr from './ScrollReveal';
import pluralsight from './img/pluralsite.png';
import gwg from './img/growwithggogle.png';
import andela from './img/andela.png';
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
        
        <div className="row no-gutters justify-content-center metrics">
          <div className="col-lg-2">
            <h2>60+</h2>
            <p>Scholars</p>
          </div>

          <div className="col-lg-2">
            <h2>5</h2>
            <p>LCA's</p>
          </div>

          <div className="col-lg-2">
            <h2>1</h2>
            <p>Goal</p>
          </div>
        </div>

        <VideoComponent/>

        <div className="container text-center sponsors">
          <h2>Sponsors</h2>
          <div className="row no-gutters align-items-center justify-content-center">
            <img className="col-lg-3" src={gwg} alt="google logo"/>
            <img className="col-lg-3" src={andela} alt="google logo"/>
            <img className="col-lg-3" src={pluralsight} alt="google logo"/>
          </div>
        </div>

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
