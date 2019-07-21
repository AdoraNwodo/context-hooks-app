import React, { createContext, useReducer } from 'react'
import { musicReducer } from '../reducers/musicReducer';

export const MusicContext = createContext()

const MusicContextProvider = (props) => {
    const [music, dispatch] = useReducer(musicReducer, [])

    return (
        <MusicContext.Provider value={{music, dispatch}}>
            { props.children }
        </MusicContext.Provider>
    )
}

export default MusicContextProvider
