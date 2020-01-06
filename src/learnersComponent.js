import React from 'react';
import HeadersComponent from './headerComponent';
import LearnerBio from './learnerBio';
import './learnerBio.css';

export default class LearnersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.scholars = [
      {
        name: 'Ndubuisi Ugwulo J.',
        img: 'https://avatars2.githubusercontent.com/u/52312550?s=400&v=4',
        bio: `Alright, I am still in the learning process and on the road to
              becoming a world class Software Developer. I am very passionate
              about tech and its impact in the world today, this is why I delved
              into software development to leverage this opportunity to effect a
              positive change in my own little way and to make life easier for
              the world at large.`,
        track: 'Associate Android Developer',
        github: 'https://github.com/ugwulo'
      },
      {
        name: 'Sixtus Onumajuru',
        img: 'https://avatars0.githubusercontent.com/u/15157786?s=400&v=4',
        bio: `I am and Eccentric person when it comes to programming and things in
              general, I find it hard to focus on one programming language so I am
              doing a lot athe same time but I see myself as a Software Developer
              focusing on The MEAN/LAMP Stack and Android/Java.`,
        track: 'Mobile Web Specialist',
        github: 'https://github.com/jiggabyte'
      },
      {
        name: 'Johnpaul Uzukwu',
        img: 'https://avatars0.githubusercontent.com/u/52359007?s=400&v=4',
        bio: `Am a back-end engineer, proficient in php and Mysql`,
        track: 'Mobile Web Specialist',
        github: 'https://github.com/uzukwujp'
      },
      {
        name: 'Onuohb Godfirst Chibuzo',
        img: 'https://avatars0.githubusercontent.com/u/52785343?s=460&v=4',
        bio: `I'm proficient in Mobile Development`,
        track: 'Associate Android Developer',
        github: 'https://www.github.com/chibufirst'
      }
    ]
  }

  render() {
    let learner = [];

    for(let x=0; x < this.scholars.length; x++) {
      learner.push(
        <LearnerBio
        key={x}
        id={x}
        name={this.scholars[x].name}
        track={this.scholars[x].track}
        img={this.scholars[x].img}
        bio={this.scholars[x].bio}
        github={this.scholars[x].github}
        />
      );
    }

    
    return (
      <div className="learnersComponent">
        <HeadersComponent/>
        <div className="container">
          <h2>ALC IMO LEARNERS</h2>

          {/* <p>  */}
            {/* ALC Imo learners are individuals passionate about learning about the latest technologies */}
            {/*  */}
          {/* </p> */}

          {/* <div className="row no-gutters align-items-center justify-content-center tracks"> */}
            {/* <div className="col-lg-4"> */}
              {/* <button>Mobile Web Specialist</button> */}
            {/* </div> */}
{/*  */}
            {/* <div className="col-lg-4"> */}
              {/* <button>Associate Android Developers</button> */}
            {/* </div> */}
{/*  */}
            {/* <div className="col-lg-3"> */}
              {/* <button>Cloud Engineers</button> */}
            {/* </div> */}
          {/* </div> */}
{/*  */}
          {/* <div className="breadcrump">Learners/all</div> */}

          <div className="row no-gutters justify-content-left learnersList">
           { learner.map((item) => item) }
          </div>
        </div>
      </div>
    )
  }
}