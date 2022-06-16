import React, {useState} from 'react';
import {nanoid} from "nanoid";
import IndivInputs from "../../Components/IndivCalc/IndivInputs";
import IndivCalc from "../../Components/IndivCalc/IndivCalc";
import ShowIndivCheque from "../../Components/IndivCalc/ShowIndivCheque";

const IndividualBuilder = () => {
    const [people, setPeople] = useState([]);

    const [charges, setCharges] = useState({
        percentage: 0,
        delivery: 0
    });

    const [total, setTotal] = useState(0);

    const [disabled, setDisabled] = useState(true);

    const [indivShowCheque, setIndivShowCheque] = useState(false);

    const onAddPerson = () => {
        setPeople(prev => ([
            ...prev,
            {userName: '', amount: '', id: nanoid(), amountEach: ''}
        ]));

    };
    const onChange = (name, value, id) => {

        setPeople(() => {
            return people.map(person => {
                if (person.id === id) {
                    return {
                        ...person,
                        [name]: value,
                    }
                }
                return person;
            });
        });
        if (people.length !== 0) {
            setDisabled(false);
        }
    };

    const onDelete = (id) => {
        setPeople(() => people.filter(person => person.id !== id));
        console.log(people);
    };

    // if (typeof (value) !== "number") {
    //     alert("Please enter correct values");
    //     copyCharges[key] = 0;
    // }

    const onChargesChange = (name, value) => {
        const copyCharges = {...charges};
        console.log(copyCharges);
        for (const key in copyCharges) {
            if (key === name){
                 copyCharges[key] = value;
            }
        }
        setCharges(copyCharges);
        console.log(charges);
    };

    const indivCalculate = () => {
        setTotal(0);
        const amount = people.reduce((acc, person) => acc + parseInt(person.amount), 0);
        setTotal(amount + (amount / 100 * parseInt(charges.percentage)) + parseInt(charges.delivery));

        const peopleCopy = people.map(person => {
            const amountEach = parseInt(person.amount) + (parseInt(person.amount) / 100 * parseInt(charges.percentage)) + (parseInt(charges.delivery) / people.length);
            return {
                ...person,
                amountEach: Math.ceil(amountEach),
            };
        });

        setPeople(peopleCopy);
        console.log(people);
        setIndivShowCheque(true);
    };

    let indivCalsResult = null;

    if (indivShowCheque) {
        indivCalsResult =
            <ShowIndivCheque
                people={people}
                total={total}
            />;
    }

    return (
        <>
            <IndivInputs
                people={people}
                onCLick={onAddPerson}
                onChange={onChange}
                onDelete={onDelete}
                onCharge={onChargesChange}
            />
            <IndivCalc
                onClick={indivCalculate}
                disabled={disabled}
            />
            <div className="ShowCheque">
                {indivCalsResult}
            </div>
        </>
    );
};

export default IndividualBuilder;