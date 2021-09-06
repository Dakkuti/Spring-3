import React from 'react'
import Img from '../assets/Searching.png';
import '../styles/style.css';
export const NotFound = () => {
    return (
        <div>
            <h1 id="h1-notFound">404 Not Found</h1>
            <img id="img-notFound" src={Img} alt="Not-found"/>
        </div>
    )
}
