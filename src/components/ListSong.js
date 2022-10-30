import React, { useContext, useEffect, useState } from 'react'
import { createSongs } from './Context'

export const ListSong = () => {
    const {dataSongs, handleSetSong, song, handleRotateImgs} = useContext(createSongs)

    const [idSong, setIdSong] = useState(0)

    const handlePlaySong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
        handleRotateImgs(idSong)
    }
    useEffect(() => {
        setIdSong(song.id)
    }, [song])
  return (
    <div className='md:col-span-2 overflow-y-scroll overflow-x-hidden'>
        <table className='w-full'>

            <thead className='text-white  sticky top-0'>
                <tr className='uppercase font-bold'>
                    <th className='w-[10%]'>#</th>
                    <th className='text-left'>Title</th>
                    <th className='w-[10%]'>Author</th>
                    <th className='w-[10%]'><i className='fa fa-download'></i></th>
                </tr>
            </thead>

            <tbody>
                {dataSongs.map((song, index) => {
                    const {name, author, url} = song;
                    return (
                        <tr key = {index}
                        className={`bg-slate-800 md:h-12 text-gray-500 hover:bg-slate-600 hover:scale-105 transition ease-out 
                        ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
                        onClick  = {() => handlePlaySong(song.id)}
                        >
                            <td className='text-center'>{index + 1}</td>
                            <td>{name}</td>
                            <td className='text-center'>{author}</td>
                            <td className='text-center'><a href={url}><i className='fa fa-download'></i></a></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
