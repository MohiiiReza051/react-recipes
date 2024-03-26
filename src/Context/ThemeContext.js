import { createContext, useReducer } from "react";

const ThemeContext = createContext();

const themeReducer = (state, action) => {
    if (action.type === 'CHANGE_COLOR')
        return { ...state, color: action.payload }
    else
        return state
}

const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c'
    })

    const changeThemeColor = color => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeThemeColor }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider, ThemeContext }
