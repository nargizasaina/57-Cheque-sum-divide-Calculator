import React from 'react';

const Input = (props) => {
    switch (props.type) {
        case "people":
            return (
                <p key={props.type}>
                    People: <input type="text" onChange={props.onChange}/>
                </p>
            );
        case "sum":
            return (
                <p key={props.type}>
                    Order sum: <input type="text" onChange={props.onChange}/> KGS
                </p>
            );
        case "percentage":
            return (
                <p key={props.type}>
                    Service charge: <input type="text" onChange={props.onChange}/>  %
                </p>
            );
        case "delivery":
            return (
                <p key={props.type}>
                    Delivery: <input type="text" onChange={props.onChange}/> KGS
                </p>
            );
        default:
            return null;
    }
};

export default Input;