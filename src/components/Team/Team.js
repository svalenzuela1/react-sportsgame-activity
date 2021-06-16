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
                    {this.state.scores > 0 ? 
                    (<p>Shot Percentile: 
                    {this.state.shots/this.state.scores}</p>): 

                     (<p></p>)}
                    
                </div>
            </div>
        );
    }
}

export default Team;