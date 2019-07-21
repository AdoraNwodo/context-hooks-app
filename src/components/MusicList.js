import React, { useContext } from 'react'
import { MusicContext } from '../contexts/MusicContext';
import MusicDetails from './MusicDetails';

const MusicList = () => {
    const { music } = useContext(MusicContext)
    return music.length ? (
        <div className="music-list">
            <ul>
                { music.map( item => (
                    <MusicDetails music={item} key={item.id} />
                ))}
            </ul>
        </div>
    ): (
        <div className="no-music">You "claim" to have no best songs</div>
    )
}

export default MusicList
