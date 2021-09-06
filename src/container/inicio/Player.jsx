import React from 'react'
import { Link } from 'react-router-dom'

export const Player = () => {
    return (
        <div className='Player'>
            <video controls autoPlay>
                <source src="" type="vides/mp4"/>
            </video>
            <div className="Player-back">
                <Link to="/Home"><button type="button">Regresar</button></Link>
            </div>
            
        </div>
    )
}
