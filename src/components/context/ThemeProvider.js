import React from 'react'

export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {

    const themes = {
       color: '#fff',
       background: '#000',
    }

    const [theme, setTheme] = React.useState(themes)

    React.useEffect(() =>{
        if(localStorage.getItem('themeLocal')){
            const themeLocal = JSON.parse(localStorage.getItem('themeLocal'))
            console.log(themeLocal)
            setTheme(themeLocal)
                }

    }, [])
    const cambioColor = (valor) => {
        setTheme(valor)
        localStorage.setItem('themeLocal', JSON.stringify(valor))

    }

    return (
        <ThemeContext.Provider value={{theme, cambioColor}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
