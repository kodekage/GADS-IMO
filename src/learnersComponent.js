import React from 'react';
import HeadersComponent from './headerComponent';
import LearnerBio from './learnerBio';
import './learnerBio.css';

export default class LearnersComponent extends React.Component {
  state = {
    show: {
      display: 'none',
    }
  }

  showBio(event) {
    console.log(event.target.img)
    this.setState({
      show: {
        display: 'block'
      }
    })
  }

  hideBio() {
    this.setState({
      show: {
        display: 'none'
      }
    })
  }

  render() {
    let learner = [];

    for(let x=0; x < 10; x++) {
      learner.push(<LearnerBio key={x} show={this.state.show} showBio={this.showBio.bind(this)} hideBio={this.hideBio.bind(this)}/>);
    }

    
    return (
      <div className="learnersComponent">
        <HeadersComponent/>
        <div className="container">
          <h2>ALC IM0 LEARNERS</h2>

          <div className="row no-gutters align-items-center justify-content-center tracks">
            <div className="col-lg-4">
              <button>Mobile Web Specialist</button>
            </div>

            <div className="col-lg-4">
              <button>Associate Android Developers</button>
            </div>

            <div className="col-lg-3">
              <button>Cloud Engineers</button>
            </div>
          </div>

          <div className="row no-gutters justify-content-center learnersList">
           { learner.map((item) => item) }
          </div>
        </div>
      </div>
    )
  }
}