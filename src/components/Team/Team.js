import React, { Component } from 'react';
import './Team.css'

class Team extends Component {

    constructor(props){
        super(props)
        this.state = {
            scores: 0,
            shots: 0
        }
    }

    render() {

        const {team} = this.props
        
        const handleShots = () => {
            //will handle the change of shots and scores
            this.setState(currentState => {
                //increment shots here

            })
        }
        return (
            <div>
                <div className="teamName align-text">
                    <h1>{team.name}</h1>
                </div>

                <div className="teamLogoSrc align-text">
                    <img src={team.logoSrc} alt={team.name} className="logoSrc"/>
                </div>


                <div className="teamScores align-text">
                <p>Score: {this.state.scores}</p>

                </div>

                <div className="teamShots align-text">
                    <p>Shots: {this.state.shots}</p>
                </div>

                <div className="teamPercentile align-text">
                    {this.state.shots <= 0 ?

                     (<p></p>): 

                     (<p>Shot Percentile: 
                        {this.state.shots/this.state.scores * 100}</p>) }
                    
                </div>

                <div className="teamBtn align-text">
                    <button>SHOOT!</button>

                </div>
            </div>
        );
    }
}

export default Team;