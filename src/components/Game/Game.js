import React, { Component } from 'react';
import Team from '../Team/Team';

class Game extends Component {
    render() {

    const {venue, home, vistors} = this.props


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
            <div>
                <div><h3>Welcome to {venue}</h3></div>

                
            </div>
        );
    }
}

export default Game;