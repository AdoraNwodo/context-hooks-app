import React from 'react'
import MusicContextProvider from './contexts/MusicContext';
import Header from './components/Header';
import MusicList from './components/MusicList';
import MusicForm from './components/MusicForm';

const App = () => {
  return (
    <MusicContextProvider>
      <Header />
      <MusicList />
      <MusicForm />
    </MusicContextProvider>
  );
}

export default App;
