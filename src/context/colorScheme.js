import React, {createContext, useReducer} from "react"

const globalTheme = {
    theme: 'dark'
}

export const ThemeContext = createContext(globalTheme);

const reducer = (state, action) => {
    switch(action.type) {
        case 'dark':
            return {
                theme: 'light'
            }
        case 'light':
            return {
                theme: 'dark'
            }
        default:
            throw new Error('invalid action')
    }
}

export const GlobalState = ({children}) => {

    const [state, dispatch] = useReducer(reducer, globalTheme);

    return (
        <ThemeContext.Provider
            value={{state, dispatch}}
        >
            {children}
        </ThemeContext.Provider>
    )
}