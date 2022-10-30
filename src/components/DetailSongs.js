import React, { useContext} from 'react'
import { createSongs } from './Context'
export const DetailSongs = () => {
  const {song, isRotate} = useContext(createSongs);

  return (
    <div className='col-span-1 p-3'>
        <div className='text-center '>
            <h2 className='heading'>Now Playing</h2>
            <h2 className='songName '>{song.name}</h2>
        </div>

        <div className={`w-[240px] h-[240px] mt-4 m-auto p-2 ${isRotate ? 'animate-spin-slow' : ''}`}>
            <img className='w-full h-full rounded-full' src = {song.links.images[0].url} alt = 'avatar'></img>
        </div>

        <div className='flex items-center justify-evenly mt-10'>
            <img src = {song.links.images[0].url} className = {`w-[50px] h-[50px] rounded-full ${isRotate ? 'animate-bounce ' : ''}`}  alt = 'avatar'></img>
            <p className='text-white'><h5>{song.author}</h5></p>
        </div>
    </div>
  )
}
