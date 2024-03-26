import { createContext, useReducer } from "react";

const ThemeContext = createContext();

const themeReducer = (state, action) => {
    if (action.type === 'CHANGE_COLOR')
        return { ...state, color: action.payload }
    else if (action.type === 'CHANGE_MODE')
        return {...state, mode: action.payload}
    else
        return state
}

const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c',
        mode: 'light'
    })

    const changeThemeColor = color => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }

    const changeMode = mode => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeThemeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider, ThemeContext }
