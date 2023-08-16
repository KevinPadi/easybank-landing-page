import React from 'react'

function Articles ({ src, title, author, text }) {
  return (
    <article className='lg:w-[260px] lg:space-y-6 lg:rounded-t-md lg:overflow-hidden lg:hover:cursor-pointer'>
      <div>
        <img src={src} alt='Article Image' className='lg:hover:scale-[1.05] lg:hover:duration-500' />
      </div>
      <div className='lg:px-4'>
        <span className='text-xs text-GrayishBlue'>By {author}</span>
        <a className='lg:text-lg text-DarkBlue lg:inline-block lg:hover:text-BrightCyan' href='#'>{title}</a>
        <p className='text-GrayishBlue text-sm'>{text}</p>
      </div>
    </article>
  )
}

export default Articles
