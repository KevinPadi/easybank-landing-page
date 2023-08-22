import React from 'react'

function Cards ({ src, title, text }) {
  return (
    <article className='text-center space-y-6 md:w-[260px] md:space-y-6 md:text-left'>
      <div className='flex justify-center md:justify-start'>
        <img src={src} alt='Card Icon' />
      </div>
      <h2 className='text-2xl text-DarkBlue'>{title}</h2>
      <p className='text-GrayishBlue'>{text}</p>
    </article>
  )
}

export default Cards
