import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Pokedex from '../Pokedex';

import './TeamMemberSelector.css';
/* const placeholderAutoComplete = [
    {
        "pokemonName": "Bulbasaur",
        "pokeAPI_id": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
        "pokemonName": "Ivysaur",
        "pokeAPI_id": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
        "pokemonName": "Venusaur",
        "pokeAPI_id": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
        "pokemonName": "Charmander",
        "pokeAPI_id": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/"
    }
] */

class TeamMemberSelector extends Component {
    render() {
        console.log(Pokedex)
        return(
            <div className="TeamMemberSelectorContainer">

                <div className="team-Member-General">
                    <Autocomplete
                        id="pokemon-Selector-Autocomplete"
                        options={Pokedex}
                        getOptionLabel={(option) => option.pokemonName}
                        style={{ width: 180 }}
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