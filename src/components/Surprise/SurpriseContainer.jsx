import React, { Component } from 'react';
import { connect } from 'react-redux';
import Surprise from './Surprise';

class SurpriseContainer extends Component {
    render() {
        return (
            <Surprise {...this.props}/>
        );
    }
}

const mapStateToProps = (store) => ({
    // props
})

connect(mapStateToProps,
    {

    })
(SurpriseContainer);

export default SurpriseContainer;
