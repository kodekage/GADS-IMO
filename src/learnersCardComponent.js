import React from 'react';
// import { Route } from 'react-router-dom';
import sr from './ScrollReveal';
import Button from './button';
import alc from './img/imo-scholars.jpg';

export default class LearnersComponent extends React.Component {
  componentDidMount(){
    sr.reveal(this.refs.box1, { easing: 'cubic-bezier(0.5, 0, 0, 1)' });
  };
  
  render() {
    const img = {
      background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${alc})`,
      backgroundPostion: 'center',
      backgroundSize: 'cover',
    }
  
    return (
      <div className="row learners-component" ref='box1'>
        <div className="col-lg-4 order-lg-1 align-self-center learners-component-description">
          <h2>Scholars</h2>
          <p>
            GADS scholars in Imo state are passionate individuals that seek
            to grow techinically.
          </p>
  
          <Button width="60%" link="/scholars" link_to="view scholars" bg_color="#FFAF30" font_color="#111111"/>
        </div>
  
        <div className="col-lg-8 order-lg-2 component-bg" style={img}>
  
        </div>
      </div>
    );
  }
};