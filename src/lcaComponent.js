import React from 'react';
import HeadersComponent from './headerComponent';
import LcaBioDisplay from './lcaBioDisplay';
import LcaAvatar from './lcaAvatar';
import prosper from './img/prosper.jpg';
import fred from './img/fred.jpg';
import faith from './img/faith.jpg';
import melody from './img/melody.jpg';
import shegs from './img/shegs.jpg';
import './lcaProfile.css';

export default class LcaComponent extends React.Component {
  constructor(props) {
    super(props);

    this.counter = 0;

    this.lca = [
      {
        img: prosper,
        name: 'Prosper Opara',
        track: 'Mobile Web Specialist',
        bio: `fullstack software developer and community volunteer.
              He has over 2 years experience building web applications as a freelancer`,
        linkedin: 'https://www.linkedin.com/in/prosper-opara/',
        github: 'https://github.com/OPARA-PROSPER',
        twitter: 'https://twitter.com/kodekage'
      },
      {
        img: faith,
        name: 'Toritseju Faith',
        track: 'Cloud',
        bio: `Recent computer science graduate, software engineer with an affinity for good systems design.
              Looking to work on real life projects solving real life problems. Faith is most versed in writing
              API's and engineering backend systems. He likes playing the keyboard, mobile games or table tennis
              abd habging out with friends when he is not coding`,
        linkedin: 'https://linkedin.com/in/toritsejuFO',
        github: 'https://github.com/toritsejuFO',
        twitter: 'https://twitter.com/toritsejuFO'
      }, 
      {
        img: fred,
        name:'Johnson Fred Awah',
        track: 'Mobile Web Specialist',
        bio: `Codename, CODEMON. He is a software engineer, majors in backend technologies and API's and JS fanboy`,
        linkedin: 'https://linkedin.com/in/alfred-johnson-awah',
        github: 'https://github.com/CeoFred',
        twitter: 'https://twitter.com/codemon_'
      },
      {
        img: melody,
        name:'Melody Amaizu',
        track: 'Associate Android Developer',
        bio: `Remote software developer and student leader.`,
        linkedin: 'https://linkedin.com/in/oladokun-oluwasegun',
        github: 'https://github.com/shegsbass',
        twitter: 'https://twitter.com/oladokun_shegs'
      },
      {
        img: shegs,
        name:'Oladokun Oluwaswgun',
        track: 'Associate Android Developer',
        bio: `Oluwasegun has proficency and competence in android development, web development, UI/UX design, social
              media marketing, project management and has a good presentation skill`,
        linkedin: 'https://linkedin.com/in/oladokun-oluwasegun',
        github: 'https://github.com/shegsbass',
        twitter: 'https://twitter.com/oladokun_shegs'
      }
    ];

    this.state = {
      img: this.lca[this.counter].img,
      name: this.lca[this.counter].name,
      track: this.lca[this.counter].track,
      bio: this.lca[this.counter].bio,
      linkedin: this.lca[this.counter].linkedin,
      github: this.lca[this.counter].github,
      twitter: this.lca[this.counter].twitter
    }
  }

  nextLca = () => {
    this.counter += 1;

    if (this.counter > 4) {
      this.counter = 4
    }

    this.setState({
      img: this.lca[this.counter].img,
      name: this.lca[this.counter].name,
      track: this.lca[this.counter].track,
      bio: this.lca[this.counter].bio,
      linkedin: this.lca[this.counter].linkedin,
      github: this.lca[this.counter].github,
      twitter: this.lca[this.counter].twitter
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
      track: this.lca[this.counter].track,
      bio: this.lca[this.counter].bio,
      linkedin: this.lca[this.counter].linkedin,
      github: this.lca[this.counter].github,
      twitter: this.lca[this.counter].twitter
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
              <LcaBioDisplay
                name={this.state.name}
                track={this.state.track}
                bio={this.state.bio}
                linkedin={this.state.linkedin}
                github={this.state.github}
                twitter={this.state.twitter}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}