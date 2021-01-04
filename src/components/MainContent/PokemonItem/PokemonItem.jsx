import React from 'react';
import { NavLink } from 'react-router-dom';
import PokemonStatsHOC from '../../HOCS/PokemonHOC';
import './PokemonItem.css'
import PokemonItemButton from './PokemonItemButton/PokemonItemButton';
import PokemonItemDescription from './PokemonItemDescription/PokemonItemDescription';
import PokemonItemImage from './PokemonItemImage/PokemonItemImage';
import PokemonItemStats from './PokemonItemStats/PokemonsItemStats';

const PokemonItem = ({pokemon, handleAddClick, handleRemoveClick, collection, pokemon: {name, image}}) => {

    const isPokemonInCollection = collection.some(colPokemon => colPokemon.id === pokemon.id);
    const btnClass = isPokemonInCollection ?  'pokemon-remove-btn' : 'pokemon-add-btn';
    const btnInnerText = isPokemonInCollection ? "Remove Pokemon" : "Add Pokemon";
    
    const handleClick = () => {
        if (isPokemonInCollection) {
            handleRemoveClick(pokemon);
        } else {
            handleAddClick(pokemon)
        }
    }
    const PokemonItemStatsWithData = PokemonStatsHOC(pokemon)(PokemonItemStats);

    return (
        <div className="pokemon-item">
            <PokemonItemImage image={image} id={pokemon.id}/>
            <div className="pokemon-info__text-container">
                <PokemonItemDescription name={name}/>
                <PokemonItemStatsWithData />
                <PokemonItemButton btnClass={btnClass}
                                   btnInnerText={btnInnerText}
                                   handleClick={handleClick}/>
            </div>
        </div>
    );
}

export default PokemonItem;
