import React, { Component } from 'react';
import './TeamSectionContainer.css';

import TeamMemberSelector from '../TeamMemberSelector/TeamMemberSelector';

class TeamSectionContainer extends Component {
    render () {
        return (
            <div className="plannerSubContainer TeamPlanner">

                <h1 className="subContainerTitle">Team Planner</h1>

                <div className="TeamMemberContainer">

                    <TeamMemberSelector pokemonNumber={1} key={'teamMemberSelector-1'}/>
                    <TeamMemberSelector pokemonNumber={2} key={'teamMemberSelector-2'}/>
                    <TeamMemberSelector pokemonNumber={3} key={'teamMemberSelector-3'}/>
                    <TeamMemberSelector pokemonNumber={4} key={'teamMemberSelector-4'}/>
                    <TeamMemberSelector pokemonNumber={5} key={'teamMemberSelector-5'}/>
                    <TeamMemberSelector pokemonNumber={6} key={'teamMemberSelector-6'}/>

                </div>
                 
            </div>
        )
    }
}

export default TeamSectionContainer;