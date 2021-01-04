import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'
import './ListOfOrderOptions.css';

const ListOfOrderOptions = (props) => {

    return (
        <div className="order-options-stats__container">
            <button className={`order-options-btn custom-stats ${props.currentFilter === 0 ? ' active-filter' : ''}`}
                    onClick={() => {
                        props.currentFilterSetter(0);
                        props.alphabetFilter();
                    }}><FontAwesomeIcon icon={faSortAlphaDown}/></button>  
            <button className={`order-options-btn custom-stats ${props.currentFilter === 1 ? ' active-filter' : ''}`}
                    onClick={() => {
                        props.currentFilterSetter(1);
                        props.hpFilter();
                    }}>HP</button>  
            <button className={`order-options-btn custom-stats ${props.currentFilter === 2 ? ' active-filter' : ''}`}
                    onClick={() => {
                        props.currentFilterSetter(2);
                        props.attackFilter();
                    }}>ATC</button>  
            <button className={`order-options-btn custom-stats ${props.currentFilter === 3 ? ' active-filter' : ''}`}
                    onClick={() => {
                        props.currentFilterSetter(3);
                        props.defenceFilter();
                    }}>DEF</button>  
            <button className={`order-options-btn custom-stats ${props.currentFilter === 4 ? ' active-filter' : ''}`}
                    onClick={() => {
                        props.currentFilterSetter(4);
                        props.speedFilter();
                    }}>SPD</button>  
        </div>
    );
}

export default ListOfOrderOptions;
