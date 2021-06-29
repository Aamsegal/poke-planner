import React, { Component } from 'react';
import './SettingsButton.css';

class PokeSettingsButtons extends Component {
    render() {
        return (
            <div className="settingButtonContainer">
                <h2 className="settingButton" onClick={() => this.props.onClick(this.props.clickFunctionResponse)}>{this.props.buttonName}</h2>
            </div>
        )
    }
}

export default PokeSettingsButtons;