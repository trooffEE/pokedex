import React, { Component } from 'react';
import { connect } from 'react-redux';
import YourCollection from './YourCollection';
import { handleAddClick, handleRemoveClick} from '../../redux/reducers/yourCollection';

class YourCollectionContainer extends Component {
    render() {
        return (
            <YourCollection {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    collection: state.yourCollection.collection,
});



export default connect(mapStateToProps,
    {
        handleAddClick,
        handleRemoveClick
    })
(YourCollectionContainer);
