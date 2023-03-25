import { useState } from "react";

import { stateData } from "./StateData";

const DropdownField = () => {
    const [dropdownActive, setDropdownActive] = useState(false);

    return(
        <fieldset className="dropdown">
        <button className="dropdown-field" onClick={() => setDropdownActive((prevState) => !prevState)}>
            Select required states
        </button>
        {dropdownActive ? <div className="state-panel">
            {stateData.map((list, index) => (
                <div>
                    <input id={list.code} type="checkbox" />
                    <label htmlFor={list.code} >{list.name}</label>
                </div>
            ))}
        </div> : null}
        </fieldset>
    )
}

export default DropdownField;