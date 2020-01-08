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
        bio: `With over 2+ years experience building web applications and developer community volunteering (GitHub Education & Facebook Developer Circles), serving as community lead for
              the 4th round of the Google Africa Developer Scholarship(GADS) in IMO was my way of giving back to the ALC being an ALC2.0 scholar myself.
              Connecting with the learners was easy because I had been in their shoes too and also a learning experience as the scholars were always
              armed with some questions I had to dig deeper to be able to answer.
              I anticipate all that the folks in the Mobile Web Specialist Track build in the future and a successful career as
              technologist.
              `,
        linkedin: 'https://www.linkedin.com/in/prosper-opara/',
        github: 'https://github.com/OPARA-PROSPER',
        twitter: 'https://twitter.com/kodekage'
      },
      {
        img: faith,
        name: 'Toritseju Faith',
        track: 'Associate Cloud Engineer',
        bio: `I'm a computer science graduate and a software engineer with an affinity for good systems design.
              Handling the Associate Cloud Engineering Track was an amazing experince for me, being an AWS user
              the GCP experience was worth it personally and I'm glad I could share my cloud experince with the scholars
              in Imo. Being an ALC2.0 participant I feel that the having a Cloud track is a game changer for the
              community`,
        linkedin: 'https://linkedin.com/in/toritsejuFO',
        github: 'https://github.com/toritsejuFO',
        twitter: 'https://twitter.com/toritsejuFO'
      }, 
      {
        img: fred,
        name:'Johnson Fred Awah',
        track: 'Mobile Web Specialist',
        bio: `My codename is codemon, i'm a software engineer and major in building backend technologies and API's
              using the JavaScript language. GADS4.0 turnout was amazing, I loved the scholars inqusitive
              attitude (always asking questions) and that some were quite ahead in their learning`,
        linkedin: 'https://linkedin.com/in/alfred-johnson-awah',
        github: 'https://github.com/CeoFred',
        twitter: 'https://twitter.com/codemon_'
      },
      {
        img: melody,
        name:'Melody Amaizu',
        track: 'Associate Android Developer',
        bio: `I'm Amaizu Melody, a Nigerian serial Internet entrepreneur,Software developer, Starthub Fellow 2019,
              winner of the Hackvote Hackathon 2018, Ambassador Coordinator Zumarco Ventures,Ingressive Campus 
              Ambassador, ALCwithGoogle mentor, Github Student Developer, Internshala student partner, ALCwithGoogle
              Certificate Holder, Google Africa Digital Skill Certificate holder, Network Associate Certificate Holder,
              Soft skill Certificate Holder, Runner-up at Testathon Nigeria 2019. Voluteering for the GADS 4.0 was an 
              amazing experience for me and i'm glad i was part of the scholars learning journey this time`,
        linkedin: 'https://linkedin.com/in/amaizu-melody-6ab91b12a',
        github: 'https://github.com/lattaz',
        twitter: 'https://twitter.com/iamLattaz'
      },
      {
        img: shegs,
        name:'Oladokun Oluwasegun',
        track: 'Associate Android Developer',
        bio: `Volunteering for the GADS 4.0 in IMO was informed by my proficency in android development and
              desire to give back to the Android community in Imo. Coding for me is a way of life as I can
              easily bring to life ideas in my head to reality by writing some lines of code. Google, Andela
              and Plurasight made learning how to code possible for us in Imo and thats really awesome, look
              foward to more of this.
              `,
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

  previousLca = () => {
    this.counter -= 1;

    if (this.counter < 0) {
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