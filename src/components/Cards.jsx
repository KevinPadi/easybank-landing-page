import React from 'react'

function Cards ({ src, title, text }) {
  return (
    <article className='lg:w-[260px] lg:space-y-6'>
      <div>
        <img src={src} alt='Card Icon' />
      </div>
      <h2 className='lg:text-2xl text-DarkBlue'>{title}</h2>
      <p className='text-GrayishBlue'>{text}</p>
    </article>
  )
}

export default Cards
