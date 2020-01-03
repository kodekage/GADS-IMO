import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import scholar from './img/learner.jpg';
import './learnerBio.css';

export default function LearnerBio(props) {
  const style = {
    icon: {
      // border: '1px solid #fff',
      marginLeft: '95%',
      cursor: 'pointer'
    }
  }
  return (
    <div className="col-xs-1 col-sm-4 col-md-4 col-lg-2 learnerBio">
      <img src={scholar} alt="AlC Imo scholar" onClick={props.showBio}/>

      <div className="briefBio" style={props.show}>
        <div className="item">
          <FontAwesomeIcon style={style.icon} icon={faTimesCircle} onClick={props.hideBio}/>
          <h3>Opara Prosper</h3>
          <p>Mobile web specialist</p>
          <FontAwesomeIcon icon={faGlobeAfrica}/>
        </div>
      </div>
    </div>
  );
}