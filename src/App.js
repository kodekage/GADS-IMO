import React from 'react';
import VideoComponent from './videoComponent';
import LCAComponent from './lcaComponent';
import LearnersComponent from './learnersComponent';
import HeadersComponent from './headerComponent';
import Button from './button';
import './App.css';

function App() {
  // const style = {
    // display: 'block',
    // width: '500px',
    // height: '350px',
    // margin: '5em auto 0',
    // border: '2px solid red'
  // }
  return (
    <div>
      <div className="App">
        {/* <HeadersComponent/> */}
        <div className="container text-left app-content">
          <h1>Google Africa <br/>Developer Scholarship</h1>
          <h2>ALC : Imo State</h2>
          {/* <img className="mx-auto d-block" style={style} src={gads} alt="alc_logo"></img> */}
          <Button link_to="meetup highlight" bg_color="#3359DF"/>
        </div>
      </div>

      <div className="container-fluid">
        <VideoComponent/>
      </div>

      <div className="body">
        <div className="container">
          <LCAComponent/>
          <LearnersComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
