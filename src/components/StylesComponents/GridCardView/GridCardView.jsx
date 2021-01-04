import React from 'react';
import './GridCardView.css';

const GridCardView = (props) => {
    return (
        <div className="card-container">
            {props.children}
        </div>
    );
}

export default GridCardView;
