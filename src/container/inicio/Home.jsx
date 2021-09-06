import React, { useEffect, useState } from 'react'
import '../../styles/style.css'
import { Navbar } from './Navbar'
import axios from 'axios';
import icon from '../../assets/Icon.png'
import { Slider } from './Slider';


const Home = () => {

    const [movies, setMovies] = useState([]);
 

    useEffect(() => {
        promiseMovies();

    }, [])

    const promiseMovies = async () => {
        const url = 'https://apimovies2340.herokuapp.com/items';
        const resp = await axios.get(url);
        const data = await resp.data;
        setMovies(data);
        //console.log(data);
        return data;
    }

return (
        <div id="contenedor">
            <Navbar />
            <Slider/>
            <div className="row mt-4">
            </div>
        <h2 id="Home-h2">Todas Las peliculas</h2>
            <p>{movies.id}</p>
            {
                movies.map(movies => {
                    return (
                        <ul key={movies.id} id="ul-movies">
                            <li>
                                <img height={400} width={250} src={movies.image} alt="imagen"/>
                                <p id="point"><img src={icon}/> {movies.score}</p>
                            </li>
                        </ul>

                    )

                })

            }

        </div>


    )
}
export default Home