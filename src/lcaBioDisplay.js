import React from 'react';
import './lcaProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobeAmericas, faGlobeAfrica} from '@fortawesome/free-solid-svg-icons';
import './lcaProfile.css';

export default function LcaBioDisplay(props) {  
  return (
    <div className="lcaBio">
      <h1>{props.name}</h1>
      <p style={{margin: 0, fontSize: '20px', lineHeight: '20px'}}><i>LCA {props.track} track</i></p>

      <div className="lcaAbout">
        <h2>About</h2>
        <p>
          {props.bio}
        </p>
      </div>

      <div className="social">
        <FontAwesomeIcon className="socialIcon" icon={faGlobeAfrica}/>
        <FontAwesomeIcon className="socialIcon" icon={faGlobeAmericas}/>
      </div>
    </div>
  );
}