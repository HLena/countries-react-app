import { types } from '../types/types';

const initialState = {
    theme: 'light',
    // theme: 'dark',

}


export const uiReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.uiTheme:
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state;
    }
}