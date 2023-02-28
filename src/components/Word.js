import React from 'react'

const Word = ({ data }) => {
  return (
    <div className='w-full p-8 bg-transparent text-white flex flex-col items-start justify-center space-y-4'>
      <h1 className='text-xl sm:text-3xl text-center sm:text-left'>
        {data[0].word}
      </h1>
      <div className='flex items-center justify-center space-x-2'>
        <h4 className='text-left text-sm sm:text-normal'>Phonetics:</h4>
        <p className='text-left text-gray-400'>{data[0].phonetic}</p>
      </div>
    </div>
  )
}

export default Word
