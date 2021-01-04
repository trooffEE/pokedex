import React from 'react';
import * as logo from '../Images/logo.png';
import './SearchSection.css';

const SearchSection = (props) => {

    let input = React.createRef();
    const changeText = () => {
        if (input.current.value !== '') {
            props.isSearchingCreator(true);
        } else if (input.current.value === '') {
            props.isSearchingCreator(false);
        }
        props.onInputChange(input.current.value);
    }

    return (
        <>
            <img src={logo} alt="Pokemon logo" className="logo"/>
            <p className='hint'>Try to find your pokemon! Click on their pretty face!</p>
            <input 
                type="search"
                className="pokemon-search__input"
                placeholder="Gotta catch em all!"
                value={props.currentPokemonSearchValue}
                onChange={changeText}
                ref={input}
            />  
        </>
    );
}

export default SearchSection;
