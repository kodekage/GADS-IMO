import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import scholar from './img/learner.jpg';
import './learnerBio.css';

export default class LearnerBio extends React.Component {

  state = {
    style: {
      display: 'none'
    },
    id: this.props.id
  }

  showBio(event) {
    this.setState({
      style: {
        display: 'block'
      }
    })
  }

  hideBio(event) {
    this.setState({
      style: {
        display: 'none'
      }
    })
  }

  render() {
    const style = {
      icon: {
        // border: '1px solid #fff',
        marginLeft: '95%',
        cursor: 'pointer'
      },
      p: {
        color: '#FFAF30',
        fontSize: '15px'
      },
      a: {
        color: '#444'
      }
    }
  
    return (
      <div className="col-xs-1 col-sm-4 col-md-4 col-lg-3">
        <div className="learnerBio">
          <div>
            <img src={this.props.img} alt="AlC Imo scholar"/>
            <div>
              <h3 style={{fontSize: '25px', fontWeight: '600'}}>{this.props.name}</h3>
              <p style={style.p}>{this.props.track} Track</p>
              <a style={style.a} href={this.props.github}><FontAwesomeIcon icon={faGithub} style={{fontSize: '30px'}}/></a>
              <span onClick={this.showBio.bind(this)}>MORE +</span>
            </div>
          </div>
        </div>

        <div className="briefBio" style={this.state.style}>
          <div className="item">
            <FontAwesomeIcon style={style.icon} icon={faTimesCircle} onClick={this.hideBio.bind(this)}/>
            <h3 style={{fontSize: '25px', fontWeight: '600'}}>{this.props.name}</h3>
            <p style={style.p}>{this.props.track} Track</p>
            <div className="row">
              <div className="col-lg-4">
                <img src={this.props.img} alt="AlC Imo scholar"/>
                {/* <FontAwesomeIcon icon={faGithub} style={{display: 'block', margin: '.5em 0', fontSize: '30px'}}/> */}
              </div>

              <div className="col-lg-8">
                <p><i>{this.props.bio}</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}