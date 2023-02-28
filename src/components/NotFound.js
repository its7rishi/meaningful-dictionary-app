import React from 'react'

const NotFound = ({ text }) => {
  return (
    <div className='w-screen h-screen bg-slate-900 flex flex-col items-center justify-center space-y-5'>
      <h1 className='text-6xl text-center text-red-700'>Oops!!!</h1>
      <p className='text-center text-sm sm:text-2xl px-4 sm:px-2 text-blue-700'>
        {text}
      </p>
      <button
        className='border-2 border-blue-500 p-4 rounded-full text-white focus:outline-none active:scale-95 transition-all duration-500 ease-in-out'
        onClick={() => window.document.location.reload()}
      >
        Try a different Search
      </button>
    </div>
  )
}

export default NotFound
