import React, { Component } from 'react';
import Team from '../Team/Team';
import './Game.css'

class Game extends Component {

    constructor(props){
        super(props)
        this.state = {
            resetCount: 0,
            home: {
                shots: 0,
                score: 0
            },
            visitors:{

            }
        }
    }
    render() {

    const {venue, home, visitors} = this.props



        return (
            <div>
                <div className="align-text"><h3>Welcome to {venue}</h3></div>

        <div class="game-divs">
            <Team team={home}/>

            <div>
                <div><h1 className={"versus"}>VS</h1></div>
                <div className="align-text">Resets: {this.state.resetCount}</div>

                <button>RESET GAME</button>

            </div>

            <Team team={visitors}/>
        </div>
            </div>
        );
    }
}

export default Game;