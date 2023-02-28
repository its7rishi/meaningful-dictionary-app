import React, { useState, useEffect } from 'react'
import Meaning from './Meaning'

const Navigation = ({ data }) => {
  const [activeSection, setActiveSection] = useState('definition')

  useEffect(() => setActiveSection('definition'), [data])

  const handleClick = (e) => {
    setActiveSection(e.target.innerText.toLowerCase())
  }

  useEffect(() => {
    let navs = document.querySelectorAll('ul li')

    navs.forEach((elem) => {
      if (activeSection === elem.innerText.toLowerCase()) {
        elem.classList.add('border-b-2')
        elem.classList.add('border-b-pink-700')
        elem.classList.add('text-purple-500')
      } else {
        elem.classList.remove('border')
        elem.classList.remove('border-b')
        elem.classList.remove('border-b-2')
        elem.classList.remove('border-b-pink-700')
        elem.classList.remove('text-purple-500')
      }
    })
  }, [activeSection])
  return (
    <>
      <ul className=' mt-4 px-2 sm:px-12 text-sm w-full flex sm:flex-row space-x-6 justify-start sm:justify-between items-center list-none text-white'>
        <li
          onClick={handleClick}
          className={`sm:text-xl cursor-pointer pb-1 hover:border-b-2 `}
        >
          Definition
        </li>
        <li
          onClick={handleClick}
          className='sm:text-xl cursor-pointer pb-1 hover:border-b-2'
        >
          Examples
        </li>
        <li
          onClick={handleClick}
          className='sm:text-xl cursor-pointer pb-1 hover:border-b-2'
        >
          Synonyms
        </li>
        <li
          onClick={handleClick}
          className='sm:text-xl cursor-pointer pb-1 hover:border-b-2'
        >
          Antonyms
        </li>
      </ul>
      <Meaning activeSection={activeSection} data={data} />
    </>
  )
}

export default Navigation
