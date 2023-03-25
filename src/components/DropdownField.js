import { useState } from "react";

const DropdownField = () => {
    const [dropdownActive, setDropdownActive] = useState(false);

    return(
        <>
        <button className="dropdown-field" onClick={() => setDropdownActive((prevState) => !prevState)}>
            Select required states
        </button>
        {dropdownActive ? <div className="state-panel">Hello World</div> : null}
        </>
    )
}

export default DropdownField;