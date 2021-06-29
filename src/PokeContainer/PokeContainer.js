import React, { Component } from 'react';
import "./PokeContainer.css";

import PokeSettingsContainer from '../PokeSettingsContainer/PokeSettingsContainer';
import PokeTeamSectionContainer from '../PokeTeamSectionContainer/PokeTeamSectionContainer';
import PokeCoverageSuggestionContainer from '../PokeCoverageSuggestionContainer/PokeCoverageSuggestionContainer';


class PokeContainer extends Component {
    //  Container for main application. Holds the settings tab, team builder, and
    //team coverage components within it for organization
    render() {
        return (
            <div className="pokePlannerMainContainer">
                    <PokeSettingsContainer />

                    <PokeTeamSectionContainer />

                    <PokeCoverageSuggestionContainer />                     
            </div>
            
        )
    }
}

export default PokeContainer;