import React, {useState} from 'react';
import EqualBuilder from "./Containers/EqualBuilder/EqualBuilder";
import IndividualBuilder from "./Containers/IndividualBuilder/IndividualBuilder";
import './App.css';

const App = () => {
    const [formData, setFormData] = useState("equal");

    const onChange = value => {
        setFormData(value);
    };

    return (
        <div className="Container">
            <div className="RadioInputs">
                <p>How to calculate order sum?</p>
                <form>
                    <input
                        key="choice1"
                        type={"radio"}
                        name="pay-choice"
                        value="equal"
                        id="choice1"
                        onChange={(e) => onChange(e.target.value)}
                        checked={formData === "equal"}
                    />
                    <label htmlFor="choice1"> Divide equally to all </label><br/>
                    <input
                        key="choice2"
                        type={"radio"}
                        name="pay-choice"
                        value="individual"
                        id="choice2"
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <label htmlFor="choice2"> Individually for each </label>
                </form>
            </div>
            {formData === "equal" ? [<EqualBuilder/>] : [<IndividualBuilder/>]}
        </div>
    );
};

export default App;