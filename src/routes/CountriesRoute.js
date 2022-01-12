import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

import { Country } from '../components/Country';
import { FilterApp } from '../components/FilterApp';


const CountriesStyled = styled.div`
    width: 80%;
    margin: auto;
    padding: 25px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    gap: 1.5rem;
`;

export const CountriesRoute = () => {


    const dispatch = useDispatch();
    const { countries } = useSelector( state => state.countries );
    // console.log(countries[0])

    return (
        <>
            <FilterApp/>
            <CountriesStyled>
                {
                    countries?.map(({name, population, capital, region, flags}) => {
                        return (
                            <Country
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

