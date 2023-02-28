import React from 'react'

const Footer = () => {
  return (
    <div className='z-30 absolute bottom-0 w-full bg-slate-900 p-4 flex justify-center items=center text-white border-t border-gray-700'>
      <h3>
        Coded by{' '}
        <a href='https://github.com/its7rishi' target='_blank' rel='noreferrer'>
          <span className='text-pink-700 tracking-widest'>
            Saptarshi Majumdar
          </span>{' '}
          &copy;
        </a>
      </h3>
    </div>
  )
}

export default Footer
