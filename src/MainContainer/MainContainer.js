import React, { Component } from 'react';
import { PokePlannerProvider } from '../PokeAppContext';
import "./MainContainer.css";

import SettingsContainer from '../SettingsContainer/SettingsContainer';
import TeamSectionContainer from '../TeamSectionContainer/TeamSectionContainer';
import CoverageSuggestionContainer from '../CoverageSuggestionContainer/CoverageSuggestionContainer';
import pokemonTypeInfo from '../PokemonTypeInfo';


class PokeContainer extends Component {

    state = {
        member1: {
            name: '',
            type1: '',
            type2: '',
            attack1: {damage: 0, damageClass: '', name: '', type: ''},
            attack2: {damage: 0, damageClass: '', name: '', type: ''},
            attack3: {damage: 0, damageClass: '', name: '', type: ''},
            attack4: {damage: 0, damageClass: '', name: '', type: ''},
            stats: [0,0,0,0,0,0]
        },
        member2: {
            name: '',
            type1: '',
            type2: '',
            attack1: {damage: 0, damageClass: '', name: '', type: ''},
            attack2: {damage: 0, damageClass: '', name: '', type: ''},
            attack3: {damage: 0, damageClass: '', name: '', type: ''},
            attack4: {damage: 0, damageClass: '', name: '', type: ''},
            stats: [0,0,0,0,0,0]
        },
        member3: {
            name: '',
            type1: '',
            type2: '',
            attack1: {damage: 0, damageClass: '', name: '', type: ''},
            attack2: {damage: 0, damageClass: '', name: '', type: ''},
            attack3: {damage: 0, damageClass: '', name: '', type: ''},
            attack4: {damage: 0, damageClass: '', name: '', type: ''},
            stats: [0,0,0,0,0,0]
        },
        member4: {
            name: '',
            type1: '',
            type2: '',
            attack1: {damage: 0, damageClass: '', name: '', type: ''},
            attack2: {damage: 0, damageClass: '', name: '', type: ''},
            attack3: {damage: 0, damageClass: '', name: '', type: ''},
            attack4: {damage: 0, damageClass: '', name: '', type: ''},
            stats: [0,0,0,0,0,0]
        },
        member5: {
            name: '',
            type1: '',
            type2: '',
            attack1: {damage: 0, damageClass: '', name: '', type: ''},
            attack2: {damage: 0, damageClass: '', name: '', type: ''},
            attack3: {damage: 0, damageClass: '', name: '', type: ''},
            attack4: {damage: 0, damageClass: '', name: '', type: ''},
            stats: [0,0,0,0,0,0]
        },
        member6: {
            name: '',
            type1: '',
            type2: '',
            attack1: {damage: 0, damageClass: '', name: '', type: ''},
            attack2: {damage: 0, damageClass: '', name: '', type: ''},
            attack3: {damage: 0, damageClass: '', name: '', type: ''},
            attack4: {damage: 0, damageClass: '', name: '', type: ''},
            stats: [0,0,0,0,0,0]
        }
    };

    changeTeamTypeContext = (type, changeType) => {
        /* this.setState({contextSentence: newSentence}) */
        console.log(`${changeType}ing one to the team type of ${type}`)
    }

    changeTeamMoveContext = (pokemonNumber, moveNumber, moveName, moveType, moveDamage, damageClass) => {
        console.log(pokemonNumber)
        console.log(moveNumber)
        console.log(moveName)
        console.log(moveType)
        console.log(moveDamage)
        console.log(damageClass)

        let tempContext = {...this.state};
        let changedPokemon = tempContext[`member${pokemonNumber}`];
        let changedMove = changedPokemon[`attack${moveNumber}`];

        console.log(changedMove);

        changedMove.name = moveName;
        changedMove.type = moveType;
        changedMove.damage = moveDamage;
        changedMove.damageClass = damageClass;

        changedPokemon[`attack${moveNumber}`] = changedMove;

        this.setState({[`member${pokemonNumber}`]: changedPokemon});
    }

    textContextFunctionAccessibility = () => {
        console.log('Has access to context functions')
    }
    
    //  Container for main application. Holds the settings tab, team builder, and
    //team coverage components within it for organization
    render() {
        return (
            <div className="pokePlannerMainContainer">

                <PokePlannerProvider value={{...this.state, 
                    changeTeamTypeContext: this.changeTeamTypeContext,
                    changeTeamMoveContext: this.changeTeamMoveContext,
                    textContextFunctionAccessibility: this.textContextFunctionAccessibility
                }}>

                    <SettingsContainer />

                    <TeamSectionContainer />

                    <CoverageSuggestionContainer />   

                </PokePlannerProvider>
                                   
            </div>
            
        )
    }
}

export default PokeContainer;