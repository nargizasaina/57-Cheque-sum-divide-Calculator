import React, {useState} from 'react';
import Inputs from "../../Components/EqualCalc/Inputs/Inputs";

const EqualBuilder = () => {
    const [cheque, setCheque] = useState({
        people: 0,
        sum: 0,
        percentage: 0,
        delivery: 0
    });

    const [total, setTotal] = useState(0);

    const [amount, setAmount] = useState(0);

    const changeInputs = (type, value) => {
        setCheque(prev => ({
            ...prev,
            [type]: value,
        }));
        console.log(cheque);

        setTotal(cheque.sum + (cheque.sum / 100 * cheque.percentage) + cheque.delivery);
        setAmount(total / cheque.people);
    };

    return (
        <>
            <Inputs
                cheque={cheque}
                onChange={changeInputs}
            />
        </>
    );
};

export default EqualBuilder;