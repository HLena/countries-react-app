import { types } from "../types/types";

export const FetchCountries = async () =>{
    const url = "https://restcountries.com/v3.1/all";
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

export const startLoadingData = () => {
    return async (dispatch, getState) => {
        const countries = await FetchCountries();
        dispatch(setCountries(countries));
    }
}