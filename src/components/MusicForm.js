import React, { useContext, useState } from 'react'
import { MusicContext } from '../contexts/MusicContext';

const MusicForm = () => {
    const { dispatch } = useContext(MusicContext)
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_MUSIC', music: {
            title, artist
        }})
        setTitle("")
        setArtist("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Music title" value={title} onChange={(e) => setTitle(e.target.value)} required/> 
            <input type="text" placeholder="Music artist" value={artist} onChange={(e) => setArtist(e.target.value)} required/>
            <input type="submit" value="Add Music"/>
        </form>
    )
}

export default MusicForm
