import { types } from "../types/types";

export const setTheme = (theme) => ({
    type: types.uiTheme,
    payload: theme
})

