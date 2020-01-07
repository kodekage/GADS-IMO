import React from 'react';
import './lcaProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn, faGithub,} from '@fortawesome/free-brands-svg-icons';
import './lcaProfile.css';

export default function LcaBioDisplay(props) {  
  return (
    <div className="lcaBio">
      <h1>{props.name}</h1>
      <p style={{margin: 0, fontSize: '20px', lineHeight: '20px'}}><i>LCA {props.track} Track</i></p>

      <div className="lcaAbout">
        <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize: '30px'}}/>
        <p>
          {props.bio}
        </p>
      </div>

      <div className="social">
        <h3>Contact</h3>
        <a href={props.linkedin}><FontAwesomeIcon className="socialIcon" icon={faLinkedinIn}/></a>
        <a href={props.twitter}><FontAwesomeIcon className="socialIcon" icon={faTwitter}/></a>
        <a href={props.github}><FontAwesomeIcon className="socialIcon" icon={faGithub}/></a>
      </div>
    </div>
  );
}