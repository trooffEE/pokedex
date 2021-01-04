import React from 'react';

const PokemonItemButton = ({btnClass, btnInnerText, handleClick}) => {
    return (
        <div className="interact-container">
            <button className={`pokemon-btn ${btnClass}`}
                onClick={() => handleClick()} 
                alt="Button for removing and adding pokemon to 
                    your personal bestiary">
                {btnInnerText}
            </button>
        </div>
    );
}

export default PokemonItemButton;
