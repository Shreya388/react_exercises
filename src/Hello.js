import React from 'react';
import { useCountRenders } from './useCountRenders'

const Hello = React.memo(({ increment }) => {
   useCountRenders()
    
    return ( <button onClick={increment}>Hello!</button>);
});
 
export default Hello;
