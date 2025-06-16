import React from 'react'

const VideoTitle = ({overview,title}) => {
  return (
    <div className='pt-[20%] px-12 absolute w-full aspect-video text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <h5 className='py-6    w-1/4'>{overview}</h5>

      <div className='flex'>
        <button className='p-2 bg-gray-500 text-white px-10 text-lg bg-opacity-50 rounded-lg'>▶️ Play</button>
        <button className='mx-2 p-2 bg-gray-500 text-white px-10 text-lg bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle