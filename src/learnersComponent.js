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
        bio: `I am Ndubuisi, currently a Computer Science final year student of Federal
              Polytechnic Nekede. Prior to the ALC 4.0 scholarship program which started
              around June 2019, I have had this  passion for software development, though
              the school curriculum is more theory aligned without much hands on experience
              and practice. Due to my inquisitiveness (don't mind me 😆) to learn programming
              outside what the school offered, I started surfing the www to find solutions,
              hopefully I stumbled upon a tweet about the ALC GADS and without a second thought
              I gave it a shot and applied!, your guess is as good, I got in and here I am today
              without regrets. I made it to the project phase of the program as a first-timer.
              I have built some cool apps, check them out on github:
              https://github.com/ugwulo/notekeeper
              https://github.com/ugwulo/Androi-candyCodedApplication(my project)
              Currently working on this one https://github.com/ugwulo/GradePoint.
              I'm currently improving my Java, Firebase and UI skills.
              Learning is a continuous process and I see myself beyond my dreams.
              Shout out to Andela for organizing this epic program, Google Africa for the
              funding and Pluralsight for providing their top notch platform for learning. It has
              been a wonderful experience for me and I won't let this opportunity go down the drains.
              Thank you for being here 🤗🤗`,
        track: 'Associate Android Developer',
        github: 'https://github.com/ugwulo'
      },
      {
        name: 'Sixtus Onumajuru',
        img: 'https://avatars0.githubusercontent.com/u/15157786?s=400&v=4',
        bio: `I am a BackEnd Developer working mostly with the LAMP stack but after
              getting onboard the ALC 4.O program I have forayed deeply into the MEAN
              Stack with Mobile Web Technology and has falling in love Angular, I did
              a project alongside my colleagues building a Netflix clone side using
              Express for Backend and Angular for Frontend as well as I now use Angular
              as my Single Page Application in my Cordova apps' project. I do that in
              two ways either I merge the two projects and make Cordova www folder the
              Angular build target or I import npm angular-cordova package inside the
              Angular project where Cordova plugins are bundled with final build app `,
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
      },
      {
        name: 'Alex Favour Chukwuebuka',
        img: 'https://avatars2.githubusercontent.com/u/52333077?s=400&v=4',
        bio: `I'm Alex favour, a student and frontend developer. Through the
              Google Developer Scholarship I dived deeper into frontend development
              with Javascript and bootstrap making real responsive websites  and 
              worked on projects which is on my github profile also learnt about
              Angular for the first time. I had to learn  a whole lot of new concepts
              and amazing technologies which I did (thanks to the awesome course instructors
              and side projects) and was really amazed by just how much a single
              javascript code allowed me to do on the frontend. Pushing code to
              GitHub was really exciting as I had to really learn the basics of 
              Git and GitHub bet you  won't even be forgetting it soon lol but 
              github was fun learning and versioning generally.
        
              The scholarship for me was an awesome time investment and it took me
              to meet new guys and know lots of things happening in tech
            `,
        track: 'Mobile Web Specialist',
        github: 'https://github.com/Alinko0'
      },
      {
        name: 'Victor Kalu Mba',
        img: 'https://avatars0.githubusercontent.com/u/50376619?s=400&v=4',
        bio: `I'm an aspiring Data Scientist, Data Engineer, Data Analyst and DevOps Pro.
              I feel my greatest skill is learning and excelling at new technologies. 

              I started out on the cloud (GCP) in the Google Developer Scholarship for the
              very first time. I learnt to work with App Engine, APIs and got to explore
              networking, storage and security on the cloud and containerization technologies
              like Docker and Kubernetes. I think the best of it all was using BigQuery,
              DataProc and other ML technologies hosted on GCP. 
        
              I'm impressed that having the right skill-sets to generate deeper insights from
              data could be an effective way of solving the problems of today and tomorrow.
              `,
        track: 'Associate Cloud Engineer',
        github: 'https://github.com/VikkiMba'
      },
      {
        name: 'Amarachi Shulammite  Aso',
        img: 'https://avatars2.githubusercontent.com/u/48386390?s=400&v=4',
        bio: `I'm a psychology graduate who started writing code about a year and one month ago.
              I have since taken advantage of resources available to me to advance my tech skills.
              More than seven months ago, I heard about the Google Africa  Developer Scholarship 4.0
              as a community member the 'Developer Students Club' of my school IMSU, and it  has
              been one of  the most curated courses I have had access to.  
              I didn't get to the project phase on this program, but I certainly became better at
              writing javascript, CSS, HTML,  and I learnt the basics of Angular.js.
              I've currently taken the steps to get started with open source contribution, and I
              hope to move forward with this, as that will give me ample chance to do the things that
              matter with my skills and also learn from working on code bases that are bigger than the
              personal projects that I'm used to. 
            `,
        track: 'Mobile Web Specialits',
        github: 'https://github.com/Shulammite-Aso'
      },
      {
        name: 'Elezua Victor',
        img: 'https://avatars2.githubusercontent.com/u/34776187?s=400&v=4',
        bio: `I am an Android developer who is also interested in knowing other technologies
              and tools and how they work. My curiosity has led me to explore many tools mainly
              at a high and non-technical level. Occasionally I write web backend and frontend
              code. I had the opportunity to start my Android development journey during ALC 2.0
              and I've learnt a lot since then.`,
        track: 'Associate Android Developer',
        github: 'https://github.com/Victor-El'
      },
      {
        name: 'Kingsley Chijioke',
        img: 'https://avatars2.githubusercontent.com/u/35491751?s=400&v=4',
        bio: `My name is Kingsley. I'm an android developer. Having participated in the Google Associate
              Developer program, I have developed an excellent eye using the Google libraries, understanding
              android architecture and android component etc. This program has helped me leverage my working
              speed, real life projects and many more.
              I am really excited for being part of this and will encourage every developer of the required
              stack to be a part of it.
              `,
        track: 'Associate Android Developer',
        github: 'https://github.com/Erandkings'
      },
      {
        name: 'Paschal Chigozie Alaemezie',
        img: 'https://avatars3.githubusercontent.com/u/49463348?s=400&v=4',
        bio: `Am a cool guy that loves coding, AI enthusiast and into machine learning track besides GCP.
              Also have entrepreneurial spirit. 
              `,
        track: 'Associate Cloud Engineer',
        github: 'https://github.com/Mariegozie'
      },
      {
        name: 'Sunday Obinna Oruwhone',
        img: 'https://avatars1.githubusercontent.com/u/20338698?s=400&v=4',
        bio: `A tech enthusiast; with experience working with HTML, CSS, JavaScript, PHP, and notable web frameworks
              for web development and Java, C/C++ for software development. Acquiring more knowledge and skill
              is a lifetime goal.`,
        track: 'Mobile Web Specialist',
        github: 'http://github.com/sundayamosobi'
      },
      {
        name: 'Opara Benjamin',
        img: 'https://avatars1.githubusercontent.com/u/26014855?s=400&v=4',
        bio: `I am a full stack android developer. I am proficient in MySQL and SQLITE `,
        track: 'Associate Android Developer',
        github: 'https://github.com/OparaBenjamin'
      },
      {
        name: 'Vincent edeh',
        img: 'https://avatars2.githubusercontent.com/u/44481619?s=400&v=4',
        bio: `I am a frontend web developer with a passion for building beautiful interfaces for the web.
              A benefactor of the ALC 4.0 scholarship and it was the start to my tech career `,
        track: 'Mobile Web Specialist',
        github: 'https://github.com/vinuch'
      },
      {
        name: 'Onuoha Chukwuemeka Charles',
        img: 'https://avatars1.githubusercontent.com/u/52838613?s=400&v=4',
        bio: `Chukwuemeka is a graduate of Electrical and Electionic Engineering with interest is embedded
              systems, Telecommunications and System Security. A tech and cybersecurity blogger with
              7to5post.com. He is a finalist in the 2019 edition of Google Affrica Developer Scholarship
              where he trained as an Android Developer. He is currently pursuing more programming skills
              with C++ and Java. He also holds certificate of completion of Cisco's Cyber Security Essentials
              course. He hope you use his wealth of knowledge to create jobs not just for himself but for those
              who share the same spirit with him. `,
        track: 'Associate Android Developer',
        github: 'https://github.com/Charlyco'
      },
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
          <h2>ALC IMO SCHOLARS</h2>

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