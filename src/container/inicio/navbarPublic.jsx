import React from 'react'
import { startLogout } from '../../actions/auth'
import { Link } from 'react-router-dom'
import '../../styles/style.css'
import Logo from '../../assets/logo-blockBuster.png'

export const NavbarPublic = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <div className="container-fluid">
        <img src={Logo} id="logo-img" alt="logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <Link  to="/Home" className="nav-link active text-white" >Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/auth/Login">Iniciar Sessión</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/auth/Register">Registrate</Link>
            </li>

          </ul>
          <form className="d-flex">
            <input className="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>

  )
}