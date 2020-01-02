import React from 'react';
// import { Route } from 'react-router-dom';
import Button from './button';
import alc from './img/imo-scholars.jpg';

export default function LearnersComponent() {
  const img = {
    background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${alc})`,
    backgroundPostion: 'center',
    backgroundSize: 'cover',
  }

  return (
    <div className="row learners-component">
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
};