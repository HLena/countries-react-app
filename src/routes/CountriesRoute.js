import React from 'react'
import { useSelector} from 'react-redux';
import styled from 'styled-components';
import { Country } from '../components/Country';
import { FilterApp } from '../components/FilterApp';


const CountriesStyled = styled.div`
    width: 80%;
    margin: auto;
    padding: 25px;
    display: flex;
    flex-wrap:wrap;
    gap: 1.5rem;
    justify-content: center;
    @media (min-width: 900px) {
        justify-content: space-between;

    }
`;

export const CountriesRoute = () => {


    const { countries } = useSelector( state => state.countries );

    return (
        <>
            <FilterApp/>
            <CountriesStyled>
                {
                    countries?.map(({name, population, capital, region, flags, ...rest}) => {
                        return (
                            <Country
                                {...rest}
                                key = {`${name?.common}-country`}
                                name = { name?.common}
                                population={population}
                                capital = {capital}
                                region = {region}
                                flag = {flags?.png}
                            />
                        )
                    })
                }
            </CountriesStyled>
        </>
    )
}

