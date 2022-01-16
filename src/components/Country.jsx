import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setCountrySelected } from '../actions/countries';

const CountryStyled = styled.div`
    width: 264px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
    }
    .details{
        padding: 1.5em;
    }
    h2 {
        margin: 0;
        margin-bottom: 1rem;
        font-size: 18px;
    }
    p {
        font-size: .9em;
        margin-bottom: .5rem;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
        width: 80%;
        display: block;
        margin: auto;
        margin-bottom: 1rem;
        padding: 8px 16px;
        border: none;
        color: white;
        background: #04aa04;
        font-weight: bold;
        border-radius: 5px;
        outline: none;
    }
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
`


export const Country = ({
    name, 
    flag,
    capital,
    region,
    population,
    languages,
    continents,
    coatOfArms,
    maps,
    latlng}) => {

    const { theme } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const handleOnClinckCountry = () => {
        dispatch(setCountrySelected({
            name,
            flag,
            capital,
            region,
            population,
            languages,
            continents,
            coatOfArms,
            maps,
            latlng
        }))
        
    }

    return (
        <CountryStyled theme={theme}>
            <img src={flag} alt={`${name}-country`} />
            <div className = "details">
                <h2>{name}</h2>
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
            </div>
            <Link to={`/country/${name}`}>
                <button onClick = { handleOnClinckCountry }>See More</button>
            </Link>
        </CountryStyled>
    )
}
