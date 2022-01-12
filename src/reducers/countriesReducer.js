import { types } from '../types/types';

const initialState = {
    countries: [],
    selected: null
}


export const countriesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.countriesLoad:
            return {
                ...state,
                countries: action.payload,
            }
        default:
            return state;
    }
}