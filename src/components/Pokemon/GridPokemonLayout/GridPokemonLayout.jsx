import React from 'react';

const GridPokemonLayout = (props) => {
    return (
        <div className="grid-poke-layout">
            {props.children}
        </div>
    );
}

export default GridPokemonLayout;
