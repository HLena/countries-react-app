import { types } from "../types/types";

const BASE_URL = 'https://restcountries.com/v3.1';
export const FetchCountries = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET'
        })
        if(response.ok){
            const countries = await response.json();
            return countries;
        } else {
            throw await response.json()
        }
    } catch (error) {
        console.log(error);
    }
}


const setCountries = (countries) => ({
    type: types.countriesLoad,
    payload: countries
})

export const setContryName = (name) => ({
    type: types.countriesSetName,
    payload: name
})

export const setContryRegion = (region) => ({
    type: types.countriesSetRegion,
    payload: region
})

export const setCountrySelected = (country) => ({
    type: types.countriesSelected,
    payload: country
})

export const startLoadingData = () => {
    return async (dispatch, getState) => {

        const { name, region } = getState().countries.filter;
        let query = '';
        let url = '';
        if(!name && !region) {
            query = '/all';
            url = BASE_URL + query;
        } else if (name) {
            query = `/name/${name}`;
            url = BASE_URL + query;    
        } else if(region) {
            query = `/region/${region}`;
            url = BASE_URL + query;
        }
        const countries = await FetchCountries(url);
        dispatch(setCountries(countries));
    }
}