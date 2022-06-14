import React from 'react';

const Input = (props) => {
    switch (props.type) {
        case "people":
            return (
                <p>
                    People: <input type="text" onChange={props.onChange}/>
                </p>
            );
        case "sum":
            return (
                <p>
                    Order sum: <input type="text" onChange={props.onChange}/> KGS
                </p>
            );
        case "percentage":
            return (
                <p>
                    Service charge: <input type="text" onChange={props.onChange}/>  %
                </p>
            );
        case "delivery":
            return (
                <p>
                    Delivery: <input type="text" onChange={props.onChange}/> KGS
                </p>
            );
        default:
            return null;
    }
};

export default Input;