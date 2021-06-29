import React, { Component } from 'react';
import "./SettingsContainer.css";

import SettingsButtons from '../SettingsButton/SettingsButton';

class SettingsContainer extends Component {
    buttonClick = (button) => {
        console.log(button)
    }

    render () {
        return (
            <div className="plannerSubContainer Settings">

                <h1 className="subContainerTitle">Settings</h1>
                
                <div className="subContainerBanner">

                    {/* Takes props for the text to appear on the button, 
                    the function to perform an action when the button is pressed,
                    and the information and or thing to happen when the button is pressed.*/}
                    <SettingsButtons 
                        buttonName="Game"
                        onClick={this.buttonClick}
                        clickFunctionResponse="The Game button was clicked"
                    />

                    <SettingsButtons 
                        buttonName="Restrictions"
                        onClick={this.buttonClick}
                        clickFunctionResponse="The Restriction buttons was clicked"
                    />

                    <SettingsButtons 
                        buttonName="Mystery Gift"
                        onClick={this.buttonClick}
                        clickFunctionResponse="The Mystery gift button was clicked"
                    />
                    
                    <SettingsButtons 
                        buttonName="Settings"
                        onClick={this.buttonClick}
                        clickFunctionResponse="The Settings button was clicked"
                    />
                </div>
            </div>
        )
    }
}

export default SettingsContainer;