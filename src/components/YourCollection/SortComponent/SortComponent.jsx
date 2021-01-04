import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import './SortComponent.css';
import ListOfOrderOptions from './ListOfOrderOptions/ListOfOrderOptions';

const SortComponent = (props) => {

    const showListOfOrderOptions = () => {
        if(!props.isFilterClicked) {
            return null
        }
        
        return <ListOfOrderOptions alphabetFilter={props.alphabetFilter}
                                    hpFilter={props.hpFilter}
                                    attackFilter={props.attackFilter}
                                    defenceFilter={props.defenceFilter}
                                    speedFilter={props.speedFilter}
                                    currentFilter={props.currentFilter}
                                    currentFilterSetter={props.currentFilterSetter}/>
    }

    return (
        <div className="order-options">
            <button className="order-options-btn filter-main" 
                    onClick={props.toggleFilter}><FontAwesomeIcon icon={faFilter}/></button>
            {showListOfOrderOptions()}
        </div>
    );
}

export default SortComponent;
