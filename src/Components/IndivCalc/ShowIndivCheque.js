import React from 'react';

const ShowIndivCheque = (props) => {
    const chequeForEach = props.people.map(person => {
        return <p key={person.id}> <b>{person.userName}:</b> {person.amountEach} KGS</p>;
    });

    return (
        <div>
            <p>Total sum: {props.total} KGS</p>
            {chequeForEach}
        </div>
    );
};

export default ShowIndivCheque;