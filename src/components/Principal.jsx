import React from 'react'
import {ThemeContext} from './context/ThemeProvider'
import {HolaContext} from './context/HolaProvider'

function Principal() {
    const {theme} = React.useContext(ThemeContext);
    const {Hola} = React.useContext(HolaContext);


    console.log(Hola)
    console.log(theme)


    return (
        <div style={
            {
            background: theme.background,
            color: theme.color
            }
        }>
            <h2 >Contenido Principal</h2>
            <h3>{Hola}</h3>
        </div>
    )
}

export default Principal
