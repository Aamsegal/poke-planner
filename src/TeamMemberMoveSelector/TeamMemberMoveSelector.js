import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import PokemonTypeInfo from '../PokemonTypeInfo';

import './TeamMemberMoveSelector.css';

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

class TeamMemberMoveSelector extends Component {

    state = {
        moveInfo: [],
        movePower: '',
        moveType: '',
        moveColor: ''
    }

    selectedMoveApiCall(selectedMove) {
        P.getMoveByName(selectedMove) // with Promise
        .then(function(response) {
            return response;
        })
        /* Used the returned response to save info to the state for usage */
        .then(pokemonMoveApiResponse => {
            this.setState({moveInfo: pokemonMoveApiResponse});
            this.addMovePower(pokemonMoveApiResponse);
            this.addMoveType(pokemonMoveApiResponse);
        })
        .catch(function(error) {
          console.log('There was an ERROR: ', error);
        });
    }

    /* Updates the state for the move power. This is needed so that the page
    re-renders since setState is called. */
    addMovePower(selectedMove) {
        let movePowerValue = selectedMove.power;

        console.log(movePowerValue);

        if(movePowerValue === null) {
            movePowerValue = 0;
        }

        this.setState({movePower: movePowerValue})
    }
    

    addMovePowerHtml() {
        let movePowerHtml = [];
        let movePower = this.state.movePower;

        if(movePower !== '') {
            movePowerHtml.push(
                <p className="movePowerInfo">Power: {movePower}</p>
            )
        }

        return movePowerHtml;
    }

    /* Updates the state for the move power. This is needed so that the page
    re-renders since setState is called. */
    addMoveType = (selectedMove) => {
        let moveTypeValue = selectedMove.type.name;
        console.log(moveTypeValue)
        let moveColorValue = PokemonTypeInfo[moveTypeValue];

        this.setState({moveType: moveTypeValue});
        this.setState({moveColor: moveColorValue})
    }

    addMoveTypeHtml() {
        let moveTypeHtml = [];
        let moveType = this.state.moveType;
        let moveColor = this.state.moveColor;

        if(moveType !== '') {
            moveType = moveType.charAt(0).toUpperCase() + moveType.slice(1);

            moveTypeHtml.push(
                <p className="moveTypeInfo" style={{backgroundColor: `#${moveColor}`, color: '#1F1F1F'}}>{moveType}</p>
            )
        }

        return moveTypeHtml;
    }

    render() {
        return (
            <div className='pokemonMove'>

                <Autocomplete
                    id={`pokemon-Move-Selector-Autocomplete-${this.props.pokemonNumber}`}
                    options={this.props.moveList}
                    getOptionLabel={(option) => option}
                    /*  When form is submit, perform the function, in this case
                    console.log the chosen pokemon name. The event is needed to help format
                    the response to only return the object as opposed to all the extra information
                    that the code uses to identify the request.*/
                    onChange={(event, newValue) => {
                        this.selectedMoveApiCall(newValue)
                        /* this.grabPokemonApiInfo(newValue.pokeAPI_id); */
                    }}
                    /*  Whenever the text field is edited, perform the function,
                    in this case log the text*/
                    /* onInputChange={(event, newInputValue) => {
                        console.log(newInputValue)
                    }} */
                    style={{
                        width: '100%', 
                        background: 'white', 
                        padding: '5px 0 0 0',
                        /* For padding style it goes top, right, bottom, left */
                        margin: '5px 0 0 0'    
                    }}
                    renderInput={(params) => <TextField {...params} label={`Move ${this.props.moveNumber}`} variant="outlined" />}
                />

                <div className='pokemonMovePower'>
                    {this.addMovePowerHtml()}
                </div>

                <div className='pokemonMoveType'>
                    {this.addMoveTypeHtml()}
                </div>
        </div>
        )
    }
}

export default TeamMemberMoveSelector;