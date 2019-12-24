import React from 'react';
import Button from './button';
import alc from './img/lca.jpg';

export default function LCAComponent() {
  const img = {
    background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${alc})`,
    backgroundPostion: 'center',
    backgroundSize: 'cover',
    height: '500px'
  }

  return (
    <div className="row lca-component">
      <div className="col-lg-4 align-self-center lca-component-description">
        <h2>LCA's</h2>
        <p>
          Learning Community Ambassador's are volunteers that
          give back to the Community
        </p>
        <Button link_to="View All" bg_color="#FFAF30"/>
      </div>  

      <div className="col-lg-8" style={img}>
      {/* <img style={img} src={alc} alt="Imo lca"/> */}
      </div>
    </div>
  );
}