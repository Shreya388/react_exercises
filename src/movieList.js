import React, { useState } from 'react';

const MovieList = () => {
    const [movies, setMovies] = useState([
    {
        name: "la la land",
        actors: "emma and ryan",
    
    },
    {
        name: "mirzapur",
        actors: "golu, dimpi, bablu, guddu, munna, kaleen, sweety etc.",
    },
    {
        name: "unexpected journey",
        actors: "don't remember any actors name in this one",
    }
]);

    
    return ( 
        <div>
            {movies.map(movie => (
                <li>{movie.actors}</li>
            ))}
        </div>
  
  
     );
};
 
export default MovieList;