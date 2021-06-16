import './App.css';

import React, { Component } from 'react';
//import Team from './components/Team/Team';
import Game from './components/Game/Game';

class App extends Component {

  render() {

    const raccoons = {
      name: "Russiaville Raccoons",
      logoSrc:
        "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/raccoon.png",
    };
    
    const squirrels = {
      name: "Sheridan Squirrels",
      logoSrc:
        "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/squirrel.png",
    }
    
    const bunnies = {
      name: "Burlington Bunnies",
      logoSrc:
        "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/bunny.png",
    };
    
    const hounds = {
      name: "Hammond Hounds",
      logoSrc:
        "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/hound.png",
    };

    return (
      <div className="allTeams">
        
        {/* <Team team={raccoons}/>
        <Team team={squirrels}/>
        <Team team={bunnies}/>
        <Team team={hounds}/>  */}
        <Game venue={"Some place"} home={hounds} visitors={bunnies}/>

      </div>
    );
  }
}

export default App;