import { types } from '../types/types';

const initialState = {
    countries: [],
    selected: null,
    filter: {
        name: '',
        region: ''
    }
}


export const countriesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.countriesLoad:
            return {
                ...state,
                countries: action.payload,
            }
        case types.countriesSetName:
            return {
                ...state,
                filter: {
                    region: '',
                    name: action.payload
                }
            }
        case types.countriesSetRegion:
            return {
                ...state,
                filter: {
                    name: '',
                    region: action.payload
                }
            }
        default:
            return state;
    }
}