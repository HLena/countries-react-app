import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Map  from '../components/GoogleMaps';

const CountryWrapper = styled.div`
    width: 90%;
    margin: 1.5rem auto;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ${({theme}) => {
        if(theme === 'light') {
            return `
                background: white;
                color: #333;
            `
        } else {
            return `
                background: #273542;
                color: white;
            `
        }
    }}
    span a {
        color: ${
            ({theme}) => theme === 'light'? '#333':'white'
        };
        text-decoration: none;
        cursor: pointer;
    }
    img{
        width: 100%;
        margin: auto;
        max-width: 600px;
    }
    .country-details{
        text-align: center;
        padding: 1rem;
        h1 { text-align: center;}
    }
    .google_maps{
        border-top: 3px solid #eee;
        h3 { text-align: center;}
    }
    
`;



export const CountryRoute = () => {
    const { countryName } = useParams();
    const { 
        countries, ui : {theme}
    } = useSelector( state => state );

    const { 
        flag,
        capital,
        region,
        population,
        languages,
        continents,
        coatOfArms, 
        maps,
        latlng
    } = countries.selected;
    return (
        <CountryWrapper theme= {theme}>
            <span><Link to = '/countries'>{'Countries >'}</Link> {countryName}</span>
            <img src = {flag} alt = {countryName}/>
            <div className="country-details">
                <h1>{countryName}</h1>
                {
                        capital &&
                        <p><strong>Capital: </strong>{capital}</p>
                    }
                    {
                        region &&
                        <p><strong>Region: </strong>{region}</p>
                    }
                    {
                        population > 0 &&
                        <p><strong>Population: </strong>{population}</p>
                    }
                    {
                        languages &&
                        <p><strong>languages: </strong>{languages.nor}</p>
                    }
                    {
                        continents &&
                        <p><strong>continents: </strong>{continents}</p>
                    }

            </div>
            
            <div className="google_maps">
                <h3>Google Maps Ubication</h3>
                <Map latlng = { latlng }/>
            </div>

        </CountryWrapper>
    )
}

