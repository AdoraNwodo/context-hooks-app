import React, { useContext } from 'react'
import { MusicContext } from '../contexts/MusicContext';

const Header = () => {
    const { music } = useContext(MusicContext)
    return (
        <div className="header">
            <h1>Your Top Songs</h1>
            <p>Currently you have {music.length} best song(s)</p>
        </div>
    )
}

export default Header
