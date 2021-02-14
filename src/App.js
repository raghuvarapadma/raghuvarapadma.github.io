// import { Header, Footer } from "./components";
import ReactMarkdown from "react-markdown";
import { lesson_one } from "./data/markdown";
import React from 'react';
import image from './components/PROJECT.JPG'
import Mac from './components/MacMiller.jpg'
import ASAP from './components/ASAPROCKY.jpg'
import Beatles from './components/BEATLES.jpg'
import github from './components/github.png'
import linkedin from './components/linkedin.png'

const App = () => {

  const basketball_players = ['LeBron James', 'Steph Curry', 'LaMelo Ball']
  const listItems = basketball_players.map((player) => <h4><li>{player}</li></h4>);

  return (
    <div className="home">
      {/* <Header /> */}

      <div id="content">
        {/* <ReactMarkdown source={lesson_one} /> */}
        <div class="row">
          <div class="column">
            <h2>Hello, my name is Raghu!</h2>
            <h4>I am currently a sophomore at UNC Chapel Hill majoring in Computer Science and minoring in Statistics and Neuroscience. I'm from Charlotte, NC and I think the
              Hornets are the rawest team in the NBA, and hopefully the Panthers get better. I am extremely passionate about coding and love learning about new technologies. 
              My dream job would be to become a professional basketball player or a producer. In my free time, I love watching basketball and football, listening to music, and hanging out with my friends! 
            </h4>
          </div>
          <div class="column2">
            <img src={image} className="photo"/>
          </div>
        </div>
        <div class="row">
          <h2>Currently, my favorite basketball players are:</h2>
          {listItems}
        </div>
        <div class="row">
          <h2>Currently, my favorite artists are:</h2>
          <div class="column3">
            <img src={Mac} className="photo"/>
          </div>
          <div class="column3">
            <img src={ASAP} className="photo"/>
          </div>
          <div class="column3">
            <img src={Beatles} className="photo"/>
          </div>
        </div>
        <div class="row-center">
          <a href="https://github.com/raghuvarapadma"><img src={github} className="photomini"/></a>
          <a href="https://www.linkedin.com/in/raghuvarapadma/"><img src={linkedin} className="photomini"/></a>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
