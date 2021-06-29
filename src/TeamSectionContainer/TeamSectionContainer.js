import React, { Component } from 'react';
import './TeamSectionContainer.css';

import TeamMemberSelector from '../TeamMemberSelector/TeamMemberSelector';

class TeamSectionContainer extends Component {
    render () {
        return (
            <div className="plannerSubContainer TeamPlanner">

                <h1 className="subContainerTitle">Team Planner</h1>

                <div className="TeamMemberContainer">

                    <TeamMemberSelector placeholderInfo="Pokemon 1" />
                    <TeamMemberSelector placeholderInfo="Pokemon 2" />
                    <TeamMemberSelector placeholderInfo="Pokemon 3" />
                    <TeamMemberSelector placeholderInfo="Pokemon 4" />
                    <TeamMemberSelector placeholderInfo="Pokemon 5" />
                    <TeamMemberSelector placeholderInfo="Pokemon 6" />

                </div>
                 
            </div>
        )
    }
}

export default TeamSectionContainer;