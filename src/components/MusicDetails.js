import React, { useContext } from 'react'
import { MusicContext } from '../contexts/MusicContext';

const MusicDetails = ({ music }) => {
    const { removeMusic } = useContext(MusicContext)
    return (
        <li>
            <h3 className="title">{music.title}</h3>
            <p className="artist">{music.artist}</p>
            <button onClick={() => removeMusic(music.id)}>Remove</button>
        </li>
    )
}

export default MusicDetails
