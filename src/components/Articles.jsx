import React from 'react'

function Articles ({ src, title, author, text }) {
  return (
    <article className='md:w-[260px] md:space-y-6 md:rounded-t-md md:overflow-hidden md:hover:cursor-pointer'>
      <div>
        <img src={src} alt='Article Image' className='md:hover:scale-[1.05] md:hover:duration-500' />
      </div>
      <div className='md:px-4'>
        <span className='text-xs text-GrayishBlue'>By {author}</span>
        <a className='md:text-lg text-DarkBlue md:inline-block md:hover:text-BrightCyan' href='#'>{title}</a>
        <p className='text-GrayishBlue text-sm'>{text}</p>
      </div>
    </article>
  )
}

export default Articles
