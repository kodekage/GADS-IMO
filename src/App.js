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
    // sr.reveal(this.refs.box2, {delay: 2500});
    sr.reveal(this.refs.text1, {delay: 500});
    sr.reveal(this.refs.text2, {delay: 1000});
    sr.reveal(this.refs.text3, {delay: 1500});
    sr.reveal(this.refs.text4, {delay: 2000});
  };
  // const style = {
    // display: 'block',
    // width: '500px',
    // height: '350px',
    // margin: '5em auto 0',
    // border: '2px solid red'
  // }
  render() {
    return (
      <div>
        <div className="App">
          {/* <HeadersComponent/> */}
          <div className="container app-content">
            <h1><span ref="text1">Google</span> <span ref="text2">Africa</span>
            <span ref="text3"> Developer</span> <span ref="text4">Scholarship</span></h1>
            <h2 ref="box1">ALC : Imo State</h2>
            {/* <img className="mx-auto d-block" style={style} src={gads} alt="alc_logo"></img> */}
            <Button ref="box2" link_to="meetup highlight" bg_color="#3359DF" font_color="#ffffff"/>
          </div>
        </div>
      
        {/* <div className="container-fluid"> */}
          <VideoComponent/>
        {/* </div> */}
      
        <div className="body">
          <div className="container">
            <LCAComponent/>
            <LearnersComponent/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
