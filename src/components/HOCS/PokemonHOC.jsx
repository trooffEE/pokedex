import React, {Component} from 'react';

const PokemonHOC = (pokemon) => {

    const pokemonStats = {
        hp: pokemon.stats[0],
        attack: pokemon.stats[1],
        defense: pokemon.stats[2],
        speed: pokemon.stats[5],
        specAttack: pokemon.stats[3],
        specDefence: pokemon.stats[4]
    }

    let max = {
        maxTitle: null,
        value: 0
    };

    let avg = 0; 
    
    for (let key in pokemonStats) {
        avg += pokemonStats[key].base_stat;
        if (pokemonStats[key].base_stat > max.value) {
            max.value = pokemonStats[key].base_stat;
            max.maxTitle = key;
        }
    }
    avg = avg / 6;
    
    pokemonStats.max = max;
    pokemonStats.avg = avg;

    return (ComponentToWrap) => {
        return class extends Component {

            render() {
                return <ComponentToWrap pokemonStats={pokemonStats}/>
            }
        }
    }
}

export default PokemonHOC;
