import React, {useState} from 'react';
import Inputs from "../../Components/IndivCalc/Inputs";
import {nanoid} from "nanoid";

const IndividualBuilder = () => {
    const [people, setPeople] = useState([]);

    const [charges, setCharges] = useState({
        percentage: 0,
        delivery: 0
    });

    const [total, setTotal] = useState(0);

    const [disabled, setDisabled] = useState(true);

    // const changeInputs = (type, value) => {
    //     setPeople(prev => ({
    //         ...prev,
    //         [type]: value,
    //     }));
    //     console.log(cheque);
    //
    //
    // };



    const onAddPerson = () => {
        setPeople(prev => ([
            ...prev,
            {userName: '', amount: '', id: nanoid()}
        ]));



        if (people.length !== 0) {
            setDisabled(false);
        }
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
        console.log(people);
    };

    const onDelete = (id) => {
        setPeople(() => people.filter(person => person.id !== id));
        console.log(people);
    };

    return (
        <>
            <Inputs
                people={people}
                onCLick={onAddPerson}
                onChange={onChange}
                onDelete={onDelete}
            />
        </>
    );
};

export default IndividualBuilder;