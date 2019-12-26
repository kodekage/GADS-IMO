import React from 'react';
import gads from './img/alc_logo.png';
import gdg from './img/gdg.png'

export default function HeaderComponent(props) {
  return (
    <header>
      <ul>
        <li>
          <a href="#">Meetup Highlight</a>
        </li>

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