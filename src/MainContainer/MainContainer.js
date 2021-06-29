import React, { Component } from 'react';
import "./MainContainer.css";

import SettingsContainer from '../SettingsContainer/SettingsContainer';
import TeamSectionContainer from '../TeamSectionContainer/TeamSectionContainer';
import CoverageSuggestionContainer from '../CoverageSuggestionContainer/CoverageSuggestionContainer';


class PokeContainer extends Component {
    //  Container for main application. Holds the settings tab, team builder, and
    //team coverage components within it for organization
    render() {
        return (
            <div className="pokePlannerMainContainer">
                    <SettingsContainer />

                    <TeamSectionContainer />

                    <CoverageSuggestionContainer />                     
            </div>
            
        )
    }
}

export default PokeContainer;