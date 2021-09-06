import React, { useEffect, useState } from 'react'
import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router,Switch, Redirect} from 'react-router-dom';

import AppTaks  from '../container/task/AppTask'
import {AuthRoutes} from './AuthRoutes'
import {PrivateRoutes} from './PrivateRoutes'
import {PublicRoutes} from './PublicRoutes'
import { login } from '../actions/auth';
import Loading from '../components/Loading';
import {NotFound} from '../container/NotFound'
import { ListarCard } from '../actions/taskAction';
import Home from '../container/inicio/Home'
import { Player } from '../container/inicio/Player';

const AppRoutes = () => {
    const [checking, setChecking] = useState(true)
    const [isLooggedIn, setsIsLoogedIn] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user ? user.uid : false) {
                dispatch(login(user.uid, user.displayName))
                setsIsLoogedIn(true)
               dispatch(ListarCard(user.uid))
            } else {
                setsIsLoogedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking])

    if (checking) {
        return <Loading />
    }


    return (
        <Router>
           <div>
               <Switch>
                   <PublicRoutes
                       path="/auth"
                       component={AuthRoutes}
                       isAuthenticated ={isLooggedIn}
                   />

                   <PrivateRoutes
                       exact
                       path="/AppTasks"
                       component={AppTaks}
                       isAuthenticated ={isLooggedIn}
                   />

                    <PrivateRoutes
                       exact
                       path="/"
                       component={Home}
                       isAuthenticated ={isLooggedIn}
                   />

                   
                    <PrivateRoutes
                       exact
                       path="/Player/:id"
                       component={Player}
                       isAuthenticated ={isLooggedIn}
                   />

                   <Redirect to="/auth/Login" />


               </Switch>
           </div>
       </Router>
   )
}

export default AppRoutes