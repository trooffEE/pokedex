import React from 'react';
import PokemonHOC from '../HOCS/PokemonHOC';
import Wrapper from '../StylesComponents/Wrapper/Wrapper';
import GridPokemonLayout from './GridPokemonLayout/GridPokemonLayout';
import './Pokemon.css';
import PokemonAvatar from './PokemonAvatar/PokemonAvatar';
import PokemonCharacteristic from './PokemonCharacteristic/PokemonCharacteristic';
import PokemonContentIsLoading from './PokemonContentIsLoading/PokemonContentIsLoading';
import PokemonStatsTemplate from './PokemonStats/PokemonStats';

const Pokemon = (props) => {

    if (props.pokemonLoadingInProgress) {
        return <PokemonContentIsLoading />;
    }

    const {pokemon, pokemon: { name, image, weight, height }} = props;
    
    const PokemonStats = PokemonHOC(pokemon)(PokemonStatsTemplate);

    return (
        <div className="poke-wrapper">
            <h1 className="pokemon-name">{name.toUpperCase()}</h1>
            <Wrapper >
                <GridPokemonLayout >
                    <PokemonAvatar image={image}/>
                    <PokemonStats />
                    <PokemonCharacteristic weight={weight} height={height}/>
                </GridPokemonLayout>
            </Wrapper>
        </div>
    );
}

export default Pokemon;
