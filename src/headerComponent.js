import React from 'react';
import gads from './img/alc_logo.png';
import gdg from './img/gdg.png'

export default function HeaderComponent(props) {
  return (
    <header>
      {/* <img src={gdg} alt="ALC logo"/> */}

      <ul>
        <li>
          <a href="#">LCA'S</a>
        </li>

        <li>
          <a href="#">Scholars</a>
        </li>
      </ul>
    </header>
  );
}