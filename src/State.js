import React, { useState } from "react";


const StateTutorial = () => {
    const [inputValue, setInputValue] = useState("Pedro");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }

    return ( 
        <div>
            <input placeholder="..." onChange ={onChange} />
            { inputValue }
        </div>
     );
}
 
export default StateTutorial;