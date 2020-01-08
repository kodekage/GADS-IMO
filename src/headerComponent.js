import React from 'react';
import gads from './img/alc_logo.png';
import { Link } from 'react-router-dom';

export default function HeaderComponent(props) {
  return (
    <header>
      <Link to="/">
        <img src={gads} alt="GDG Logo"/>
      </Link>

      <ul>
        <Link to="/lcas">
          <li>LCA's</li>
        </Link>

        <Link to="/scholars">
          <li>Scholars</li>
        </Link>
      </ul>
    </header>
  );
}