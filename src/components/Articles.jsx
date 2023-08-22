import React from 'react'

function Articles ({ src, title, author, text }) {
  return (
    <article className='md:w-[260px] rounded-t-md md:space-y-6 md:overflow-hidden md:hover:cursor-pointer'>
      <div className='rounded-t-md md:w-full md:h-48'>
        <img src={src} className='md:hover:scale-[1.05] md:hover:duration-500 md:w-full md:h-full' alt='Article image' />
      </div>
      <div className='flex flex-col gap-2 p-7 md:px-4'>
        <span className='text-[10px] md:text-xs text-GrayishBlue'>By {author}</span>
        <a className='md:text-lg text-DarkBlue md:inline-block md:hover:text-BrightCyan leading-5 font-medium' href='#'>{title}</a>
        <p className='text-GrayishBlue text-[12px] md:text-sm'>{text}</p>
      </div>
    </article>
  )
}

export default Articles
