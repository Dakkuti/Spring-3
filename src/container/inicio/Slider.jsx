import React from 'react';
import mulan from '../../assets/mulan.png';
import unidos from '../../assets/unidos.png';
import raya from '../../assets/raya.png'
import { Link } from 'react-router-dom';

export const Slider = ({id}) => {
    return (
        <div>
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={mulan} class="d-block w-100" alt="mulan"/>
                </div>
                <div class="carousel-item">
                    <img src={raya} class="d-block w-100" alt="raya"/>
                </div>
                <div class="carousel-item">
                    <img src={unidos} class="d-block w-100" alt="unidos"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

            
        </div>
        
        <Link to={`/Player/${id}`}><button>▶ Ver pelicula </button></Link>
            <button>▶ Ver más tarde</button>
        </div>
    )
}
