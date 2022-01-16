import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { CountryRoute } from './CountryRoute';
import { CountriesRoute } from './CountriesRoute';
import styled from 'styled-components';
import { AppBar } from '../components/AppBar';
import { startLoadingData } from '../actions/countries';




const Layout = styled.div`
    width: 100%;
    margin: 0;
    ${({theme}) => {
        if(theme === 'light') {
            return `
                background: #fafafa;
                color: #333;
            `
        } else {
            return `
                background: #1a2833;
                color: white;
            `
        }
    }}
    min-height: 100vh;
    height: auto;
    
`;

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { ui: { theme }, countries: { filter } } = useSelector( state => state );


    const [ checking, setChecking ] = useState(true);



    useEffect(() => {
        dispatch(startLoadingData());
        setChecking(false);
    }, [dispatch, filter])


    if ( checking ) {
        return (
            <h1>Waiting...</h1>
        )
    }

    
    return (
        <Router>
            <Layout theme = {theme}>
                <AppBar/>
                <div>
                    <Routes>
                        <Route 
                            path = "/countries/"
                            element = { <CountriesRoute/>}
                        >
                        </Route>
                        <Route
                            
                            path = "country/:countryName"
                            element = {<CountryRoute/> }
                        ></Route>

                    </Routes>
                    
                </div>
            </Layout>
        </Router>
    )
}
