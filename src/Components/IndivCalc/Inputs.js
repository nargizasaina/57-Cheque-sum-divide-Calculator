import React from 'react';
import './Inputs.css';

const Inputs = (props) => {
    const input = props.people.map(person => (
            <div className="InputWrap" key={person.id}>
                <input
                    type="text"
                    name="userName"
                    className="InputName"
                    value={person.userName}
                    onChange={(e) => props.onChange(e.target.name, e.target.value, person.id)}
                />
                <input
                    type="text"
                    name="amount"
                    className="InputAmount"
                    value={person.amount}
                    onChange={(e) => props.onChange(e.target.name, e.target.value, person.id)}
                /> KGS
                <button type="button" className="RemoveBtn" onClick={() => props.onDelete(person.id)}>Remove</button>
            </div>
        ));


    return (
        <div className="Inputs">
            {input}
            <button onClick={props.onCLick} className="AddBtn">Add a person</button>
        </div>
    );
};

export default Inputs;