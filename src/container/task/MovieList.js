import React from 'react';
import { MoviesCard } from './MoviesCard';
import { useSelector } from 'react-redux';


export const MovieList = ( {movie} ) => {

    
    const {movies} = useSelector(store => store.movie);

    return (
        <div className="card-columns animate__animated animate__fadeIn">

             {
               (movies)?
               (
                movies.map( item => (
                    <MoviesCard 
                         key={ item.id }
                         { ...item }
                     />
                    
                ))
               ):
               <p>No hay datos</p>
           } 
        </div>
    )
}