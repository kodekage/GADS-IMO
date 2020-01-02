import React from 'react';
import HeadersComponent from './headerComponent';
import LcaBioDisplay from './lcaBioDisplay';
import LcaAvatar from './lcaAvatar';
// import LcaProfile from './lcaProfileComponent';
import prosper from './img/prosper.jpg';
import fred from './img/fred.jpg';
import faith from './img/faith.jpg';
import './lcaProfile.css';

export default class LcaComponent extends React.Component {
  constructor(props) {
    super(props);

    this.counter = 0;

    this.lca = [
      { img: prosper, name: 'Prosper Opara', track: 'Mobile Web Specialist'},
      { img: faith, name: 'Toritseju Faith', track: 'Cloud'},
      { img: fred, name: 'Johnson Awah Fred', track: 'Mobile Web Specialist'}
    ];

    this.state = {
      img: this.lca[this.counter].img,
      name: this.lca[this.counter].name,
      track: this.lca[this.counter].track,
    }
  }

  nextLca = () => {
    this.counter += 1;

    if (this.counter > 2) {
      this.counter = 2
    }

    this.setState({
      img: this.lca[this.counter].img,
      name: this.lca[this.counter].name,
      track: this.lca[this.counter].track
    })
  }

  previousLca = () => {
    this.counter -= 1;

    if (this.counter < 0) {
      this.counter = 0
    }

    this.setState({
      img: this.lca[this.counter].img,
      name: this.lca[this.counter].name,
      track: this.lca[this.counter].track
    })
  }

  render() {
    return (
      <div style={{background: '#222'}}>
        <HeadersComponent/>

        <div className="lca">
          <div className="row no-gutters">
            <div className="col-lg">
             <LcaAvatar img={this.state.img} nextlca={this.nextLca} previouslca={this.previousLca}/>
            </div>

            <div className="col-lg-7" style={{background: '#111'}}>
              <LcaBioDisplay name={this.state.name} track={this.state.track}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}