import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFilter, alphabetFilter, hpFilter, attackFilter, defenceFilter, speedFilter, currentFilterSetter } from '../../../redux/reducers/yourCollection';
import SortComponent from './SortComponent';

class SortComponentContainer extends Component {
    render() {
        return (
            <SortComponent {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isFilterClicked: state.yourCollection.isFilterClicked,
    currentFilter: state.yourCollection.currentFilter,
});

export default connect(mapStateToProps,{
    toggleFilter,
    alphabetFilter,
    hpFilter,
    attackFilter,
    defenceFilter,
    speedFilter, 
    currentFilterSetter
})(SortComponentContainer);
