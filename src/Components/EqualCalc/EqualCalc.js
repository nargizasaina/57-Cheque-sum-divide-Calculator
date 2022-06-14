import React from 'react';
import './EqualCalc.css';

const EqualCalc = (props) => {
    return <p className="CalcBtnWrap">
                <button className="CalcBtn" onClick={props.calculate} disabled={props.disabled}>Calculate</button>
           </p>;
};

export default EqualCalc;