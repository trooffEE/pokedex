import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonItem from './PokemonItem';
import { handleAddClick, handleRemoveClick } from '../../../redux/reducers/yourCollection'

class PokemonItemContainer extends Component {
    render() {
        return (
            <PokemonItem {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    collection: state.yourCollection.collection
})

export default connect(mapStateToProps, {
    handleAddClick,
    handleRemoveClick
})(PokemonItemContainer);
