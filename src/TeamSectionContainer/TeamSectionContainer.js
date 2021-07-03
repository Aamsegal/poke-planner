import React, { Component } from 'react';
import './TeamSectionContainer.css';

import TeamMemberSelector from '../TeamMemberSelector/TeamMemberSelector';

class TeamSectionContainer extends Component {
    render () {
        return (
            <div className="plannerSubContainer TeamPlanner">

                <h1 className="subContainerTitle">Team Planner</h1>

                <div className="TeamMemberContainer">

                    <TeamMemberSelector pokemonNumber={1} />
                    <TeamMemberSelector pokemonNumber={2} />
                    <TeamMemberSelector pokemonNumber={3} />
                    <TeamMemberSelector pokemonNumber={4} />
                    <TeamMemberSelector pokemonNumber={5} />
                    <TeamMemberSelector pokemonNumber={6} />

                </div>
                 
            </div>
        )
    }
}

export default TeamSectionContainer;