import React, { useState } from "react";


const Reducer = () => {
    
    const [count, setCount] = useState(2);
    const [showText, setShowText] = useState(false);

    return  (
        <div>
            <h1>{count}</h1>
            <button
             onClick={() => {
                 setCount(count + 2);
                 setShowText(showText);
             }}
             >
                 Click Here
            </button>

            {showText && <p>This is a text</p>}
        </div>
    );
};
 

 
export default Reducer;