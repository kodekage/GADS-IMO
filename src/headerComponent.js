import React from 'react';
import gads from './img/alc_logo.png';
import gdg from './img/gdg.png'

export default function HeaderComponent(props) {
  return (
    <header>
      <ul>
        {/* <a href="#"> */}
          {/* <li>Meetup highlight</li> */}
        {/* </a> */}

        <a href="#">
          <li>LCA's</li>
        </a>

        <a href="#">
          <li>Scholars</li>
        </a>
      </ul>
    </header>
  );
}