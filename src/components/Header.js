import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Header = ({ setSearchText }) => {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchText(inputText)
    setInputText('')
  }
  return (
    <div className='flex flex-col space-y-3 sm:space-y-0 sm:flex-row items-center justify-start sm:justify-evenly w-full bg-slate-900 text-white py-4 border-b border-gray-700'>
      <div
        onClick={() => window.location.reload()}
        className='flex flex-col items-center justify-center w-4/12 cursor-pointer'
      >
        <h1 className='text-center text-xl tracking-widest font-semibold'>
          <span className='text-purple-500'>Meaning</span>
          <span className='text-pink-700'>Ful</span>
        </h1>
        <p className='text-xs text-center text-blue-500'>A Dictionary App</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=' relative w-full xs:w-8/12  flex items-center justify-center'
      >
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder='Search...'
          className='w-8/12 py-2 px-4 rounded-full bg-transparent border border-white focus:outline-none'
        />
        <button
          type='submit'
          className='absolute top-3 right-[20%] text-white text-xl font-semibold'
        >
          <BsSearch />
        </button>
      </form>
    </div>
  )
}

export default Header
