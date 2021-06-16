import React, { Component } from 'react';
import Team from '../Team/Team';

class Game extends Component {
    render() {

    const {venue, home, vistors} = this.props


    

        return (
            <div>
                <div><h3>Welcome to {venue}</h3></div>

                
            </div>
        );
    }
}

export default Game;