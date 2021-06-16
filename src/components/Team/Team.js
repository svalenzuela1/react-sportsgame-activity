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
                <div className="teamName">
                    <h1>{team.name}</h1>
                </div>

                <div className="teamLogoSrc">
                    <img src={team.logoSrc} alt={team.name} className="logoSrc"/>
                </div>


                <div className="teamScores">
                <p>Score: {this.state.scores}</p>

                </div>

                <div className="teamShots">
                    <p>Shots: {this.state.shots}</p>
                </div>
            </div>
        );
    }
}

export default Team;