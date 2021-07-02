import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PokedexJSONList from '../Pokedex';

import './TeamMemberSelector.css';

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

class TeamMemberSelector extends Component {

    state = {
        pokemonInfo: [],
        pokemonStats: []
    }

    /* Makes API call to the PokeAPI if the info requested isnt already cached*/
    grabPokemonApiInfo = (pokemonId) => {

        P.getPokemonByName(pokemonId) // with Promise
        .then(function(response) {
            return response;
        })
        /* Used the returned response to save info to the state for usage */
        .then(pokemonApiResponse => {
            this.setState({pokemonInfo: pokemonApiResponse})
            this.generatePokemonStats(pokemonApiResponse.stats)
        })
        .catch(function(error) {
          console.log('There was an ERROR: ', error);
        });

    };

    /* Iterates through the object, grabbing each stat and saving it 
    as an array to the state for use */
    generatePokemonStats = (stats) => {
        let pokemonStatArray = [];

        for(let i = 0; i < 6; i++) {
            let currantStat = stats[i];
            pokemonStatArray.push(currantStat.base_stat);
        }

        this.setState({pokemonStats: pokemonStatArray});
    }

    generateStatHTML() {
        let currantStatState = this.state.pokemonStats;
        let pokemonStatHtml = [];

        /* Checks if the stats state is empty*/
        if(currantStatState.length === 0) {
            /* If it is empty, change html to tell the user to pick a pokemon*/
            pokemonStatHtml.push(
                <div>
                    <h1>Please choose a pokemon</h1>
                </div>
                
            )
        }else {
            /* Generate html for pokemon stats*/
            pokemonStatHtml.push(
                /* Commented examples below are based on espeon's stats */
                <div className="pokemonStatsContainer">

                    <div className="hpStatContainer">
                        <div className="statText hp">
                            <p>Hp: {currantStatState[0]}</p>
                        </div>

                        <div className="statBarContainer hp">
                            <p className="statBar hp" style={{width: `${(currantStatState[0]/255)*100}%`, backgroundColor: '#FF0000'}}>.</p>
                            {/* bar color will be red, length will be (65/255)*100% */}
                        </div>
                    </div>

                    <div className="atkStatContainer">
                        <div className="statText attack">
                            <p>Atk: {currantStatState[1]}</p>
                        </div>

                        <div className="statBarContainer attack">
                        <p className="statBar attack" style={{width: `${(currantStatState[1]/190)*100}%`, backgroundColor: '#F08030'}}>.</p>
                            {/* bar color will be orange, length will be (65/190)*100% */}
                        </div>
                    </div>

                    <div className="defStatContainer">
                        <div className="statText defense">
                            <p>Def: {currantStatState[2]}</p>
                        </div>

                        <div className="statBarContainer defense">
                            <p className="statBar defense" style={{width: `${(currantStatState[2]/230)*100}%`, backgroundColor: '#F8D030'}}>.</p>
                            {/* bar color will be yellow, length will be (60/230)*100% */}
                        </div>
                    </div>

                    <div className="spaStatContainer">
                        <div className="statText specialAttack">
                            <p>SpA: {currantStatState[3]}</p>
                        </div>

                        <div className="statBarContainer specialAttack">
                            <p className="statBar specialAttack" style={{width: `${(currantStatState[3]/194)*100}%`, backgroundColor: '#6890F0'}}>.</p>
                            {/* bar color will be blue, length will be (130/194)*100% */}
                        </div>
                    </div>

                    <div className="spdStatContainer">
                        <div className="statText specialDefense">
                            <p>SpD: {currantStatState[4]}</p>
                        </div>

                        <div className="statBarContainer specialDefense">
                            <p className="statBar specialDefense" style={{width: `${(currantStatState[4]/230)*100}%`, backgroundColor: '#78C850'}}>.</p>
                            {/* bar color will be green, length will be (95/230)*100% */}
                        </div>
                    </div>

                    <div className="speStatContainer">
                        <div className="statText speed">
                            <p>Spe: {currantStatState[5]}</p>
                        </div>

                        <div className="statBarContainer speed">
                            <p className="statBar speed" style={{width: `${(currantStatState[5]/200)*100}%`, backgroundColor: '#AA00FF'}}>.</p>
                            {/* bar color will be purple, length will be (110/200)*100% */}
                        </div>
                    </div>
                
                </div>
                
            )
        }

        return pokemonStatHtml;
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
                            padding: '5px 0 0 0',
                            /* For padding style it goes top, right, bottom, left */
                            margin: '5px 0 0 0'    
                        }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    />
                </div>

                <div className="team-Member-Moves">
                    <h2>{this.props.placeholderInfo} Moves</h2>
                </div>

                <div className="team-Member-Stats">
                    {this.generateStatHTML()}
                </div>

            </div>
            
        )
    }
}

export default TeamMemberSelector;