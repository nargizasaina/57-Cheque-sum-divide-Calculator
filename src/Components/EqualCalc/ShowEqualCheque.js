import React from 'react';
import './ShowEqualCheque.css';

const ShowEqualCheque = (props) => {
    return (
        <>
            <p>Total sum: {props.total} KGS</p>
            <p>Amount of people: {props.people}</p>
            <p>Amount to be paid by each: {props.amount} KGS</p>
        </>
    );
};

export default ShowEqualCheque;