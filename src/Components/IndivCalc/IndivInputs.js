import React from 'react';
import './IndivInputs.css';

const IndivInputs = (props) => {
    const input = props.people.map(person => (
        <form className="InputWrap" key={person.id}>
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
        </form>
    ));

    return (
        <div className="Inputs">
            {input}
            <button onClick={props.onCLick} className="AddBtn">Add a person</button>
            <p>Service charge: <input
                type="text"
                name="percentage"
                className="Charges"
                onChange={(e) => props.onCharge(e.target.name, e.target.value)}
            /> % </p>
            <p>Delivery charge: <input
                type="text"
                name="delivery"
                className="Charges"
                onChange={(e) => props.onCharge(e.target.name, e.target.value)}
            /> KGS </p>
        </div>
    );
};

export default IndivInputs;