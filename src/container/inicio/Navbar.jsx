import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { Link } from 'react-router-dom'
import '../../styles/style.css'
import Logo from '../../assets/logo-blockBuster.png'

export const Navbar = () => {

  const dispatch = useDispatch()
  const { name } = useSelector(state => state.auth)

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
             <Link  to="/" className="nav-link active text-white" >Todas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Más valoradas</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Menos valoradas</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/AppTasks">Agregar</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" >{name}</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/" onClick={() => dispatch(startLogout())}>Salir</Link>
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