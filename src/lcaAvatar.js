import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import './lcaProfile.css';

export default function LcaAvatar(props) {
  const style = {
    backgroundImage: `linear-gradient(rgba(225, 225, 225, 0.2), rgba(225, 225, 225, 0.2)), url(${props.img})`,
    // height: '100vh',
    // padding: '90% 0 0',
    textAlign: 'center',
  }

  return (
    <div className="lcaAvatar" style={style}>
      <FontAwesomeIcon className="icon" icon={faAngleLeft} onClick={props.previouslca}/>
      <FontAwesomeIcon className="icon" icon={faAngleRight} onClick={props.nextlca}/>
    </div>
  );
}