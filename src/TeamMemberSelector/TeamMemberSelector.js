import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PokedexJSONList from '../Pokedex';

import './TeamMemberSelector.css';

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();



class TeamMemberSelector extends Component {

    grabPokemonApiInfo(pokemonId) {
        console.log(`The ID of the pokemon chosen is ${pokemonId}. This will
        then be used to make the API call.`)

        P.getPokemonByName(pokemonId) // with Promise
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log('There was an ERROR: ', error);
        });
    
      /* P.getPokemonByName(34, function(response, error) { // with callback
          if(!error) {
            console.log(response);
          } else {
            console.log(error)
          }
        });
    
      P.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/'])
        .then(function(response) {
          console.log(response); // resource function accepts singles or arrays of URLs/paths
        }); */
    }  

    render() {
        return(
            <div className="TeamMemberSelectorContainer">

                <div className="team-Member-General">
                    <Autocomplete
                        id="pokemon-Selector-Autocomplete"
                        options={PokedexJSONList}
                        getOptionLabel={(option) => option.pokemonName}
                        /*  When form is submit, perform the function, in this case
                        console.log the chosen pokemon name. The event is needed to help format
                        the response to only return the object as opposed to all the extra information
                        that the code uses to identify the request.*/
                        onChange={(event, newValue) => {
                            this.grabPokemonApiInfo(newValue.pokeAPI_id);
                        }}
                        /*  Whenever the text field is edited, perform the function,
                        in this case log the text*/
                        /* onInputChange={(event, newInputValue) => {
                            console.log(newInputValue)
                        }} */
                        style={{
                            width: '100%', 
                            background: 'white', 
                            padding: '5px 0 0 0' }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    />
                </div>

                <div className="team-Member-Moves">
                    <h2>{this.props.placeholderInfo} Moves</h2>
                </div>

                <div className="team-Member-Stats">
                    <h2>{this.props.placeholderInfo} Stats</h2>
                </div>

            </div>
            
        )
    }
}

export default TeamMemberSelector;