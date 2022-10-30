import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { createSongs } from './Context';
export const Player = () => {
  const {song, handleSetSong} = useContext(createSongs);
  const handleClickNext = () => {
    handleSetSong(song.id + 1)
  }
  const handleClickPre = () => {
    handleSetSong(song.id - 1)
  }
  return (
    <div>
        <AudioPlayer 
        src= {song.url}
        className= 'player-music timeColor'
        showSkipControls={true} 
        showJumpControls={false} 
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
        />
    </div>
  )
}
