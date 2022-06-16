import React from 'react';
import Input from "./Input";
import './Inputs.css';

const Inputs = (props) => {
    const chequeKeys = [];

    Object.keys(props.cheque).forEach(type => {
        chequeKeys.push(<Input key={type} type={type} onChange={e => props.onChange(type, e.target.value)}/>);
    });

    return (
        <div className="Inputs">
            {chequeKeys}
        </div>
    );
};

export default Inputs;