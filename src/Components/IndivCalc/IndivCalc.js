import React from 'react';

const IndivCalc = (props) => {
    return <p className="CalcBtnWrap">
            <button className="CalcBtn" onClick={props.onClick}>Calculate</button>
        </p>;
};

export default IndivCalc;