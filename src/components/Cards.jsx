import React from 'react'

function Cards ({ src, title, text }) {
  return (
    <article className='md:w-[260px] md:space-y-6'>
      <div>
        <img src={src} alt='Card Icon' />
      </div>
      <h2 className='md:text-2xl text-DarkBlue'>{title}</h2>
      <p className='text-GrayishBlue'>{text}</p>
    </article>
  )
}

export default Cards
