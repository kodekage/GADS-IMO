import React from 'react';
import Button from './button';
import alc from './img/lca.jpg';
import sr from './ScrollReveal';

export default class LCAComponent extends React.Component {
  componentDidMount(){
    sr.reveal(this.refs.box1, { easing: 'cubic-bezier(0.5, 0, 0, 1)' });
  };

  render() {
    const img = {
      background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${alc})`,
      backgroundPostion: 'center',
      backgroundSize: 'cover',
    }
  
    return (
      <div className="row lca-component" ref="box1">
        <div className="col-lg-4 align-self-center lca-component-description">
          <h2>LCA's</h2>
          <p>
            Learning Community Ambassador's are volunteers that
            give back to the Community
          </p>
          <Button width="60%" link="/lcas" link_to="LCA's profile" bg_color="#FFAF30" font_color="#111111"/>
        </div>  
  
        <div className="col-lg-8 component-bg" style={img}>
  
        </div>
      </div>
    );
  }
}