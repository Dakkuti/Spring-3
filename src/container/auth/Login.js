import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'
import Logo from '../../assets/logo-blockBuster.png'
import '../../styles/login.css';
import { useForm } from '../../hooks/useForm'

const Login = () => {
    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.ui)

    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    //desestructurar 
    const { email, password } = values;

    const hadleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))

    }


    const handleGoogleLogin = () => {
        console.log('Google');
        dispatch(startGoogleLogin())
    }
    return (
        <div className="Registro py-5 container text-center">

            <img src={Logo} id="logo-img" alt="logo"/>
            <form className="form-signin">

                <h1 className="h4 mb-3">Inicio de sesión</h1>

                <div className="">

                    <div className="google-btn btn-primary" id="google-login" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button" />
                        </div>
                        <p className="btn-text"><b>Acceder con Google</b></p>
                    </div>
                </div>
                <div className="google-btn btn-primary" id="fb-login">
                    <div className="google-icon-wrapper" >
                        <img className="google-icon"
                            src="https://image.flaticon.com/icons/png/512/20/20673.png"
                            alt="google button"
                            width="30px" />
                    </div>
                    <p className="btn-text"><b>Acceder con Facebook</b></p>
                </div>
                <input
                    type="email"
                    name="email"
                    id="inputEmail"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    value={email}
                    onChange={handleInputChange}

                />

                <input
                    type="Password"
                    id="inputPassword"
                    name="password"
                    className="form-control mt-1"
                    placeholder="Contraseña"
                    required=""
                    value={password}
                    onChange={handleInputChange}

                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={hadleLogin}
                    disabled={loading}
                >
                    Ingresar
                </button>

                <br/>
                <p className="p-login">¿Aún no tienes cuenta? <Link to="/auth/Register" className="link">Registrate</Link></p>

            </form>
        </div>
    )
}

export default Login