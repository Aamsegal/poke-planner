import React, { Component } from 'react';
import './PokeSettingsButton.css';

class PokeSettingsButtons extends Component {
    render() {
        return (
            <div className="settingButtonContainer">
                <h2 onClick={() => this.props.onClick(this.props.buttonName)}>{this.props.buttonName}</h2>
            </div>
        )
    }
}

export default PokeSettingsButtons;