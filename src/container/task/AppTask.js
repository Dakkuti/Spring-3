import React from 'react'
import MoviesCard from './MoviesCard'
import {useSelector } from 'react-redux'
import { Navbar } from '../inicio/Navbar'
import { AddMovies } from './AddMovies'

const AppTaks = () => {


    const { card } = useSelector(state => state.card)

    return (
        <div className="App">
          <Navbar />
            <div className="container ">
                <div className="row mt-4">
                    <div className="col-md-4 text-center py-3">
                        <img src="https://image.flaticon.com/icons/png/512/3507/3507102.png" className="App-logo " alt="logo" />
                        
                        <AddMovies />
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <main>
                                {
                                    <MoviesCard card={card} />
                                }
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppTaks