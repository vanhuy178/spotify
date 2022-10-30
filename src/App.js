
import { useState } from 'react';
import './App.css';

import { createSongs } from './components/Context';
import { DetailSongs } from './components/DetailSongs';
import { ListSong } from './components/ListSong';
import { Navbar } from './components/Navbar';
import {Player} from './components/Player';
import dataSongs from './data/songs.json'

function App() {
  const [song, setSong] = useState(dataSongs[0])
  const [isRotate, setIsRotate] = useState(false)

  const handleRotateImgs = (idSong) => {
    if (idSong === song.id)
      setIsRotate(!isRotate)
    else 
      return
  }

  const handleSetSong = idSong => {
    const song = dataSongs.find(song => song.id === idSong)
    if(!song) 
      setSong(dataSongs[0])
    else
      setSong(song)
    }
  return (
    <createSongs.Provider value={{dataSongs, song, isRotate, handleRotateImgs, handleSetSong}}>
      <Navbar />

      <div className='grid grid-cols-1 md:grid-cols-3 bg-slate-700 h-screen-player'>
        <DetailSongs />
        <ListSong />
      </div>
      <Player />
    </createSongs.Provider>
  );
}

export default App;
