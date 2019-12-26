import React from 'react';
import VideoComponent from './videoComponent';
import LCAComponent from './lcaComponent';
import LearnersComponent from './learnersComponent';
import HeadersComponent from './headerComponent';
import Button from './button';
import sr from './ScrollReveal';
import './App.css';

class App extends React.Component {
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
            <h2 ref="box1">Andela Learning Community <span>IMO</span></h2>
            <Button width="38%" link_to="meetup highlight" bg_color="#FFAF30" font_color="#111111"/>
          </div>
        </div>

          <VideoComponent/>

          <div className="container">
            <LCAComponent/>
            <LearnersComponent/>
          </div>
      </div>
    );
  }
}

export default App;
