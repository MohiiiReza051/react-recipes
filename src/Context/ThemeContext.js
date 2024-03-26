import { createContext, useReducer, useEffect } from "react";

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
    const initialState = JSON.parse(localStorage.getItem('themeState')) || {
        color: '#58249c',
        mode: 'light'
    };
    const [state, dispatch] = useReducer(themeReducer, initialState);

    const changeThemeColor = color => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }

    const changeMode = mode => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }

    useEffect(() => {
        localStorage.setItem('themeState', JSON.stringify(state));
    }, [state]);

    return (
        <ThemeContext.Provider value={{ ...state, changeThemeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider, ThemeContext }
