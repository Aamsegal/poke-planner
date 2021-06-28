import React, { Component } from 'react';
import "./PokeContainer.css";

class PokeContainer extends Component {
    //  Conatiner for main application. Holds the settings tab, team builder, and
    //team coverage components within it for organization
    render() {
        return (
            <div className="pokePlannerMainContainer">
                    <div className="plannerSubContainer Settings">
                        <h1>Settings</h1>  
                    </div>

                    <div className="plannerSubContainer TeamPlanner">
                        <h1>Team Planner</h1>   
                    </div>   

                    <div className="plannerSubContainer CoverageSuggestions">
                        <h1>Coverage/Suggestion</h1>
                    </div>                       
            </div>
            
        )
    }
}

export default PokeContainer;