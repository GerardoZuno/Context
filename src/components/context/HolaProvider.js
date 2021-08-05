import React from 'react'

export const HolaContext = React.createContext()


const HolaProvider = ({children}) => {
    const Hola = 'Hola desde Global'
    return (
        
        <HolaContext.Provider value={{Hola}}>
            {children}            
        </HolaContext.Provider>
    )
}

export default HolaProvider
