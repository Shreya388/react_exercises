import React, { useState ,useEffect } from "react";


const EffectTuto = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
       
        document.title = `You pressed the button ${count} times`;
            
        });
    
    
    return ( 
        <div>
            <p>you pressed the button {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
            
        </div>
     
    )}
 
export default EffectTuto;