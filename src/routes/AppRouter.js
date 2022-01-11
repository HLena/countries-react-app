import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);



    useEffect(() => {
        
    }, [ ])


    if ( checking ) {
        return (
            <h1>Waiting...</h1>
        )
    }

    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/countries"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
