import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import { faRulerVertical } from '@fortawesome/free-solid-svg-icons'
const PokemonCharacteristic = ({ height, weight}) => {
    return (
        <ul className="pokemon-height-weight__container">
            <li className="poke-height-weight poke-height"><FontAwesomeIcon icon={faRulerVertical} /> {height} m.</li>
            <li className="poke-height-weight poke-weight"><FontAwesomeIcon icon={faWeightHanging} /> {weight} kg.</li>
        </ul>
    );
}

export default PokemonCharacteristic;
