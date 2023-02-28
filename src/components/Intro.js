import React from 'react'

const Intro = () => {
  return (
    <div className='w-full h-full flex flex-col mt-20 sm:mt-0 items-center justify-start sm:justify-center space-y-8'>
      <h1 className='text-center text-white text-3xl sm:text-8xl'>
        Welcome to <span className='text-purple-500'>Meaning</span>
        <span className='text-pink-700'>Ful</span>
      </h1>
      <h4 className='text-center text-blue-600 text-xl sm:text-6xl'>
        Search a word to find it's meaning.
      </h4>
    </div>
  )
}

export default Intro
