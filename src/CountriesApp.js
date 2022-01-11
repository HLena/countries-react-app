import { useEffect } from 'react'
import { AppBar } from './components/AppBar';
import { Country } from './components/Country';
import { FilterApp } from './components/FilterApp';

import styled from 'styled-components';

const Layout = styled.div`
    width: 100%;
    margin: 0;
    background: whitesmoke;
    height: 100vw;
    
`;

const CountriesStyled = styled.div`
    width: 80%;
    margin: auto;
    padding: 25px;
    display: flex;
    flex-wrap:wrap;
    /* justify-content: center; */
    gap: 1.5rem;
`;


const CountriesApp = () => {

    useEffect(() => {
        
    }, [])
    return (
        <Layout>
            <AppBar/>
            <FilterApp/>
            <CountriesStyled>
                <Country 
                    name = "Perú"
                    population={1232}
                    capital = "Lima"
                    region = "América"
                    flag = "https://flagcdn.com/w320/td.png"
                />
                <Country 
                    name = "Perú"
                    population={1232}
                    capital = "Lima"
                    region = "América"
                    flag = "https://flagcdn.com/w320/td.png"
                />
                <Country 
                    name = "Perú"
                    population={1232}
                    capital = "Lima"
                    region = "América"
                    flag = "https://flagcdn.com/w320/td.png"
                />
                <Country 
                    name = "Perú"
                    population={1232}
                    capital = "Lima"
                    region = "América"
                    flag = "https://flagcdn.com/w320/td.png"
                />
            </CountriesStyled>
        </Layout>
    )
}

export default CountriesApp
