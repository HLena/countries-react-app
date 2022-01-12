import styled from 'styled-components'
import { useSelector } from 'react-redux';

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
    button{
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


export const Country = ({name, flag, capital, region, population}) => {

    const { theme } = useSelector( state => state.ui );

    return (
        <CountryStyled theme={theme}>
            <img src={flag} alt={`${name}-country`} />
            <div className = "details">
                <h2>{name}</h2>
                <p><strong>Capital: </strong>{capital}</p>
                <p><strong>Region: </strong>{region}</p>
                <p><strong>Population: </strong>{population}</p>
            </div>
            <button>See More</button>
        </CountryStyled>
    )
}
