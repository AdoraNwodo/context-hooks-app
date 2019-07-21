import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'

export const MusicContext = createContext()

const MusicContextProvider = (props) => {
    const [music, setMusic] = useState([
        { title: "Love is wicked", artist: "Brick & Lace", id: 1 },
        { title: "I don't care", artist: "Ed Sheeran, Justin Beiber", id: 2 }
    ])
    const addMusic = (title, artist) => {
        setMusic([
            ...music, { title, artist, id: uuid()}
        ])
    }
    const removeMusic = (id) => {
        setMusic(music.filter( music => music.id !== id ))
    }
    return (
        <MusicContext.Provider value={{music, addMusic, removeMusic}}>
            { props.children }
        </MusicContext.Provider>
    )
}

export default MusicContextProvider
