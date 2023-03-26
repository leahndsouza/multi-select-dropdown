import { useState } from "react";

import { stateData } from "./StateData";

const DropdownField = () => {
    const [dropdownActive, setDropdownActive] = useState(false);
    const [selectedStates, setSelectedStates] = useState([]);

    const handleValue = (event) => {
        const {checked,id} = event.target;
        let temp_state = selectedStates;
        if(checked === true) {
            let state_name = stateData.filter((dat, idx) => id === dat.code)[0]
            temp_state.push(state_name);
        } else {
            let index = -1;
            index = temp_state.findIndex(item => item.code === id);
            temp_state.splice(index,1);
        }
        setSelectedStates(temp_state);
        console.log('states',selectedStates);
    }


    return(
        <fieldset className="dropdown">
        <button className="dropdown-field" onClick={() => setDropdownActive((prevState) => !prevState)}>
            Select required states
        </button>
        {dropdownActive ? 
        <div className="state-panel">
            {stateData.map((list, index) => (
                <fieldset key={`${index}`}  >
                    <input id={list.code} type="checkbox" onClick={(e) => handleValue(e)} />
                    <label htmlFor={list.code}  >{list.name}</label>
                </fieldset>
            ))}
        </div> : null}
        </fieldset>
    )
}

export default DropdownField;