import React from 'react';

const PokemonStats = ({ pokemonStats}) => {
    const lengthMax = pokemonStats.max.value + pokemonStats.avg / 2;
    const lengthOfBar = {
        lengthHP: {
            height: `${(pokemonStats.hp.base_stat / lengthMax) * 100}%`
        },
        lengthAttack: {
            height: `${(pokemonStats.attack.base_stat / lengthMax) * 100}%`
        },
        lengthDefense: {
            height: `${(pokemonStats.defense.base_stat / lengthMax) * 100}%`
        },
        lengthSpeed: {
            height: `${(pokemonStats.speed.base_stat / lengthMax) * 100}%`
        },
        lengthSpecialAttack: {
            height: `${(pokemonStats.specAttack.base_stat / lengthMax) * 100}%`
        },
        lengthSpecialDefence: {
            height: `${(pokemonStats.specDefence.base_stat / lengthMax) * 100}%`
        },
    }

    return (
        <ul className="pokemon-diagram-stats">
            <li className="pokemon-diagram-stat" style={lengthOfBar.lengthHP}>
                <span className="pokemon-diagram-stat-small-number">{pokemonStats.hp.base_stat}</span>
                <span className="pokemon-diagram-stat-small-text">HP</span>
            </li>
            <li className="pokemon-diagram-stat" style={lengthOfBar.lengthAttack}>
                <span className="pokemon-diagram-stat-small-number">{pokemonStats.attack.base_stat}</span>
                <span className="pokemon-diagram-stat-small-text">Attack</span>
            </li>
            <li className="pokemon-diagram-stat" style={lengthOfBar.lengthDefense}>
                <span className="pokemon-diagram-stat-small-number">{pokemonStats.defense.base_stat}</span>
                <span className="pokemon-diagram-stat-small-text">Defence</span>
            </li>
            <li className="pokemon-diagram-stat" style={lengthOfBar.lengthSpeed}>
                <span className="pokemon-diagram-stat-small-number">{pokemonStats.speed.base_stat}</span>
                <span className="pokemon-diagram-stat-small-text">Speed</span>
            </li>
            <li className="pokemon-diagram-stat" style={lengthOfBar.lengthSpecialAttack}>
                <span className="pokemon-diagram-stat-small-number">{pokemonStats.speed.base_stat}</span>
                <span className="pokemon-diagram-stat-small-text">Spec Attack</span>
            </li>
            <li className="pokemon-diagram-stat" style={lengthOfBar.lengthSpecialDefence}>
                <span className="pokemon-diagram-stat-small-number">{pokemonStats.speed.base_stat}</span>
                <span className="pokemon-diagram-stat-small-text">Spec Defence</span>
            </li>
        </ul>
    );
}

export default PokemonStats;
