import React, {useState} from 'react';
import Inputs from "../../Components/EqualCalc/EqualInputs/Inputs";
import EqualCalc from "../../Components/EqualCalc/EqualCalc";
import ShowEqualCheque from "../../Components/EqualCalc/ShowEqualCheque";

const EqualBuilder = () => {
    const [cheque, setCheque] = useState({
        people: 0,
        sum: 0,
        percentage: 0,
        delivery: 0
    });

    const [total, setTotal] = useState(0);

    const [showCheque, setShowCheque] = useState(false);

    const [disabled, setDisabled] = useState(true);

    const changeInputs = (type, value) => {
        setCheque(prev => ({
            ...prev,
            [type]: value,
        }));

        if (cheque.people !== 0 && cheque.sum !== 0) {
            setDisabled(false);
        }
    };

    const equalCalculate = () => {
        setTotal(parseInt(cheque.sum) + (parseInt(cheque.sum) / 100 * parseInt(cheque.percentage)) + parseInt(cheque.delivery));
        setShowCheque(true);
    };

    let calcResults = null;

    if (showCheque) {
        calcResults =
            <ShowEqualCheque
                people={cheque.people}
                total={total}
                amount={Math.ceil(total/cheque.people)}
            />;
    }

    return (
        <>
            <Inputs
                cheque={cheque}
                onChange={changeInputs}
            />
            <EqualCalc
                calculate={equalCalculate}
                disabled={disabled}
            />
            <div className="ShowCheque">
                {calcResults}
            </div>
        </>
    );
};

export default EqualBuilder;