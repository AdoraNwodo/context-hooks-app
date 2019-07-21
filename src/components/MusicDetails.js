import React, { useContext } from 'react'
import { MusicContext } from '../contexts/MusicContext';

const MusicDetails = ({ music }) => {
    const { dispatch } = useContext(MusicContext)
    return (
        <li>
            <h3 className="title">{music.title}</h3>
            <p className="artist">{music.artist}</p>
            <button onClick={() => dispatch({ type: 'REMOVE_MUSIC', id: music.id})}>Remove</button>
        </li>
    )
}

export default MusicDetails
