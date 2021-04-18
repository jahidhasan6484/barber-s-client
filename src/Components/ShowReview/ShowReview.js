import React from 'react';
import './ShowReview.css';

const ShowReview = ({review}) => {
    return (
        <div className="col-md-11 reviewCard">
            <div>
                <h4>"{review?.description}"</h4>
                <p className="text-right">-{review?.name}</p>
            </div>
        </div>
    );
};

export default ShowReview;