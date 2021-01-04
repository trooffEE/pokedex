import React from 'react';
import './PokemonsItemStats.css';

const PokemonItemStats = ({pokemonStats}) => {
    const widthMax = 400;
    const lengthOfBar = {
        widthHP: {
            width: `${(pokemonStats.hp.base_stat / widthMax) * 100}%`
        },
        widthAttack: {
            width: `${(pokemonStats.attack.base_stat / widthMax) * 100}%`
        },
        widthDefense: {
            width: `${(pokemonStats.defense.base_stat / widthMax) * 100}%`
        },
        widthSpeed: {
            width: `${(pokemonStats.speed.base_stat / widthMax) * 100}%`
        },
    }

    return (
        <ul className="diagram">
            <li className="diagram__stat" style={lengthOfBar.widthHP}>
                <span className="diagram__stat-small-text">HP</span>
                <span className="diagram__stat-small-number">{pokemonStats.hp.base_stat}</span>
            </li>
            <li className="diagram__stat" style={lengthOfBar.widthAttack}>
                <span className="diagram__stat-small-text">ATC</span>
                <span className="diagram__stat-small-number">{pokemonStats.attack.base_stat}</span>
            </li> 
            <li className="diagram__stat" style={lengthOfBar.widthDefense}>
                <span className="diagram__stat-small-text">DEF</span>
                <span className="diagram__stat-small-number">{pokemonStats.defense.base_stat}</span>
            </li>
            <li className="diagram__stat" style={lengthOfBar.widthSpeed}>
                <span className="diagram__stat-small-text">SPD</span>
                <span className="diagram__stat-small-number">{pokemonStats.speed.base_stat}</span>
            </li>
        </ul>
    );
}

export default PokemonItemStats;
