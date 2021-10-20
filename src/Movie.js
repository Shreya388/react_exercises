import React from 'react';

const Movie = ({name, actors}) => {
    return ( 
        <div>
            <h1>{name}</h1>
            <p>{actors}</p>
        </div>
  
  
     );
};
 
export default Movie;